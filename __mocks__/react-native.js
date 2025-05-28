// Mock for react-native
const React = require("react");
const reactNative = jest.createMockFromModule("react-native");

// Mock the components we use in our tests
reactNative.View = ({ children, testID, style, ...props }) => {
  return React.createElement("View", { testID, style, ...props }, children);
};
reactNative.View.displayName = "View";

reactNative.Text = ({ children, testID, style, ...props }) => {
  return React.createElement("Text", { testID, style, ...props }, children);
};
reactNative.Text.displayName = "Text";

reactNative.Pressable = ({ children, testID, onPress, style, ...props }) => {
  return React.createElement(
    "Pressable ",
    { testID, onPress, style, ...props },
    children,
  );
};
reactNative.Pressable.displayName = "Pressable";

reactNative.StyleSheet = {
  create: (styles) => styles,
  flatten: (style) => style,
};

module.exports = reactNative;
