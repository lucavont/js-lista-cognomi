// Creo le variabili e gli input

var cognomi = ['Tabaro', 'Ponchietti', 'Rinaldi', 'Zerino', 'Amore'];
var cognomeUtente = prompt('Inserisci il tuo cognome');
var olEl = document.getElementById('olList');

// Logica

cognomi.push(cognomeUtente);
cognomi.sort();

var posizioneUtente = 0;

for (i = 0; i < cognomi.length; i++) {
    olEl.innerHTML += '<li>' + cognomi[i] + '</li>';
    if (posizioneUtente == cognomi[i]) {
        posizioneUtente = i;
    }
}

document.getElementById('title').innerHTML = posizioneUtente + 1;