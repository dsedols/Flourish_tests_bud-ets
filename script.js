// script.js
window.addEventListener("message", (event) => {
  // Pārbauda vai nāk no Flourish
  if (!event.data || !event.data.message) return;

  const msg = event.data.message;
  const iframe = document.getElementById("vizContainer");

  // 🔹 Kad lietotājs klikšķina uz kādu apakškategoriju, Flourish nosūta “select” ziņojumu
  if (msg === "select") {
    const name = event.data.data?.name || "";

    // 🔹 Šeit norādām, kuras vizualizācijas jāielādē pēc nosaukuma
    if (name === "Pensijas") {
      iframe.src = "https://flo.uri.sh/visualisation/25939866/embed"; // <-- Šeit liec savu Pensiju vizualizācijas ID
    } 
    else if (name === "Sociālās aizsardzības vispārējie jautājumi") {
      iframe.src = "https://flo.uri.sh/visualisation/25954058/embed"; // <-- piemēram cita apakšvizualizācija
    } 
    else {
      iframe.src = "https://flo.uri.sh/visualisation/25912086/embed"; // <-- atpakaļ uz galveno
    }
  }
});
