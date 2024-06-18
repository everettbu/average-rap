const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const mongoose = require('mongoose'); // Comment out for now
const authRoutes = require('./routes/auth');
const albumRoutes = require('./routes/albums');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Comment out MongoDB connection for now
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/albums', albumRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
