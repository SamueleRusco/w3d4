const aggiungiClasseSelected = (event) => {
  const elementoCliccato = event.target;
  elementoCliccato.classList.toggle("selected");
};

const inserisciTesto = (event) => {
  if (event.key === "Enter") {
    const valoreInputField = document.getElementById("inputText").value;
    console.log(valoreInputField);
    if (valoreInputField === "") {
      alert("inserisci qualcosa");
    } else {
      const nuovoElementoLista = document.createElement("div");
      nuovoElementoLista.classList.add("list-item");

      nuovoElementoLista.innerText = valoreInputField;
      nuovoElementoLista.onclick = aggiungiClasseSelected;
      document.getElementById("lista").append(nuovoElementoLista);
      document.getElementById("inputText").value = "";
    }
  }
};
