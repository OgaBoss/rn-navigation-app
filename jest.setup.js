// Mock the expo-status-bar module
jest.mock("expo-status-bar", () => ({
  StatusBar: () => "StatusBar",
}));

// Mock StyleSheet from react-native
jest.mock("react-native", () => {
  const reactNative = jest.requireActual("react-native");

  return {
    ...reactNative,
    StyleSheet: {
      create: (styles) => styles,
      flatten: (style) => style,
    },
    Pressable: ({ children, testID, onPress, style, ...props }) => {
      return require("react").createElement(
        "Pressable",
        { testID, onPress, style, role: "button", ...props },
        children
      );
    },
  };
});

// Add any other setup needed for tests
