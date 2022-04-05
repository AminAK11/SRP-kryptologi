// // //// DOM-manipulation ////
// // Virker ikke // //
// btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   let nøgleInput = document.querySelector(".nøgle-input").value;
//   console.log(nøgleInput);
// });
// // Virker ikke?
// function returnText() {
//   window.nøgleInput = document.querySelector(".nøgle-input").value;
//   return nøgleInput;
// }
// mitNøgleInput = nøgleInput;
// console.log(nøgleInput);

//// Krypterings algoritme ////
// Vi laver en liste med alle bogstaver i alfabetet
let alfabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "æ",
  "ø",
  "å",
];
// Vi difinere vores klarteks, vores nøgle og vores kryptotekst
let besked = "hejhvordangårdet";
let nøgle = "srpergodt";
let kryptobesked = "";
// Vi sørger for at alle bogstaver er små, da vores alfabet er defineret med små bogstaver
nøgle = nøgle.toLowerCase();
besked = besked.toLowerCase();
/*
Vi laver en funktion der tager en string som input, en nøgle som input,
og en boolsk-værdi der afgøre om vores string skal krypteres eller dekrypteres
*/
// Vi difinere i øvrigt en liste der kommer til at indholde resultatet
let resultat = [];
function chifrer(string, key, encipher) {
  // Vi laver en for-loop for at kunne gennemløbe og kryptere hele beskeden
  for (let i = 0; i < string.length; i++) {
    /*
       Vi giver hvert bogstav i nøgleordet et indekstal. Vi finder ud af hvilket
       nummer i alfabetet bogstav nr.'i' i nøgleordet er. Vi husker at tage
       modulus (%) af længden af nøglen, eftersom vi vil starte forfra når der ikke
       er flere bogstaver i nøgleordet, det vil ske såfremt klarteksten er
       større end nøgleordet.
    */
    let nøgleIndeks = alfabet.indexOf(key.charAt(i) % key.length);
    /*
        tilsvarende finder vi ud af hvilket nummer i alfabetet hvert bogstav i
        vores string er.
    */
    let stringIndeks = alfabet.indexOf(string.charAt(i) % string.length);
    /*
        Vi laver en forgrening. Enten skal vi kryptere eller dekryptere
        det kan vi benytte en if-statement til. Når vi kalder funktionen
        vælger vi om "encipher" skal være true eller false. Hvis vi sætter
        den til true skal den kryptere, og sætter vi den til false skal den
        dekryptere. if == true {krypter} else {dekrypter};
    */
    if (encipher == true) {
      /*
          Den tomme liste vi lavede tidligere fylder vi op med resultatet af krypteringen.
          Krypteringen er indekset fra nølgeordet plus klarteksten. Dog vil der ofte være
          siturationer hvor resultatet giver et støre tal end mængden af bogstaver i alfabetet
          derfor tages modulus (%) af alfabetets længde. Det sikre at alfabetet starter forfra,
          når vi forbipassere det sidste bogstav.
          */
      resultat.push(alfabet[(nøgleIndeks + stringIndeks) % alfabet.length]);
    } else {
      // hvis funktionens input er false, så dekryptere vi.
      resultat.push(alfabet[(stringIndeks - nøgleIndeks - 1) % alfabet.length]);
    }
  }
  // Vi omdanner listen til en string (tekst)
  resultat = resultat.toString();
  /*
        Vi erstatter alle kommaer med ingenting. Sagt på en anden måde så sletter vi alle kommaer,
        eftersom en liste altid har et komma mellem hvert element, som vi ikke behøver at have med.
    */
  resultat = resultat.replace(/,/g, "");
  // Vi logger resultatet i webværktøjet
  if (encipher == true) {
    console.log("Krypteret besked: " + resultat);
  } else {
    console.log("Dekrypteret besked: " + resultat);
  }
}
// Vi kalder vores funktion
// chifrer(besked, nøgle, true);
chifrer(kryptobesked, nøgle, false);
