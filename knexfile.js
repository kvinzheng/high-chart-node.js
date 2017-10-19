module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/high_chart_dev',
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/high_chart_test',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
