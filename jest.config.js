export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^providers/(.*)$": "<rootDir>/src/providers/$1",
    "^sections/(.*)$": "<rootDir>/src/sections/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^store/(.*)$": "<rootDir>/src/store/$1",
    "^routes/(.*)$": "<rootDir>/src/routes/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.ts",
  },
  coveragePathIgnorePatterns: ["/node_modules/"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};