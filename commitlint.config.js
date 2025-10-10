export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["chore", "docs", "feat", "fix", "refactor", "style", "test"],
    ],
    "subject-case": [2, "always", ["sentence-case", "lower-case"]],
  },
};
