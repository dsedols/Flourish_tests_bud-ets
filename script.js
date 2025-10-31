// Klausāmies ziņojumus no Flourish iFrame
window.addEventListener("message", function(event) {
  // Drošības nolūkos pārliecināmies, ka ziņa nāk no Flourish
  if (event.origin.includes("flourish.studio")) {
    console.log("Saņemts notikums no Flourish:", event.data);

    // Šeit saglabājam klikšķa nosaukumu (ja tāds tiek sūtīts)
    const clicked = event.data && event.data.name;

    // Ja lietotājs klikšķina uz noteiktu kategoriju — mainām vizualizāciju
    if (clicked === "Pensijas") {
      document.getElementById("vizFrame").src = <div class="flourish-embed flourish-chart" data-src="visualisation/25939866"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/25939866/thumbnail" width="100%" alt="chart visualization" /></noscript></div>;
    } else if (clicked === "Atbalsts ģimenēm ar bērniem") {
      document.getElementById("vizFrame").src = <div class="flourish-embed flourish-chart" data-src="visualisation/25953970"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/25953970/thumbnail" width="100%" alt="chart visualization" /></noscript></div>;
    } else if (clicked === "Sociālās aizsardzības vispārējie jautājumi") {
      document.getElementById("vizFrame").src = <div class="flourish-embed flourish-chart" data-src="visualisation/25954058"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/25954058/thumbnail" width="100%" alt="chart visualization" /></noscript></div>;
    }
  }
});
