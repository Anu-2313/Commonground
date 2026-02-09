const app = require('./app');
const { connectDatabase } = require('./config/database');

const PORT = process.env.PORT || 5000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`CommonGround API running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to database', error);
    process.exit(1);
  });
