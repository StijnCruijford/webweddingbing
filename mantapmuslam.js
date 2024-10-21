document.getElementById("rsvp-form").addEventListener("submit", function(event){
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const attendance = document.getElementById("attendance").value;

    if(attendance === "yes"){
        alert(`Terima kasih ${name}, kami sangat senang Anda akan hadir!`);
    } else if(attendance === "no"){
        alert(`Terima kasih ${name}, semoga kita bisa bertemu di lain kesempatan!`);
    } else {
        alert("Silakan pilih apakah Anda akan hadir atau tidak.");
    }

    // Reset form setelah submit
    document.getElementById("rsvp-form").reset();
});
