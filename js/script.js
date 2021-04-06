var InfoNome = prompt('Il tuo nome?');
var InfoCognome = prompt('Il tuo cognome?');
var InfoColore = prompt('Il tuo colore preferito?');
var InfoTotale = InfoNome + InfoCognome + InfoColore;

var InfoMessaggio = InfoTotale + 21;
document.getElementById('msg-auto').innerHTML = InfoMessaggio;