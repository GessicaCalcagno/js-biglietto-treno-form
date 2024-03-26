// TEST
//alert('ciao')


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
    console.log(nameInputElem);
    //controllo il valore dell'input con label username
    const nameValue = nameInputElem.value; // string
    console.log(nameValue);
    // ----
    // kilometri
    let kmInputElem = document.getElementById("kilometri"); // object | null
    console.log(kmInputElem);
    //controllo il valore dell'input con label kilometri e cambio la stringa in number
    let kmValue = parseInt(kmInputElem.value); // number
    console.log(kmValue, typeof kmValue);
    // ---
    //user-age
    let ageInputElem = document.getElementById("user-age"); // object | null
    console.log(ageInputElem);
    //controllo il valore dell'input con label user-age e cambio la stringa in number
    let ageValue = parseInt(ageInputElem.value); // number
    console.log(ageValue, typeof ageValue);


    // ESECUZIONE DEL PROGRAMMA
    //PARTE LOGICA 
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

        // OUTPUT
        // creazione dato del prezzo nella tabella
        document.getElementById("price").innerHTML = finalTicket + "€";

        // Se lo sconto è uguale a 20%, stampa un messaggio
        if (discount === 20) {
            var discountMessageElement = document.getElementById('discountMessage');
            discountMessageElement.textContent = "Biglietto scontato del 20%";
        }
        
         // Se lo sconto è uguale a 20%, stampa un messaggio
         if (discount === 40) {
            var discountMessageElement = document.getElementById('discountMessage');
            discountMessageElement.textContent = "Biglietto scontato del 40%";
        }

        // Se lo sconto è uguale a 20%, stampa un messaggio
        if (discount === 0) {
            var discountMessageElement = document.getElementById('discountMessage');
            discountMessageElement.textContent = "Biglietto standard";
        }
        
        



        // Preparo il messaggio
        //const resultMessage = `Il Biglietto costa: ${finalTicket} € perché ${discount}.`;

        // Stampo il risultato della somma in pagina
        //document.getElementById("result").innerHTML = resultMessage;
    }

})





