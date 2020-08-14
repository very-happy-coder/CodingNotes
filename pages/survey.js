document.getElementById("range").addEventListener("input", function() {
    document.getElementById("range-bubble").textContent = document.getElementById("range").value;
});
document.getElementById("survey").addEventListener("submit", function(event) {
    event.preventDefault();
    var rate = document.getElementById("range").valueAsNumber;

    if (rate >= 3) {
        document.getElementById("result").innerHTML = "<p>We are so happy you like our website! Please consider donating to the camp that helped make this happen below.</p>";
    } else {
        document.getElementById("result").innerHTML = '<p>We are so sorry you don\'t like our website. If you have some feedback or advice, head over to the <a href="contact.html">Contact</a> page!<br>Also consider donating to the camp that helped make this happen below.</p>'
    }
    document.getElementById("result").innerHTML += '<p>Donate <a href="https://bit.ly/TTWABdonate" target="_blank">here</a>.</p>';
})