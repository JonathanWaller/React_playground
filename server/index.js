const express = require("express");
const { json } = require("body-parser");
const port = 3001;

const app = express();

app.listen(port, () => console.log(`time to party @ ${port}`));
