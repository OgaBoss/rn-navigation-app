// Mock the expo-status-bar module
jest.mock("expo-status-bar", () => ({
  StatusBar: () => "StatusBar",
}));

// Add any other setup needed for tests
