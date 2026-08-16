const reserveBtn = document.getElementById("reserve-table-btn");
const form - document.getElementById("reservation-form");
const name = document.getElementById("name");
const date = document.getElementById("date");
const time = document.getElementById("time");
const guests = document.getElementById("guests");

element.addEventListener("event", function () {
    reverveBtn.addEventListener("click", function () {
        form.hidden = false;
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const nameValue = name.value;
            const dateValue = date.value;
            const timeValue = time.value;
            const guestsValue = guests.value;
            if (nameValue===""|| dateValue==="" || timeValue === ""|| guestsValue==="" ) {
                alert("please fil in all fields");
            } else {
                alert("Reservation Successful!");
            }
        });
    });
});
document.getElementById('reserve-table-btn').addEventListener('click'),function(){
    this.style.display ='none';
    const form = document.getElementById('reservation-form');
    form.removeAttribute('hidden');
}