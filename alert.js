// // exercice 1


//  function NombrePattes(nbPoules, nbPintades, nbChevres, nbMoutons) {
//      const pattesPoules = nombrePoules * 2;
//      const pattesPintades = nombrePintades * 2;
//      const pattesChevres = nombreChevres * 4;
//      const pattesMoutons = nombreMoutons * 4;

//      const totalPattes = pattesPoules + pattesPintades + pattesChevres + pattesMoutons;
//      return totalPattes;
//  }

//  const nombrePoules = parseInt(prompt("Combien de poules possédez vous?"));
//  const nombrePintades = parseInt(prompt("Combien de pintades possédez vous?"));
//  const nombreChevres = parseInt(prompt("Combien de chèvres possédez vous?"));
//  const nombreMoutons = parseInt(prompt("Combien de moutons possédez vous?"));

//  const totalPattes = NombrePattes(nombrePoules, nombrePintades, nombreChevres, nombreMoutons);

//  alert("Le nombre total de pattes est de : "+totalPattes);

// // exercice 2

//   function calculerNombrePattes(nbPoules, nbPintades, nbChevres, nbMoutons) {
//       pattesPoules = nombrePoules * 2;
//       pattesPintades = nombrePintades * 2;
//       pattesChevres = nombreChevres * 4;
//       pattesMoutons = nombreMoutons * 4;

//       totalPattes = pattesPoules + pattesPintades + pattesChevres + pattesMoutons;
//      return totalPattes;
//   }
//  function voulezVousContinuer() {
//     reponse = prompt("Voulez-vous continuer à jouer? (Oui/Non)").toLowerCase();
//      return reponse === "oui";
//   }

//  do {
//       nombrePoules = parseInt(prompt("Combien de poules possédez vous?"));
//       nombrePintades = parseInt(prompt("Combien de pintades possédez vous?"));
//       nombreChevres = parseInt(prompt("Combien de chèvres possédez vous?"));
//       nombreMoutons = parseInt(prompt("Combien de moutons possédez vous?"));

//       totalPattes = calculerNombrePattes(nombrePoules, nombrePintades, nombreChevres, nombreMoutons);

//     alert("Le nombre total de pattes dans votre ferme est de : " + totalPattes);

//   } while (voulezVousContinuer());

//   alert("On vous souhaite une bonne journée!");


// exercice 3

// var ageInput = prompt("Quel est votre âge svp ?");
// var age = parseInt(ageInput);

//  if (ageInput === null || isNaN(age) || age > 17) {
//      alert("ALERTE \ erreur: Votre Age est supérieur a 17 ans !");
//      age = prompt("Quel est votre âge?");

//  if (age === "" || isNaN(age)) {
//     alert("Erreur: Veuillez entrer un âge valide.");
// } else 
//      age = parseInt(age);
// } if (age >= 6 && age <= 7) {
//     alert("vous êtes dans la catégorie Poussin");
// } else if (age >= 8 && age <= 9) {
//     alert(" vous êtes dans la catégorie Pupille");
// } else if (age >= 10 && age <= 11) {
//     alert("vous êtes dans la catégorie Minime");
// } else if (age >= 12 && age <= 17) {
//     alert("vous êtes dans la catégorie Cadet");
// } else {
//     alert("Votre age n'est pas reconnu");
// }


// Exercice 4
// var prixHT = parseFloat(prompt("Veuillez entrer le prix HT SVP:"));

// if (isNaN(prixHT)) {
//     document.body.innerHTML = "Erreur: Veuillez entrer un prix valide SVP";
// } else {
//     var TVA = parseFloat(prompt("Entrez le taux de TVA en pourcentage SVP:"));

//     if (isNaN(TVA)) {
//         document.body.innerHTML = "Erreur: Veuillez entrer un taux de TVA valide SVP";
//     } else {
//         var prixTTC = prixHT * (1 + TVA / 100);

//         if (prixTTC > 100) {
//             document.body.innerHTML = "<p style='color: red;'>Le prix TTC est : " + prixTTC.toFixed(2) + " euros</p>";
//         } else {
//             document.body.innerHTML = "<p style='color: green;'>Le prix TTC est : " + prixTTC.toFixed(2) + " euros</p>";
//         }
//     }
// }

// exercicce 5

// function convertToMinutes() {

//     var inputValue = document.getElementById("integerInput").value;

//     if (Number.isInteger(parseInt(inputValue))) {
//         var resultMinutes = parseInt(inputValue) / 60;

//         document.getElementById("resultat").innerText = "Le résultat en minutes est:" + resultMinutes;
//     } else {
//         document.getElementById("resultat").innerText = "Erreur: Veuillez entrer un nombre entier valide SVP";
//     }
// }
