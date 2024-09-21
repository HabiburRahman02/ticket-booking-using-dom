
let selected = [];
function handleSelectedSeat(seat) {
    seat.classList.add('bg-black', 'text-white')
    // booked seat increase
    const bookedSeat = document.getElementById('booked-seat')
    selected.push(seat.innerText);
    bookedSeat.innerText = selected.length;

    // Decrease
    const totalSeatStr = document.getElementById('total-seat');
    const totalSeat = parseInt(totalSeatStr.innerText);
    totalSeatStr.innerText = totalSeat - 1;


    const selectedSeat = document.getElementById('selected-seat');
    // selectedSeat.innerHTML = `<li class="flex justify-between">
    //                     <span>${seat.innerText}</span>
    //                     <span>Economy</span>
    //                     <span>550</span>
    //                 </li>`
}
