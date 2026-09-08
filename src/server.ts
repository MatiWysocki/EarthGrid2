import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "EarthGrid Backend funcionando"
    });
});
app.post("/api/sensors/data", (req, res) => {
    const data = req.body;

    console.log("Datos recibidos:");
    console.log(data);

    res.json({
        success: true,
        message: "Datos recibidos correctamente",
        data: data
    });
});
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});