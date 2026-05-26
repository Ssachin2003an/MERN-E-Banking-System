// require("dotenv").config();
// const path = require("path");
// const express = require("express");
// const cors = require("cors");
// // const cors = require('cors');
// require('dotenv').config();
// const app = express();
// const { corsDevOptions, corsProOptions } = require('./config/corsConfig');
// app.use(cors());
// // const corsOptions = require('./config/corsConfig');
// const isProduction = process.env.NODE_ENV?.trim() === 'production';
// app.use(cors(isProduction ? corsProOptions : corsDevOptions));
// //connect to mongodb
// const { connectToMongoose } = require("./config/db");
// app.use(cors(corsOptions));
// // const express = require('express');
// //middlewares
// //express json parser middleware
// app.use(express.json());

// //cors middleware
// const { corsProOptions } = require("./config/corsConfig");
// app.use(cors(corsProOptions));

// // Apply the rate limiting middleware to API calls only
// const {
//   apiLimiter,
// } = require("./middlewares/rateLimitMiddleware/rateLimitMiddleware");
// app.use("/api", apiLimiter);

// //users Router
// const usersRoute = require("./routes/usersRoutes");
// app.use("/api/users", usersRoute);

// //admins Router
// const adminsRoute = require("./routes/adminRoutes");
// app.use("/api/admins", adminsRoute);

// //account Router
// const accountRoute = require("./routes/accountRoutes");
// app.use("/api/account", accountRoute);

// //account requests Router
// const accountRequestRoute = require("./routes/accountRequestRoutes");
// app.use("/api/request", accountRequestRoute);

// //serve Frontend
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../Frontend/dist")));

//   app.get("*", (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, "../", "Frontend", "dist", "index.html")
//     )
//   );
// }

// connectToMongoose()
//   .then(() => {
//     app.listen(process.env.PORT || 5000, () => {
//       console.log("server is running");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

const { corsDevOptions, corsProOptions } = require("./config/corsConfig");
const isProduction = process.env.NODE_ENV?.trim() === "production";

// Use CORS only once with the correct options
app.use(cors(isProduction ? corsProOptions : corsDevOptions));

// Middleware to parse JSON bodies
app.use(express.json());

// Rate limiting middleware
const { apiLimiter } = require("./middlewares/rateLimitMiddleware/rateLimitMiddleware");
app.use("/api", apiLimiter);

// MongoDB connection
const { connectToMongoose } = require("./config/db");

// Routes
app.use("/api/users", require("./routes/usersRoutes"));
app.use("/api/admins", require("./routes/adminRoutes"));
app.use("/api/account", require("./routes/accountRoutes"));
app.use("/api/request", require("./routes/accountRequestRoutes"));

// Serve frontend in production
if (isProduction) {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../", "Frontend", "dist", "index.html"))
  );
}

// Start the server after DB connection
connectToMongoose()
  .then(() => {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });