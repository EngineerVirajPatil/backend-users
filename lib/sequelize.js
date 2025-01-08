const { Sequelize } = require("sequelize");
const config = require("../config/config")[process.env.NODE_ENV || "development"];

let sequelize;

// Check for environment variables
if (config.use_env_variable) {
  // Use the connection string for runtime or migrations
  sequelize = new Sequelize(process.env[config.use_env_variable], {
    dialect: "postgres",
    logging: config.logging,
  });
} else {
  // Use individual configuration
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: "postgres",
    logging: config.logging,
  });
}

module.exports = sequelize;
