// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
"use strict";
//**************************************************** */



//1- TROVO IL BTN NELLA PAGINA
const sendBtnElem = document.getElementById("send-btn"); // object | null
console.log(sendBtnElem);

// 2-  AGGIUNGO L'EVENTO (ciò che deve succedere quando clicco il btn)
sendBtnElem.addEventListener("click", function () {
    // test
    //console.log("CLICK DI PROVA");

    // BLOCCO RACCOLTA DEI DATI 
    //Scope globale

    // username
    const nameInputElem = document.getElementById("username"); // object | null
    console.log("Nome del passeggero:", nameInputElem);
    //controllo il valore dell'input con label username
    const nameValue = nameInputElem.value; // string
    console.log(nameValue);
    // ----

    // kilometri
    let kmInputElem = document.getElementById("kilometri"); // object | null
    console.log(kmInputElem);
    //controllo il valore dell'input con label kilometri e cambio la stringa in number
    let kmValue = parseInt(kmInputElem.value); // number | NaN
    console.log(kmValue, typeof kmValue);
    // ---

    //user-age
    let ageInputElem = document.getElementById("user-age"); // object | null
    console.log(ageInputElem);
    //controllo il valore dell'input con label user-age e cambio la stringa in number
    let ageValue = parseInt(ageInputElem.value); // number
    console.log(ageValue, typeof ageValue);
    //-----------------------------

    // ESECUZIONE DEL PROGRAMMA
    //3- PARTE LOGICA 
    //Scope di blocco
    // if (isNaN(kmValue) === false && isNaN(ageValue) === false && kmValue > 0 && ageValue > 0) {

    if (isNaN(kmValue) || isNaN(ageValue) || kmValue < 0 || ageValue < 0) {
        // Se i dati sono sbagliati
        alert("Dati errati!");
    }
    else {
        let ticketBase = kmValue * 0.21;// number
        console.log(ticketBase, typeof ticketBase);

        let discount = 0;

        if (ageValue < 18) {
            discount = 20;
        } else if (ageValue > 65) {
            discount = 40;
        }
        console.log("discount in %", discount)

        let totalDiscount = (ticketBase * discount) / 100; // number
        console.log("discount in euro", totalDiscount);

        let finalPrice = ticketBase - totalDiscount; // number
        console.log("prezzo finale", finalPrice);

        // Limita il risultato a due cifre decimali
        let finalTicket = finalPrice.toFixed(2); //String
        console.log(finalTicket)

        //Creo un numero random della carrozza a partire da 1
        let wagonNumber = Math.floor(Math.random() * 9) + 1;
        console.log("Creazione numero di carrozza:", wagonNumber);
        document.getElementById("wagon").innerHTML = wagonNumber;


        //Moltiplicando Math.random() per 90.000 otteniamo un numero casuale compreso tra 0 (incluso) e 90.000 (escluso).
        //Aggiungendo 10.000 al risultato otteniamo un numero compreso tra 10.000 e 100.000.
        //Il risultato è un numero casuale compreso tra 10.000 e 99.999, ovvero un numero di 5 cifre.
        //Math.floor() arrotonda il risultato verso il basso per ottenere un numero intero.

        //Creo numero random di 5 cifre per il codice CP e la stampo
        let cpCode = Math.floor(Math.random() * 10000) + 90000;
        console.log("Creazione numero CP:", cpCode);
        document.getElementById("cp-code").innerHTML = cpCode;


        //-----------------------------
        //4- OUTPUT
        // creazione dato del prezzo nella tabella
        document.getElementById("price").innerHTML = finalTicket + "€";

        // Se lo sconto è uguale a 20%, stampa un messaggio
        if (discount === 20) {
            let discountMessageElement = document.getElementById('discountMessage');
            discountMessageElement.textContent = "Biglietto scontato del 20%";
        }

        // Se lo sconto è uguale a 40%, stampa un messaggio
        if (discount === 40) {
            let discountMessageElement = document.getElementById('discountMessage');
            discountMessageElement.textContent = "Biglietto scontato del 40%";
        }

        // Se lo sconto è uguale a 0 = biglietto standard
        if (discount === 0) {
            let discountMessageElement = document.getElementById('discountMessage');
            discountMessageElement.textContent = "Biglietto standard";
        }


        

        //Stampo la variabile nome passeggero
        document.getElementById("passenger").innerHTML = nameValue;

        // Preparo il messaggio finale del biglietto
        const resultMessage = `Il Biglietto di base costa: ${ticketBase}€ <br> Il prezzo finale è di: ${finalTicket}€ perché hai ottenuto lo sconto del ${discount}%`;

        // Stampo il risultato della somma con il messaggio finale in pagina (section-top)
        document.getElementById("result").innerHTML = resultMessage;
    }

})





