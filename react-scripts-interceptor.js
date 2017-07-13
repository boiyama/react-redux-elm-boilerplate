/* eslint-disable flowtype/require-valid-file-annotation */
const proxyquire = require("proxyquire")

switch (process.argv[2]) {
  // Override "start" script
  case "start": {
    process.env.BABEL_ENV = "development"
    process.env.NODE_ENV = "development"

    const config = require("react-scripts/config/webpack.config.dev")
    const override = require("./webpack.config.dev.override")

    proxyquire("react-scripts/scripts/start.js", {
      "../config/webpack.config.dev": override(config),
    })
    break
  }

  // Override "build" script
  case "build": {
    process.env.BABEL_ENV = "production"
    process.env.NODE_ENV = "production"

    const config = require("react-scripts/config/webpack.config.prod")
    const override = require("./webpack.config.prod.override")

    proxyquire("react-scripts/scripts/build.js", {
      "../config/webpack.config.prod": override(config),
    })
    break
  }

  // Override "build:demo" script
  case "build:demo": {
    process.env.BABEL_ENV = "production"
    process.env.NODE_ENV = "production"

    const getClientEnvironment = require("react-scripts/config/env")

    const config = proxyquire("react-scripts/config/webpack.config.prod", {
      "./env": publicUrl => {
        const { raw, stringified } = getClientEnvironment(publicUrl)
        raw.DEMO = true
        stringified["process.env"].DEMO = JSON.stringify(raw.DEMO)

        return { raw, stringified }
      },
    })

    const override = require("./webpack.config.prod.override")

    proxyquire("react-scripts/scripts/build.js", {
      "../config/webpack.config.prod": override(config),
    })
    break
  }

  // Override "test" script
  case "test": {
    process.env.BABEL_ENV = "test"
    process.env.NODE_ENV = "test"
    process.env.PUBLIC_URL = ""

    proxyquire("react-scripts/scripts/test.js", {
      "./utils/createJestConfig": (resolve, rootDir, isEjecting) =>
        // Use .babelrc
        require("react-scripts/scripts/utils/createJestConfig")(
          resolve,
          rootDir,
          true
        ),
    })
    break
  }

  default: {
    console.log(
      "react-scripts-interceptor only supports 'start', 'build', and 'test' options."
    )
    process.exit(-1)
  }
}
