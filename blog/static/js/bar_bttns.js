// defines global variables
var location_chosen = false;
var time_chosen = false;
var budget_chosen = false;
var transportation_chosen = false;
var surprise_chosen = false;

var interval = setInterval(check_if_finished, 1000);


// function disable_button(object_to_disable) {
//     object_to_disable.style.opacity="0.5";
// }

// var choosing_criteria = true;

function check_if_finished() {

    while (choosing_criteria == true) {
        if (location_chosen == true) {

            document.getElementById("Palo_Alto_Btn").className = "disable_bttn";
    }

        else if (choosing_criteria == false) {
        // return false;
    }

        clearInterval(interval);
}

// sf code
document.getElementById("San Francisco Btn").onclick = function() {San_Francisco()};

function San_Francisco() {
    document.getElementById("San Francisco Btn").style.backgroundColor = "#99cfff";

    location_chosen = true;

    return location_chosen;
}


// palo alto code
document.getElementById("Palo_Alto_Btn").onclick = function() {palo_alto()};

function palo_alto() {
    // document.getElementById("Palo_Alto_Btn").style.backgroundColor = "#99cfff";
    
    string = "Palo_Alto_Btn";
    if (location_chosen == true) {
        document.getElementById(string).className = "disable_bttn";
    }
    else if (location_chosen == false) {

        document.getElementById("string").style.backgroundColor = "#99cfff";
    }
}

