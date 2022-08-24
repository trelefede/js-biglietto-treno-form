console.log('js ok')

const priceKm = 0.21;

const totalPrice = document.getElementById("totalPrice");

const nameSurname = document.getElementById("nameSurname");

const ticketType = document.getElementById("ticketType");

// users data input
document.getElementById("btn").addEventListener("click", function () {
    const userName = document.getElementById("userName").value;
    console.log(userName);

    const distance = parseInt(document.getElementById("distance").value);
    console.log(distance);

    const age = parseInt(document.getElementById("age").value);
    console.log(age);

    if (isNaN(age) && isNaN(distance)) {
        alert('Valore inserito non valido! Riprova');
    } else {
        // price calc 
        let ticketPrice = priceKm * distance;
        if (age < 18) {
            let ticketPriceYoung = ticketPrice - ((ticketPrice / 100) * 20);
            totalPrice.innerHTML = ticketPriceYoung.toFixed(2) + ' €';
            ticketType.innerHTML = 'Biglietto Young'
        } else if (age > 65) {
            let ticketPriceSenior = ticketPrice - ((ticketPrice / 100) * 40);
            totalPrice.innerHTML = ticketPriceSenior.toFixed(2) + ' €';
            ticketType.innerHTML = 'Biglietto Senior'
        } else {
            totalPrice.innerHTML = ticketPrice.toFixed(2) + ' €';
            ticketType.innerHTML = 'Biglietto Standard'
        }
    }

    nameSurname.innerHTML = userName;

})

