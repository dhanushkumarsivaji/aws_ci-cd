require('dotenv').config()

const config = {
  mongodb: {
    url: process.env.DB,
    databaseName: "test",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog"
};

module.exports = config;
