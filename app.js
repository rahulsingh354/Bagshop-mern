const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path"); // Use lowercase for consistency
const expressSession = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();

const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const indexRouter = require("./routes/index");

const db = require("./config/mongoose-connection");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ fixed typo
app.use(cookieParser());

// Session setup
if (!process.env.EXPRESS_SESSION_SECRET) {
  console.warn("⚠️ EXPRESS_SESSION_SECRET not set in .env");
}
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET || "defaultSecretKey",
  })
);

app.use(flash());
app.use(express.static(path.join(__dirname, "public"))); // ✅ check folder name: was "ppublic"
app.set("view engine", "ejs");

// Routes
app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});











// const express = require("express");
// const app = express();
// const cookieParser = require("cookie-parser");
// const Path = require("path");
// const expressSession = require("express-session");
// const flash = require("connect-flash");

// require("dotenv").config();


// const ownersRouter = require("./routes/ownersRouter");
// const productsRouter = require("./routes/productsRouter");
// const usersRouter = require("./routes/usersRouter");
// const indexRouter = require("./routes/index");




// const db = require("./config/mongoose-connection");



// app.use(express.json());
// app.use(express.urlencoded({ extends: true })
// );
// app.use(cookieParser());
// app.use(
//     expressSession({
//         resave: false,
//         saveUninitialized: false,
//         secret: process.env.EXPRESS_SESSION_SECRET,
//     })
// );


// app.use(flash());
// app.use(express.static(Path.join(__dirname, "ppublic")));
// app.set("view engine", "ejs");


// app.use("/", indexRouter);
// app.use("/owners", ownersRouter);
// app.use("/users", usersRouter);
// app.use("/products", productsRouter);

// // app.get("/", (req, res) =>{
// //     res.send("hey");
// // });

// app.listen(3000);