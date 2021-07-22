const config = {
    testEnvironment:"jsdom",
    "transform": {
        "^.+\\.jsx?$": "babel-jest", // Adding this line solved the issue
        "^.+\\.tsx?$": "ts-jest"
      },
};
module.exports = config;
