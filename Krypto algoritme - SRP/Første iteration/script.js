// //// DOM-manipulation ////
// const klartekstInput = document.querySelector(".kryptotekst-input").value;
// const kryptotekstInput = document.querySelector(".dekryptering-input").value;

let nøgleInput;
function returnText() {
  nøgleInput = document.querySelector(".nøgle-input").value;
  return nøgleInput;
}
console.log(nøgleInput);
let mitNøgleInput = returnText();
console.log(mitNøgleInput);

// Blot en tom string bliver logget, selv når jeg trykker på knappen og har skrevet noget i inputtet.

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
let besked = "HEJMEDDIG";
let nøgle = "srpergodt";
let kryptobesked = "æwzrwksmæ";

// sørge for at alle bogstaver er små, da vores alfabet er difineret med små bogstaver
nøgle = nøgle.toLowerCase();
besked = besked.toLowerCase();

// Beskeden logges i consolen for at kunne tjekke om det hele virker, imens det bliver udviklet (kan ignoreres).
// Consolen kan findes ved at højre-klikke i browseren og trykke undersøg, derefter console.
console.log("Besked: " + besked);

// Vi laver en krypteringsfunktion som tager en klartekst og en nøgle som input
// Vi difinere en liste der kommer til at indholde vores kryptotekst
let kryptotekst = [];
function krypter(plaintext, key) {
  // Vi laver en for-loop for at gennemløbe og kryptere hele beskeden
  for (let i = 0; i < plaintext.length; i++) {
    /*  
        Vi giver hvert bogstav i nøgleordet et indekstal. Vi finder ud af hvilket
        nummer i alfabetet bogstav nr.'i' i nøgleordet er. Vi husker at tage 
        modulus (%) af længden af nøglen, eftersom vi vil starte forfra når der ikke
        er flere bogstaver i nøgleordet, det vil ske såfremt klarteksten er 
        større end nøgleordet. Vi plusser med 1 for at tage højde for 0-indeksereing
    */
    let nøgleIndeks = alfabet.indexOf((key.charAt(i) % key.length) + 1);
    /*
        tilsvarende finder vi ud af hvilket nummer i alfabetet hvert bogstav i 
        klarteksten er. Til sidst plusser vi med 1 for at tage højde for 
        0-indeksering.
    */
    let klartekstIndeks = alfabet.indexOf(plaintext.charAt(i)) + 1;
    /*
        Den tomme liste vi lavede tidligere fylder vi op med resultatet af krypteringen.
        Krypteringen er indekset fra nølgeordet plus klarteksten. Dog vil der ofte være
        siturationer hvor resultatet giver et støre tal end mængden af bogstaver i alfabetet
        derfor tages modulus (%) af alfabetets længde. Det sikre at alfabetet starter forfra, 
        når vi forbipassere det sidste bogstav. 
    */
    // .push tilføjer resultatet til listen "krptotekst"
    kryptotekst.push(
      alfabet[(nøgleIndeks + klartekstIndeks - 1) % alfabet.length]
    );
  }
  // Vi omdanner listen til en string (tekst)
  kryptotekst = kryptotekst.toString();
  /* 
        Vi erstatter alle kommaer med ingenting. Sagt på en anden måde så sletter vi alle kommaer,
        eftersom en liste altid har et komma mellem hvert element, som vi ikke behøver at have med.

    */
  kryptotekst = kryptotekst.replace(/,/g, "");
  // Vi logger resultatet i webværktøjet, blot for at tæste om det virker som det skal.
  console.log("Krypteret besked: " + kryptotekst);
}

// Vi kalder vores funktion med klarteskten og nøglen som input
krypter(besked, nøgle);

// Vi laver nu vores dekrypterings funktion
// Vi laver en liste der skal indholde resultatet
let klartekst = [];
function dekrypter(cryptotext, key) {
  // Vi laver en for-loop for at gennemløbe og dekryptere hele beskeden
  for (let i = 0; i < cryptotext.length; i++) {
    // Samme nøgle indeks som i krypteringfunktionen
    let nøgleIndeks = alfabet.indexOf(key.charAt(i) % key.length);
    /*
        tilsvarende finder vi ud af hvilket nummer i alfabetet hvert bogstav i
        vores string er.
    */
    let kryptoIndeks = alfabet.indexOf(kryptotekst.charAt(i) % string.length);
    /*
        Vi udfylder den tomme liste med resultatet.
        Resultatet finder vi ved at tage kryptoindeks - nøgleindeks. Dette svare til dem omvendte funktion af at kryptere. Modulus alfabetets længde sørger for at alfabetet starter forefra hvis der ikke er flere bogstaver.
    */
    klartekst.push(alfabet[(kryptoIndeks - nøgleIndeks - 1) % alfabet.length]);
  }
  // Vi omdanner listen til en string (tekst)
  klartekst = klartekst.toString();
  /* 
        Vi erstatter alle kommaer med ingenting. Sagt på en anden måde sletter vi alle kommaer,
        eftersom en liste altid har et komma mellem hvert element.

    */
  klartekst = klartekst.replace(/,/g, "");
  // Vi logger resultatet i webværktøjet, blot for at tæste om det virker som det skal.
  console.log("dekrypteret besked: " + klartekst);
}

dekrypter(kryptobesked, nøgle);
