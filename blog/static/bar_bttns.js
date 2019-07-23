

$.get("/Users/gwc/Work_Space/django/test_blog/blog/static/css/bar_bttns.css", function (resp) {
    // resp now should contain your CSS file content.

});


// defines global variables
var location_chosen = false;
var time_chosen = false;
var budget_chosen = false;
var transportation_chosen = false;
var surprise_chosen = false;

// var interval = setInterval(check_if_finished, 1000);

var reset_buttons = false;

var dict = null;

const location_button_dict = {
    "san_francisco": "enabled",
    "palo_alto": "enabled",
    "oakland": "enabled",
    "fremont": "enabled",
    "walnut_creek": "enabled",
};

const button_dict_keys = location_button_dict.keys();

export { location_button_dict, button_dict_keys };

function set_button_status (button_id, dictionary) {
    console.log("hi1");
    var button_dict_keys = [];
    button_dict_keys.push(dictionary.keys());
    console.log(button_dict_keys);
    console.log("hi");
    
    for (key of button_dict_keys) {
        if (key != button_id && dictionary[button] == "enabled") {
            dictionary[button] = "disabled";

        }
    } 

    reset_buttons = true;
}


// function change_button_status(dictionary, button_name, button_id) {
//     // var button_dict_keys = dictionary.keys();
    
//     // for (key of button_dict_keys) {
//     //     if (reset_buttons == true) {
//     //         if (dictionary[key] == "disabled") {
//     //             <a id="{{button_id}}" class="btn bar_btn_custom btn_align_left disable_bttn">
//     //                 "{{button_name}}"
//     //             </a>
//     //         }
//     //         else if (dictionary[key] == "enabled") {
//     //             <a id="{{button_id}}" class="btn bar_btn_custom btn_align_left disable_bttn">
//     //                 "{{button_name}}"
//     //             </a>
//     //         }
//     //     }
//     // }

//     // reset_buttons = false;
// }


// function oak(){
//     import {location_button_dict} from './bar_bttns.js'

//     import {button_dict_keys} from './bar_bttns.js'

//     src="/static/bar_bttns.js"

//     document.getElementById("oakland_button").onclick = console.log("hi");
//     document.getElementById("oakland_button").onclick = set_button_status("oakland_button", location_button_dict);

//     change_button_status (this.location_button_dict, oakland_id, Oakland);
// } 


// var location_button_dict = [];

// location_button_dict.push = {
    
//     "san_francisco": "enabled",
//     "palo_alto": "enabled",
//     "oakland": "enabled",
//     "fremont": "enabled",
//     "walnut_creek": "enabled",

// }

// var budget_button_dict = {
//     "free": "enabled",
//     "five_twenty": "enabled",
//     "twenty_fifty": "enabled",
//     "fifty_plus": "enabled",
// }


// var time_button_dict = {
//     "2_hours": "enabled",
//     "4_hours": "enabled",
//     "6_hours": "enabled",
//     "6_plus_hours": "enabled",
// }


// var transportation_button_dict = {
//     "walking": "enabled",
//     "car": "enabled",
//     "ferry": "enabled",
//     "public_transportation": "enabled",
// }










