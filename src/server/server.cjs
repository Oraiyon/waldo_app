const ViteExpress = require("vite-express");
const makeApp = require("./app.cjs");
const database = require("./databases/mongoConfig.cjs");

const app = makeApp(database);

const port = 3000;

ViteExpress.listen(app, port, () => console.log(`Server is listening on port ${port}...`));
