

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

var reset_buttons = false;

var dict = null;







function set_button_status (button_id, dictionary) {
    
    var button_dict_keys = dictionary.keys();
    
    for (key of button_dict_keys) {
        if (key != button_id && dictionary[button] == "enabled") {
            dictionary[button] = "disabled";

        }
    } 

    reset_buttons = true;
}


function change_button_status (dictionary, button_name, button_id) {
            
    // var button_dict_keys = dictionary.keys();
    
    for (key of button_dict_keys) {

        if (reset_buttons == true) {
            if (dictionary[key] == "disabled") {
                <a id= {{button_id}} class="btn bar_btn_custom btn_align_left disable_bttn">{{button_name}}</a>
                
            }

            else if (dictionary[key] == "enabled") {
                <a id= {{button_id}} class="btn bar_btn_custom btn_align_left disable_bttn">{{button_name}}</a>

            }
    }
            
    }

    reset_buttons = false;
}



var location_button_dict = [];

location_button_dict.push = {
    
    "san_francisco": "enabled",
    "palo_alto": "enabled",
    "oakland": "enabled",
    "fremont": "enabled",
    "walnut_creek": "enabled",

}


var budget_button_dict = [];

budget_button_dict.push = {

    "free": "enabled",
    "five_twenty": "enabled",
    "twenty_fifty": "enabled",
    "fifty_plus": "enabled",

}


var time_button_dict = [];

time_button_dict.push = {

    "2_hours": "enabled",
    "4_hours": "enabled",
    "6_hours": "enabled",
    "6_plus_hours": "enabled",

}


var transportation_button_dict = [];

transportation_button_dict.push = {

    "walking": "enabled",
    "car": "enabled",
    "ferry": "enabled",
    "public_transportation": "enabled",
}










