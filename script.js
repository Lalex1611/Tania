function openEnvelope() {
    // Muestra el sobre al hacer clic
    var envelope = document.getElementById("envelope");
    envelope.style.display = "block";

    // Llama a la función para mostrar corazones después de un tiempo
    setTimeout(showHearts, 1000);
}

function showHearts() {
    // Muestra los corazones después de un tiempo
    var hearts = document.getElementById("hearts");
    hearts.innerHTML = "💖💖💖";
    hearts.style.fontSize = "24px";
    hearts.style.color = "#e84d5e"; /* Color de los corazones */
}
