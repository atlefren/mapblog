var blog = {};

(function(ns){

    ns.showMap = function(){
        navigator.geolocation.getCurrentPosition(function (pos) {

            var lat = pos.coords.latitude;
            var lon = pos.coords.longitude;
            createMap(lon, lat);

        }, function (error) {
            //alert("Unable to determine location. Error: " + error.code);
            createMap(10.4, 63.4);
        }, {timeout: 50000});
    };

    var createMap = function(lon, lat){
        var map = L.map('map', {zoomControl: false}).setView([lat, lon], 10);
        map.attributionControl.setPrefix("");
        L.tileLayer('http://{s}.tile.cloudmade.com/{key}/998/256/{z}/{x}/{y}.png',
            {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                maxZoom: 18,
                key: "298f62509c504480b82849744356fd20"

            }
        ).addTo(map);
    };

    window.onscroll = function() {
        $("#map").css("top", window.pageYOffset + "px");
    };
}(blog));



Zepto(function($){
    blog.showMap();
});