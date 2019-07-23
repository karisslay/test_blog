
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var outdoor_activity_array = ['amusement_park', 'campground', 'park', 'stadium', 'zoo', ]
var indoor_activity_array = ['aquarium', 'art_gallery', 'bowling_alley', 'casino', 'gym', 'library', 'movie_theater', 'night_club', 'spa', ]
var restaurant_array = ['bar', 'restaurant']
var cafe_array = ['bakery', 'cafe', ]
var shopping_array = ['bicycle_store', 'book_store', 'car_dealer', 'clothing_store', 'department_store', 'electronics_store', 'florist', 'furniture_store', 'hardware_store', 'home_goods_store', 'jewelry_store', 'pet_store', 'shoe_store', 'shopping_mall', 'store', 'supermarket', ]
