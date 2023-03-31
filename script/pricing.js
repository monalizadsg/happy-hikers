//Updating PAX in Form when changing from Private (10) to Public (9)
function updatePax() {
    document.booking.pax.value = 9;
}

//Function for updating the total price and price per pax
function updatePrice() {
    let pax = document.booking.pax.value;
    let dest = document.booking.destination.value;
    let tour_option = document.booking.tour.value;
    let total = 0;
    let per_pax = 0;

    console.log(pax + "&" + dest + "&" + tour_option);

    //Condition for Public & Private
    //Public
    if (tour_option == "Public") {
        switch (dest) {
            case 'Joffre Lake':
                per_pax = 110;
                total = per_pax * pax;
                break;
            case 'Grouse Grind':
                per_pax = 70;
                total = per_pax * pax;
                break;
            case 'Lynn Canyon':
                per_pax = 65;
                total = per_pax * pax;
                break;
            case 'Panorama Ridge':
                per_pax = 180;
                total = per_pax * pax;
                break;
            case 'Quarry Rock':
                per_pax = 65;
                total = per_pax * pax;
                break;
            case 'Golden Ears':
                per_pax = 75;
                total = per_pax * pax;
                break;
        }

    }
    //Private
    else {
        //Set pax to 10 if private
        document.booking.pax.value = 10;
        switch (dest) {
            case 'Joffre Lake':
                total = 880;
                break;
            case 'Grouse Grind':
                total = 560;
                break;
            case 'Lynn Canyon':
                total = 520;
                break;
            case 'Panorama Ridge':
                total = 1440;
                break;
            case 'Quarry Rock':
                total = 520;
                break;
            case 'Golden Ears':
                total = 600;
                break;
        }
        per_pax = 0;
    }
    //Updating price per pax
    document.booking.per_pax.value = per_pax;
    //Updating value for total price
    document.booking.total.value = total;

}

//Function for sending alert after submitting booking
function submitBooking(){
    alert("Thank you for booking! An email will be sent for the payment instruction and other information for your trip. Have a joyful hike!")
}