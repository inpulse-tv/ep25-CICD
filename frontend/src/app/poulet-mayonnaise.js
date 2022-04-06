import api from "./api";
import "../styles/trop_style.css";

console.log("Le POULET-MAYONNAISE.JS a démarré ! ");

var optionVegan = document.getElementById("option-vegan");
var optionViandard = document.getElementById("option-viandard");
var optionVequoi = document.getElementById("option-pas-du-tout-vegan");
var optionPetiteFaim = document.getElementById("option-petite-faim");
var optionGrosseDalle = document.getElementById("option-grosse-dalle");
var optionAbonnes = document.getElementById("option-abonnes");
var optionMilitaires = document.getElementById("option-militaires");
var optionAutres = document.getElementById("option-les-autres");

const titre = document.querySelector("itv-entete > h1");
titre.innerHTML = `Menu du ${new Date().toLocaleDateString("fr-FR", {
  weekday: "long",
})}`;

api.getEntreesDuJour().then((json) => {
  const sibling = document.querySelector(".grosse-dalle");
  const parentElm = document.createElement("itv-plat");
  parentElm.classList.add(["grosse-dalle"]);
  json.forEach((row) => {
    const rowEl = document.createElement(
      row.Vegan ? "itv-vegan" : "itv-viandard"
    );
    const titleEl = document.createElement("h3");
    titleEl.innerText = row.Nom;
    const descriptionEl = document.createElement("p");
    descriptionEl.innerText = row.Description;
    rowEl.appendChild(titleEl);
    rowEl.appendChild(descriptionEl);
    parentElm.appendChild(rowEl);
    sibling.after(parentElm);
  });
  contenuVegan(false);
  photoBackground("pas vegan");
});

/*
window.addEventListener("load", function(event) {
	console.log("Toutes les ressources sont chargées !");

	var itvoption = document.getElementById("OptionVegan");
	itvoption.onclick = helloVegan;
});
*/

/* ICI NOS FONCTIONS HELPERS */

function changePrix(nouveauPrix) {
  var lesTagsPrix = document.getElementsByTagName("itv-prix");

  for (var n = 0; n < lesTagsPrix.length; n++) {
    var lesTagsParagraphesDansPrix = lesTagsPrix[n].getElementsByTagName("p");

    lesTagsParagraphesDansPrix[0].innerHTML = nouveauPrix;
  }
}

function nouvelleOption(itvOptionChoisie) {
  var optionsPossibles = Array.prototype.slice.call(
    itvOptionChoisie.parentElement.getElementsByTagName("itv-option"),
    0
  );

  //optionsPossibles.forEach( function maFonction(option) {
  optionsPossibles.forEach((optionAnalysee) => {
    if (optionAnalysee == itvOptionChoisie) {
      optionAnalysee.classList.add("option-choisie");
    } else {
      optionAnalysee.classList.remove("option-choisie");
    }
  });

  /*for (var i = 0; i < optionsPossibles.length; i++) {



	}	*/
}

function contenuVegan(vegan) {
  var aEnlever;
  var aAjouter;

  if (vegan) {
    aEnlever = document.getElementsByTagName("itv-viandard");
    aAjouter = document.getElementsByTagName("itv-vegan");
  } else {
    aEnlever = document.getElementsByTagName("itv-vegan");
    aAjouter = document.getElementsByTagName("itv-viandard");
  }

  for (var i = 0; i < aEnlever.length; i++) {
    aEnlever[i].style.display = "none";
  }
  for (var j = 0; j < aAjouter.length; j++) {
    aAjouter[j].style.display = "inline";
  }
}

function contenuGrosseDalle(grosseDalle) {
  var elementsGrosseDalle = document.getElementsByClassName("grosse-dalle");

  for (var i = 0; i < elementsGrosseDalle.length; i++) {
    if (grosseDalle) {
      elementsGrosseDalle[i].style.display = "block";
    } else {
      elementsGrosseDalle[i].style.display = "none";
    }
  }
}

function photoBackground(sensibilite) {
  var elementsAvecPhotoBackground = document.getElementsByClassName("bg");

  for (var i = 0; i < elementsAvecPhotoBackground.length; i++) {
    elementsAvecPhotoBackground[i].classList.remove("bg-vegan");
    elementsAvecPhotoBackground[i].classList.remove("bg-viandard-sensible");
    elementsAvecPhotoBackground[i].classList.remove("bg-pas-vegan");

    if (sensibilite == "vegan") {
      elementsAvecPhotoBackground[i].classList.add("bg-vegan");
    } else if (sensibilite == "viandard sensible") {
      elementsAvecPhotoBackground[i].classList.add("bg-viandard-sensible");
    } else if (sensibilite == "pas vegan") {
      elementsAvecPhotoBackground[i].classList.add("bg-pas-vegan");
    }
  }
}
/* ICI NOS FONCTIONS EVENTS */

function utilisateurChoisitVegan() {
  console.log("L'utilisateur a choisit VEGAN");
  nouvelleOption(optionVegan);
  contenuVegan(true);
  photoBackground("vegan");
}

function utilisateurChoisitViandard() {
  console.log("L'utilisateur a choisit VIANDARD");
  nouvelleOption(optionViandard);
  contenuVegan(false);
  photoBackground("viandard sensible");
}

function utilisateurChoisitVequoi() {
  console.log("L'utilisateur a choisit VEQUOI");
  nouvelleOption(optionVequoi);
  contenuVegan(false);
  photoBackground("pas vegan");
}

function utilisateurChoisitPetiteFaim() {
  console.log("L'utilisateur a choisit PETITE FAIM");
  nouvelleOption(optionPetiteFaim);
  contenuGrosseDalle(false);
}

function utilisateurChoisitGrosseDalle() {
  console.log("L'utilisateur a choisit GROSSE DALLE");
  nouvelleOption(optionGrosseDalle);
  contenuGrosseDalle(true);
}

function utilisateurChoisitAbonnes() {
  console.log("L'utilisateur a choisit ABONNES");
  changePrix("7 €");
  nouvelleOption(optionAbonnes);
}

function utilisateurChoisitMilitaires() {
  console.log("L'utilisateur a choisit MILITAIRES");
  changePrix("3 €");
  nouvelleOption(optionMilitaires);
}

function utilisateurChoisitAutres() {
  console.log("L'utilisateur a choisit AUTRES");
  changePrix("Abonnez-vous!!!");
  nouvelleOption(optionAutres);
}

/* AFFECTATION DES HANDLERS */

optionVegan.onclick = utilisateurChoisitVegan;
optionViandard.onclick = utilisateurChoisitViandard;
optionVequoi.onclick = utilisateurChoisitVequoi;
optionPetiteFaim.onclick = utilisateurChoisitPetiteFaim;
optionGrosseDalle.onclick = utilisateurChoisitGrosseDalle;
optionAbonnes.onclick = utilisateurChoisitAbonnes;
optionMilitaires.onclick = utilisateurChoisitMilitaires;
optionAutres.onclick = utilisateurChoisitAutres;

contenuVegan(false);
photoBackground("pas vegan");

console.log("Le POULET-MAYONNAISE.JS a été chargé ! ");
