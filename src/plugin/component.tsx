import React from "react";
import { useSelector } from "react-redux";
import { MoBrixDesignerComponent } from "mobrix-designer-types";

import { Drawer } from "mobrix-ui";
import { DrawersPluginSettings } from "./types";

const AppDrawer: MoBrixDesignerComponent<{
  drawer?: DrawersPluginSettings;
}> = ({ creatorConfig, store }) => {
  const dispatch = store?.dispatch!;

  const drawerConfig = creatorConfig.drawer!;
  const onCloseCallback = drawerConfig.onClose || (() => {});

  const isDrawerShowing = useSelector(
    drawerConfig.getDrawerVisibility || ((state: any) => false)
  );
  const darkMode = useSelector(
    drawerConfig.getDarkMode || ((state: any) => false)
  );
  const Content =
    drawerConfig.content || ((props: { dispatch: any }) => <div />);
  const onClose = onCloseCallback;

  React.useEffect(() => {
    if (isDrawerShowing) {
      let element = document.getElementById("mobrix-ui-drawer");
      document.getElementById("app-container")!.onclick = function (e: Event) {
        if (element && !element.contains(e.target as Node)) {
          onClose && onClose(dispatch);
        }
      };
    } else {
      document.getElementById("app-container")!.onclick = null;
    }
  }, [onClose, isDrawerShowing, dispatch]);

  return (
    <Drawer
      dark={darkMode}
      position={drawerConfig.position as any}
      hide={!isDrawerShowing}
      children={<Content dispatch={dispatch} />}
      onClose={() => {
        onClose && onClose(dispatch);
      }}
    />
  );
};

export default AppDrawer;
