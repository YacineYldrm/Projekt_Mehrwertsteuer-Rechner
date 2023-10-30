// #########################################################
// 
//                 Projekt: Brutto-Netto-Rechner
// 
// #########################################################

const neunzehnProzent = document.body.querySelector('#neunzehn');
const siebenProzent = document.body.querySelector('#sieben');
const nettoBrutto = document.body.querySelector('#NettoBrutto');
const bruttoNetto = document.body.querySelector('#BruttoNetto');
const infoAnzeige = document.body.querySelector('#infoAnzeige');
const berechnenBtn = document.body.querySelector('#berechnung');
const outputText = document.body.querySelector('#outputText');
const outputMwSt = document.body.querySelector('#outputMwSt');
const outputBetrag = document.body.querySelector('#outputBetrag');

let aufschAbzug = 0;
let prozentSatz = 0;

// --------------------------------------------------
// Auswahl: Netto zu Brutto / Brutto zu Netto
// Anpassen von info Text zu Inputfeld und Ergebnis
// ---------------------------------------------------
nettoBrutto.addEventListener('click', () =>
{
    aufschAbzug = 1;
    infoAnzeige.textContent = "Nettobetrag (Preis ohne Mehrwertseuer) in Euro";
    outputText.textContent = "Bruttobetrag (Endpreis)";
    outputBetrag.textContent = '€';
    outputMwSt.textContent = '€';
});

bruttoNetto.addEventListener('click', () =>
{
    aufschAbzug = 2;
    infoAnzeige.textContent = "Bruttobetrag (Preis inkl. Mehrwertseuer) in Euro";
    outputText.textContent = "Nettobetrag";
    outputBetrag.textContent = '€';
    outputMwSt.textContent = '€';
    
});

// -------------------------------------------
// Auswahl Mehrwertsteuersätze
// setzen Variable entsprechenden Wert
// -------------------------------------------

neunzehnProzent.addEventListener('click', () => 
{
    prozentSatz = 1.19;
});

siebenProzent.addEventListener('click', () => 
{
        prozentSatz = 1.07;
});

// -------------------------------------------
// Ergebnis Berechnung:
//      
// if "aufschlagen"
// Output: Bruttobetrag 
//      
// oder if "abziehen"
// Output: Nettobetrag
// 
// error handling
// -------------------------------------------

berechnenBtn.addEventListener('click', () =>
{
    const userEingabe = document.body.querySelector('#userEingabe').value;
    
    if(prozentSatz !== 0 && aufschAbzug !== 0)
    {
        
        if(aufschAbzug === 1)
        {
            outputBetrag.textContent = `€ ${(userEingabe * prozentSatz).toFixed(2)}`;
            outputMwSt.textContent = `€ ${(userEingabe * (prozentSatz - 1)).toFixed(2)}`;
        }
        else if(aufschAbzug === 2)
        {
            outputBetrag.textContent = `€ ${(userEingabe / prozentSatz).toFixed(2)}`;
            outputMwSt.textContent = `€ ${(userEingabe - (userEingabe / prozentSatz)).toFixed(2)}`;
        }
    } 
    else
    {
        outputBetrag.textContent = " Bitte eine Auswahl treffen und Betrag eingeben."
    }
});