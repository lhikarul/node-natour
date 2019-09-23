const express = require('express');
const morgan  = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

if (process.env.NODE === 'development') {
    app.use(morgan('dev'));
}

const app = express();

app.use(express.json());



app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.listen(3000)

// const port = process.env.PORT || 2000;

// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
// });

// module.exports = app;