module.exports = 
  {
    "extends": "react-app",
    "overrides": [
      {
        "files": ["src/service-worker.js"],
        "rules": {
          "no-restricted-globals": ["error", "self"]
        }
      }
    ]
  }
  