/**
 * @format
 */
import { enableFreeze, enableScreens } from "react-native-screens";
import { Platform, UIManager, AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./src/App";
enableScreens();
enableFreeze();
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
AppRegistry.registerComponent(appName, () => App);
