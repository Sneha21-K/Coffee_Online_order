const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const uri = 'mongodb+srv://snehakamthekar2227:snehakamthekar21@cluster0.5b2il8m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
const ordersRouter = require('./routes/orders');
app.use('/orders', ordersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
