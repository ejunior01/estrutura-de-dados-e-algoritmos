module.exports = {
  roots: ["<rootDir>/test"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
};
