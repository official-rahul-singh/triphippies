document.addEventListener("DOMContentLoaded", function () {
    // Get tab elements
    var flightTab = document.getElementById("flightTab");
    var hotelTab = document.getElementById("hotelTab");

    // Add event listeners to tabs
    flightTab.addEventListener("click", function () {
        openCity(event, 'flight');
    });

    hotelTab.addEventListener("click", function () {
        openCity(event, 'hotel');
    });

    // Open the first tab by default and add 'active' class
    openCity(null, 'flight');
    flightTab.classList.add("active");

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("trip-title");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        document.getElementById(cityName).style.display = "flex";
        if (evt) {
            evt.currentTarget.classList.add("active");
        }
    }
});