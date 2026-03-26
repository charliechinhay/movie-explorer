/* global module */
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^react$": "<rootDir>/../node_modules/react/index.js",
    "^react-dom$": "<rootDir>/../node_modules/react-dom/index.js",
    "^react-dom/(.*)$": "<rootDir>/../node_modules/react-dom/$1",
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
    "^framer-motion$": "<rootDir>/__mocks__/framer-motion.js",
    ".*movieService.*": "<rootDir>/__mocks__/movieServiceMock.js",
  },
  moduleFileExtensions: ["js", "jsx"],
};
