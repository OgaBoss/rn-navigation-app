module.exports = {
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["node_modules/"],
  setupFiles: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/__tests__/**/*.spec.[jt]s?(x)"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svgMock.js",
    "\\.(jpg|jpeg|png|gif|webp)$": "<rootDir>/__mocks__/imageMock.js",
    "^react-native$": "<rootDir>/__mocks__/react-native.js",
    "^@react-native/(.*)$": "<rootDir>/__mocks__/react-native.js",
  },
  testEnvironment: "node",
};
