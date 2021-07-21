module.exports = {
    "src/**/*.js": ["npm run lint:js"],
    "src/**/*.js": ["npm run lint:js", "npm run test:related"],
  };