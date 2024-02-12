function loadPage(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      /* iframe */
      const iframe = document.createElement("iframe");
      iframe.src = "src/" + url;
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      document.getElementById("iframe-container").innerHTML = "";
      document.getElementById("iframe-container").appendChild(iframe);
    })
    .catch((error) => console.error(error));
}
