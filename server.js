import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from "ejs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 8000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public/views"));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use("/", (req, res) => {
  res.render("index.html");
});

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});