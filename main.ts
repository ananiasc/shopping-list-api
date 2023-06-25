import { app } from './src/app';
require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`server running in port ${process.env.PORT}`);
});
