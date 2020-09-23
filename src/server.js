const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const routes = require("./routes");

routes(app);

app.listen(process.env.PORT | 5000, () => console.log("Server started."));
