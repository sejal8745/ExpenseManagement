const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");

// config dotenv file
dotenv.config();

//database connection
connectDb();

//rest object
const app = express();

//middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes to test routes
//app.get("/", (req, res) => {
//res.send("<h1>Hello buddy from server</h1>");
//});

//user routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transactions route
app.use("/api/v1/transactions", require("./routes/transactionroutes"));

//port
const PORT = 9000 || process.env.PORT;

//listener server
app.listen(PORT, (req, res) => {
  console.log("listening on port " + PORT);
});
