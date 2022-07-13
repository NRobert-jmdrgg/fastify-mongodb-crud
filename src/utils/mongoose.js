const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/fastifycrud')
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));
