$.get("/Users/gwc/Work_Space/django/test_blog/blog/static/css/bar_bttns.css", function (resp) {
    // resp now should contain your CSS file content.

});


// defines global variables
var location_chosen = false;
var time_chosen = false;
var budget_chosen = false;
var transportation_chosen = false;
var surprise_chosen = false;

var interval = setInterval(check_if_finished, 1000);



// function check_if_finished() {

//     console.log("hi")

//     while (choosing_criteria == true) {
//         if (location_chosen == true) {

//             document.getElementById("Palo_Alto_Btn").className += "disable_bttn";
//     }

//         // else if (location_chosen == false) {
//         // return false;
//     }

//         clearInterval(interval);
// }




var location_button_dict = [];

location_button_dict.push = {
    
    "san_francisco": "enabled",
    "palo_alto": "enabled",
    "oakland": "enabled",
    "fremont": "enabled",
    "walnut_creek": "enabled",

}

// "budget": {
//     "free": "enabled",
//     "five_twenty": "enabled",
//     "twenty_fifty": "enabled",
//     "fifty_plus": "enabled",
// },

// "time": {
//     "2_hours": "enabled",
//     "4_hours": "enabled",
//     "6_hours": "enabled",
//     "6_plus_hours": "enabled",
// },

// "transportation": {
//     "walking": "enabled",
//     "car": "enabled",
//     "ferry": "enabled",
//     "public_transportation": "enabled",
// },

// document.getElementById().onclick = function() {
//     array.forEach(iterate_small_lists);
// }

// function iterate_small_lists () {
//     array.forEach(button_settings);
// }

function button_settings (button_id, dictionary) {
    
    var button_dict_keys = dictionary.keys();
    
    for (button of button_dict_keys) {
        if (button != button_id && dictionary[button] == "enabled") {
            

        }
    }
   
}