/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

String
È come una parola o una frase. È racchiusa tra virgolette, come "Ciao".

Boolean
È come un interruttore: può essere acceso (true) o spento (false).

Number
È come un numero. Può essere un numero intero (come 5) o decimale (come 3.14).

Null
È come una scatola vuota. Significa che non c'è niente dentro.

Undefined
È come un giocattolo che non hai ancora. È stato promesso, ma non è ancora arrivato.
*/

/*-------------------------------------------------------------------------------------*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.

let myName;
myName = "Matteo";
console.log(myName);
/*


/*-------------------------------------------------------------------------------------*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.


let a = 12;
let b = 20;
let c = a + b;

console.log("il risultato della somma è:", c);
*/

/*-------------------------------------------------------------------------------------*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.


let x;
x = 12;

console.log(x);

*/

/*-------------------------------------------------------------------------------------*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.


myName = "Caschetto";
console.log(myName);


const myName = "Caschetto";
console.log(myName);

Non è possibile inserire la variabile const in quanto dal broswer da questo errore:
Identifier 'myName' has already been declared.
In quanto const è una variabile che non può essere riassegnata
*/

/*-------------------------------------------------------------------------------------*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).


let e = 4;
let f = x;
let g = 4 - x;
x = 12;

console.log("il risultato della sottrazione è:", g);

let e = 4;
let f = "x";
let g = 4 - f;
x = 12;

console.log("il risultato della sottrazione è:", g);

in questo caso in console risulterà il messaggio Nan
*/

/*-------------------------------------------------------------------------------------*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).


CASO 1 
let name1 = "john";
let name2 = "John";

console.log(name1 === name2);


CASO 2
let name1 = "john";
let name2 = "John";

console.log(name1 !== name2);
*/
