// Følgende er blot variabler til at inkorporere algoritmen med hjemmesiden
//// DOM-manipulation ////
let klartekstBtn = document.getElementById("klartekst-btn");
let kryptotekstBtn = document.getElementById("kryptotekst-btn");
let nøgleBtn = document.getElementById("nøgle-btn");
let nøgleInput = document.getElementById("nøgle-input");
let klartekstInput = document.getElementById("klartekst-input");
let kryptotekstInput = document.getElementById("kryptotekst-input");
let nøgleInputVærdi = document.getElementById("nøgle-input-værdi");
let krypteringInputVærdi = document.getElementById("kryptering-input-værdi");
let klartekstInputVærdi = document.getElementById("klartekst-input-værd");

//// Krypterings algoritme ////
// Vi laver en liste med alle bogstaver i alfabetet og tilgøjer specialtegn
let alfabet = [
  "a",
  "[",
  "A",
  "]",
  "1",
  "=",
  "b",
  "¤",
  "B",
  "£",
  "2",
  "µ",
  "c",
  ":",
  "C",
  ";",
  "3",
  "|",
  "d",
  "D",
  "°",
  "4",
  "e",
  "∞",
  "E",
  "5",
  "∆",
  "f",
  "F",
  "ω",
  "6",
  "g",
  "G",
  "7",
  "h",
  "H",
  "8",
  "i",
  "I",
  "9",
  "j",
  "J",
  "0",
  "k",
  "K",
  "?",
  "l",
  "L",
  "m",
  "M",
  "n",
  "N",
  "*",
  "o",
  "O",
  "_",
  "p",
  "P",
  "<",
  "q",
  "Q",
  ">",
  "r",
  "R",
  "!",
  "s",
  "S",
  "/",
  "t",
  "T",
  "+",
  "u",
  "U",
  "^",
  "v",
  "V",
  ".",
  "w",
  "W",
  ",",
  "x",
  "X",
  "$",
  "y",
  "Y",
  "%",
  "z",
  "Z",
  "@",
  "æ",
  "Æ",
  "#",
  "ø",
  "Ø",
  "&",
  "å",
  "Å",
  "-",
  "(",
  " ",
  ")",
];
// Vi difinere vores klarteks, vores nøgle og vores kryptotekst
let besked =
  "Går Alt Godt Med Dig? Dejligt vejr idag --> 15 C°. Min mail er: Aminkhaled10@gmail.com & mit tlf. 52 22 22 86. 10+10=20, 4!=24. Kortnummer: *******";
let nøgle = "srpergodt";
let kryptobesked =
  "-p|°!w°3)|x∞°2ou3Z[Øa°XoØ!1ÅωOÅYuC31yrZ°<f:3UÆQ+0iω[_|R£pq¤ωVxXR!]qµvZd:ZxQ!Mrad12itV£ωl3;[ωOÆ¤<F3ØVQSGQJR3]åiO∆]aPQ^V]h°yå<FæjQ)V∞ Aæ;cY|HQy1+D3:¤";
// Vi sørger for at alle bogstaver er små, da vores alfabet er defineret med små bogstaver
// nøgle = nøgle.toLowerCase();
// besked = besked.toLowerCase();
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
    let nøgleIndeks = alfabet.indexOf(key.charAt(i % key.length));
    /*
          tilsvarende finder vi ud af hvilket nummer i alfabetet hvert bogstav i
          vores string er.
          */
    let stringIndeks = alfabet.indexOf(string.charAt(i % string.length));
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

      resultat.push(
        alfabet[
          (alfabet.length - (nøgleIndeks - stringIndeks)) % alfabet.length
        ]
      );
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
    krypteringInputVærdi.innerHTML = resultat;
    console.log("Krypteret besked: " + resultat);
  } else {
    klartekstInputVærdi.innerHTML = resultat;
    console.log("Dekrypteret besked: " + resultat);
  }
  return resultat;
}

// resten af koden er blot for at inkorporere algoritmen med hjemmesiden
var mitNøgleInput = "";
var mitKlartekstInput = "";
var minKryptotekstInput = "";

// Gæmmer brugerinputtet
nøgleInput.addEventListener("input", event => {
  mitNøgleInput = event.target.value;
});

klartekstInput.addEventListener("input", event => {
  mitKlartekstInput = event.target.value;
});

kryptotekstInput.addEventListener("input", event => {
  minKryptotekstInput = event.target.value;
});

// Funktioner der køre krypteringsfunktionen
function krypter() {
  chifrer(mitKlartekstInput, mitNøgleInput, true);
}

function dekrypter() {
  chifrer(minKryptotekstInput, mitNøgleInput, false);
}

// Tilføjer tekst på hjemmesiden
nøgleBtn.addEventListener("click", function () {
  event.preventDefault();
  nøgleInputVærdi.innerHTML = mitNøgleInput;
});

// Køre funktionen når man trykker på knappen
klartekstBtn.addEventListener("click", function () {
  krypter();
});

kryptotekstBtn.addEventListener("click", function () {
  dekrypter();
});
