const aggiungiClasseSelected = (event) => {
  const elementoCliccato = event.target;
  elementoCliccato.classList.toggle("selected");
};

// const invia = () => {
//   const valoreInputField = document.getElementById("inputText").value;
//   {
//     const nuovoElementoLista = document.createElement("div"); //creo elemento (in questo caso div)
//     nuovoElementoLista.classList.add("list-item"); //aggiungo classe "list-item" al div
//     nuovoElementoLista.innerText = valoreInputField; //creo variabile per modificare interno div
//     nuovoElementoLista.onclick = aggiungiClasseSelected; //associo altra funzione (in questo caso quando ci clicco sopra aggiunge alla classe già esistente "selected")in questo caso al click
//     document.getElementById("lista").append(nuovoElementoLista); //appendo nuovoElementoLista a "lista"(contenitore)(già creata in precedenza nel html)
//     document.getElementById("inputText").value = ""; //reset della casella input non appena il div viene inserito correttamente
//   }
// };
const inserisciTesto = (event) => {
  if (event.key === "Enter") {
    const valoreInputField = document.getElementById("inputText").value;
    {
      const nuovoElementoLista = document.createElement("div"); //creo elemento (in questo caso div)
      nuovoElementoLista.classList.add("list-item"); //aggiungo classe "list-item" al div
      nuovoElementoLista.innerText = valoreInputField; //creo variabile per modificare interno div
      nuovoElementoLista.onclick = aggiungiClasseSelected; //associo altra funzione (in questo caso quando ci clicco sopra aggiunge alla classe già esistente "selected")in questo caso al click
      document.getElementById("lista").append(nuovoElementoLista); //appendo nuovoElementoLista a "lista"(contenitore)(già creata in precedenza nel html)
      document.getElementById("inputText").value = ""; //reset della casella input non appena il div viene inserito correttamente
    }
  }
};
const inserisciTestoBottone = (event) => {
  const valoreInputField = document.getElementById("inputText").value;
  {
    const nuovoElementoLista = document.createElement("div"); //creo elemento (in questo caso div)
    nuovoElementoLista.classList.add("list-item"); //aggiungo classe "list-item" al div
    nuovoElementoLista.innerText = valoreInputField; //creo variabile per modificare interno div
    nuovoElementoLista.onclick = aggiungiClasseSelected; //associo altra funzione (in questo caso quando ci clicco sopra aggiunge alla classe già esistente "selected")in questo caso al click
    document.getElementById("lista").append(nuovoElementoLista); //appendo nuovoElementoLista a "lista"(contenitore)(già creata in precedenza nel html)
    document.getElementById("inputText").value = ""; //reset della casella input non appena il div viene inserito correttamente
  }
};

const rimuoviTestoBottone = () => {};
