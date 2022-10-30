const config = {
  development: {
    username: "",
    password: process.env.PASSWORD,
    database: "opera_development",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "",
    password: process.env.PASSWORD,
    database: "opera_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "",
    password: process.env.PASSWORD,
    "database": "opera_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

export default config
