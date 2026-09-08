const datosSensor = {
    device_id: "nodo_suelo_sector_04",
    timestamp: "2026-08-05T14:50:00Z",
    battery_level: 88,
    soil_metrics: {
        moisture: 34.2,
        temperature: 21.5,
        conductivity: 1250
    }
};

fetch("http://localhost:3000/api/sensors/data", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(datosSensor)
})
    .then(respuesta => respuesta.json())
    .then(resultado => {
        console.log("Respuesta del servidor:");
        console.log(resultado);
    })
    .catch(error => {
        console.log("Error:");
        console.log(error);
    });