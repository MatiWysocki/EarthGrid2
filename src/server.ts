import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "EarthGrid Backend funcionando"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});