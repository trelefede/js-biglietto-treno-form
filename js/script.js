const priceKm = 0.21;

// users data input
const distance = parseInt(prompt('Quanti km vuoi percorrere?'));
if (isNaN(distance)) {
    alert('Valore inserito non valido! Riprova');
} else {
    const age = parseInt(prompt('Quanti anni hai?'));
    if (isNaN(age)) {
        alert('Valore inserito non valido! Riprova');
    } else {
        // price calc 
        let ticketPrice = priceKm * distance;
        if (age < 18) {
            let ticketPriceYoung = ticketPrice - ((ticketPrice / 100) * 20);
            alert('Il prezzo del viaggio con sconto Yunior è ' + ticketPriceYoung.toFixed(2) + "€")
        } else if (age > 65) {
            let ticketPriceSenior = ticketPrice - ((ticketPrice / 100) * 40);
            alert('Il prezzo del viaggio con sconto Senior è ' + ticketPriceSenior.toFixed(2) + "€")
        } else {
            alert('Il prezzo del viaggio è ' + ticketPrice.toFixed(2) + "€")
        }
    }
}
