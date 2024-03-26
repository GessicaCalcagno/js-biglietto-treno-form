# ESERCIZIO
> Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

---

## Soluzione
#### Raccolta dati
- [x] Chiediamo all'utente quanti km deve fare
- [x] Chiediamo all'utente la sua età


#### ESECUZIONE LOGICA:
- [x] Calcoliamo il prezzo del biglietto base = (0.21 * km )
- Dichiariamo una variabile per il risultato:
- [x] - se <18 = (ticketbase * discount del 20%)
- [x] - se maggiorenne = Sconto pari a zero
- [x] - se > 65 = (ticketbase * discount del 40%) 

Bonus:
- [x] Il risultato deve essere in decimali

#### OUTPUT
Stampiamo: Il prezzo e se è scontato