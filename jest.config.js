module.exports = {
  "moduleNameMapper": {
    "^@/components/(.*)$": "<rootDir>/src/components/$1.vue"
  },
  "snapshotSerializers": [
    "<rootDir>/jest/htmlSnapshotBeautifier.js"
  ],
  "transform": {
    "^.+\\.vue$": "jest-vue-preprocessor",
    "^.+\\.js$": "babel-jest"
  }
}
