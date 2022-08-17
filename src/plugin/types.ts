import { MoBrixEngineDispatch } from "mobrix-engine-types";
import { MoBrixDesignerPlugin } from "mobrix-designer-types";

export type DrawersPluginSettings = {
  /** Drawer custom content */
  content?: (props: { dispatch: MoBrixEngineDispatch }) => JSX.Element;

  /** Drawer position (relative to the window) */
  position?: string;

  /** Drawer position (relative to the window) */
  onClose?: (dispatch: MoBrixEngineDispatch) => void;

  /** Custom selector to get the drawer visibility */
  getDrawerVisibility?: (state: Record<string, any>) => boolean;

  /** Custom selector to get the dark mode status */
  getDarkMode?: (state: Record<string, any>) => boolean;
};

export type DrawerPlugin = MoBrixDesignerPlugin<{
  drawer?: DrawersPluginSettings;
}>;
