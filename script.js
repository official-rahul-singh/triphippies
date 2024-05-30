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

// swap destinations
document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    var fltSwipCircle = document.querySelector(".fltSwipCircle");
    var fromCityInput = document.getElementById("fromCity");
    var toCityInput = document.getElementById("toCity");

    // Add event listener to fltSwipCircle
    fltSwipCircle.addEventListener("click", function () {
        // Swap the values of fromCity and toCity inputs
        var temp = fromCityInput.value;
        fromCityInput.value = toCityInput.value;
        toCityInput.value = temp;
    });
});


// input field dropdown
document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    var inputDropdown = document.querySelector('.input-dropdown');
    var dropdownList = document.querySelector('.open-dropdown');

    // Add event listener to the input-dropdown label
    inputDropdown.addEventListener("click", function () {
        // Toggle the 'open' class on the dropdown list
        dropdownList.classList.toggle('show');
    });
});



// number
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle button clicks
    function handleButtonClick(minusBtn, plusBtn, inputNumber) {
        // Add event listener to minus button
        minusBtn.addEventListener("click", function () {
            // Get the current value
            var value = parseInt(inputNumber.textContent);
            // Decrement value if greater than 0
            if (value > 0) {
                inputNumber.textContent = value - 1;
            }
        });

        // Add event listener to plus button
        plusBtn.addEventListener("click", function () {
            // Get the current value
            var value = parseInt(inputNumber.textContent);
            // Increment value
            inputNumber.textContent = value + 1;
        });
    }

    // Function to update the value of #travelers-number input
    function updateTravelersNumber() {
        var inputNumber1Value = parseInt(document.querySelector('.inputcount-list1 .input-number').textContent);
        var inputNumber2Value = parseInt(document.querySelector('.inputcount-list2 .input-number').textContent);
        var totalTravelers = inputNumber1Value + inputNumber2Value;
        document.querySelector('#travelers-number').value = totalTravelers;
    }

    // Get the elements for inputcount-list1
    var minusBtn1 = document.querySelector('.inputcount-list1 .minus');
    var plusBtn1 = document.querySelector('.inputcount-list1 .plus');
    var inputNumber1 = document.querySelector('.inputcount-list1 .input-number');

    // Handle button clicks for inputcount-list1
    handleButtonClick(minusBtn1, plusBtn1, inputNumber1);

    // Get the elements for inputcount-list2
    var minusBtn2 = document.querySelector('.inputcount-list2 .minus');
    var plusBtn2 = document.querySelector('.inputcount-list2 .plus');
    var inputNumber2 = document.querySelector('.inputcount-list2 .input-number');

    // Handle button clicks for inputcount-list2
    handleButtonClick(minusBtn2, plusBtn2, inputNumber2);

    // Add event listener to Apply button
    document.getElementById("apply-btn").addEventListener("click", function () {
        updateTravelersNumber();
    });
});