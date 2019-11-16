const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app.js');

console.log(process.env.NODE_ENV);
const port = 8000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});
