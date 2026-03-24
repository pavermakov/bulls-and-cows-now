import { Platform } from "react-native";
import { useSafeAreaInsets, EdgeInsets } from "react-native-safe-area-context";

const useGlobalInsets = () => {
  const insets: EdgeInsets = useSafeAreaInsets();
  const fixedInsets: EdgeInsets = {
    top: insets.top,
    left: insets.left,
    right: insets.right,
    bottom: insets.bottom,
  };

  return insets;
};

export default useGlobalInsets;
