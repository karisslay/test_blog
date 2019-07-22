from pynput.mouse import Listener

with Listener() as listener:
    listener.join()

with Listener(on_click=on_click) as listener:

    
    location_selected_button = None
    budget_selected_button = None
    time_selected_button = None
    transporation_selected_button = None

button_dict = {
    "locations": {
        "san_francisco": "enabled",
        "palo_alto": "enabled",
        "oakland": "enabled",
        "fremont": "enabled",
        "walnut_creek": "enabled",

    },
    
    "budget": {
        "free": "enabled",
        "five_twenty": "enabled",
        "twenty_fifty": "enabled",
        "fifty_plus": "enabled",
    },

    "time": {
        "2_hours": "enabled",
        "4_hours": "enabled",
        "6_hours": "enabled",
        "6_plus_hours": "enabled",
    },
    
    "transportation": {
        "walking": "enabled",
        "car": "enabled",
        "ferry": "enabled",
        "public_transportation": "enabled",
    },
    
}

def on_click(button, pressed):
    print ("Mouse clicked")

on_click()

# def disable_other_buttons(button_id):

#     for dictionary in button_dict:
        
#         for element in dictionary:
            
#             if button_id not in key:
#                 element[key] = "disabled"

# for dictionary in button_dict:
#     for element in dictionary:
#         if element[key] == "enabled":

#         elif element[key] == "disabled":


# def on_click(x, y, button, pressed):
#     # print("clicked")

#     for dictionary in button_dict:
#         for element in dictionary:
#             if pressed and element[key] == "enabled":
                