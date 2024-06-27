const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB Connected'))
.catch((err) => { console.error('DB error', err); });

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
