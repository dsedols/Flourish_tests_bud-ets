// Izvēlas HTML elementu ar id="vizFrame"
function loadViz(section) {
  const iframe = document.getElementById("vizFrame");

  // Galvenā vizualizācija
  if (section === "index") {
    iframe.src = <div class="flourish-embed flourish-hierarchy" data-src="visualisation/25912086"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/25912086/thumbnail" width="100%" alt="hierarchy visualization" /></noscript></div>
  // Pensiju sadaļa
  } else if (section === "Pensijas") {
    iframe.src = <div class="flourish-embed flourish-chart" data-src="visualisation/25939866"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/25939866/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
  // Pabalstu sadaļa
  } else if (section === "Atbalsts ģimenēm ar bērniem") {
    iframe.src = <div class="flourish-embed flourish-chart" data-src="visualisation/25953970"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/25953970/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
  }

  // Vari pievienot vēl citas sadaļas pēc vajadzības:
  // else if (section === "veseliba") { iframe.src = "https://flo.uri.sh/visualisation/..." }
}
