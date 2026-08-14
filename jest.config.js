/**
 * @type {import('jest').Config}
 */
export default {
  moduleFileExtensions: ["js", "jsx"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "src/**/*.ts"],
  coverageDirectory: "./coverage",
};
