var blog = {};

(function(ns){

    ns.createMap = function(){
        var map = L.map('map', {zoomControl: false}).setView([60, 10], 10);
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
    blog.createMap();
});