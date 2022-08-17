import { DrawerPlugin } from "./types";

import { createMoBrixDesignerPlugin } from "mobrix-designer-tools";

import AppDrawer from "./component";

const drawerPlugin: DrawerPlugin = createMoBrixDesignerPlugin(
  "mobrix-designer-drawer",
  () => ({
    internalComponent: AppDrawer,
    field: (creator) => {
      let drawerConfig: Record<string, any> = creator.drawer || {};

      return {
        name: "drawer",
        content: {
          getDarkMode: drawerConfig.getDarkMode,
          getDrawerVisibility: drawerConfig.getDrawerVisibility,
          onClose: drawerConfig.onClose,
          content: drawerConfig.content,
          position: drawerConfig.position,
        },
      };
    },
  })
);

export default drawerPlugin;
