const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');

// DB Connection
mongoose
	.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB Connected'))
	.catch((error) => console.log(error));

// Middlewares
const postsRoutes = require('./routes/posts');
app.use('/api/posts', postsRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
