const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
// mongoose.connect("mongodb://localhost/mern-backend", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
