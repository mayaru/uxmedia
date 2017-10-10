jQuery(function ($) { "use strict";

/* ========================================================================= */
/*	Google Map Customization
/* =========================================================================  */

function initialize() {

  var myLatLng = new google.maps.LatLng(44.4325003,26.0987628);

  var roadAtlasStyles = [{
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#2F3238"
    }]
  }, {
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#FFFFFF"
    }]
  }, {
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#50525f"
    }]
  }, {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#808080"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "transit",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
      "color": "#808080"
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#3071a7"
    }, {
      "saturation": -65
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "landscape",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#bbbbbb"
    }]
  }];

  var mapOptions = {
    zoom: 12,
    center: myLatLng,
    disableDefaultUI: true,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
    }
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: 'img/location-icon.png',
    title: '',
  });


  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  });

  var styledMapOptions = {
    name: 'US Road Atlas'
  };

  var usRoadMapType = new google.maps.StyledMapType(
    roadAtlasStyles, styledMapOptions);

  map.mapTypes.set('roadatlas', usRoadMapType);
  map.setMapTypeId('roadatlas');
}

google.maps.event.addDomListener(window, "load", initialize);


});





// jQuery(document).ready(function() {
//     "use strict";
//
//
//     function b() {
//         var a = {
//                 zoom: 12,
//                 scrollwheel: false,
//                 center: new google.maps.LatLng(44.4325003,26.0987628),
//                 styles: [{
//                     "featureType": "landscape",
//                     "stylers": [
//                         {
//                             "saturation": -100
//                         },
//                         {
//                             "lightness": 65
//                         },
//                         {
//                             "visibility": "on"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "poi",
//                     "stylers": [
//                         {
//                             "saturation": -100
//                         },
//                         {
//                             "lightness": 51
//                         },
//                         {
//                             "visibility": "simplified"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "road.highway",
//                     "stylers": [
//                         {
//                             "saturation": -100
//                         },
//                         {
//                             "visibility": "simplified"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "road.arterial",
//                     "stylers": [
//                         {
//                             "saturation": -100
//                         },
//                         {
//                             "lightness": 30
//                         },
//                         {
//                             "visibility": "on"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "road.local",
//                     "stylers": [
//                         {
//                             "saturation": -100
//                         },
//                         {
//                             "lightness": 40
//                         },
//                         {
//                             "visibility": "on"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "transit",
//                     "stylers": [
//                         {
//                             "saturation": -100
//                         },
//                         {
//                             "visibility": "simplified"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "administrative.province",
//                     "stylers": [
//                         {
//                             "visibility": "off"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "water",
//                     "elementType": "labels",
//                     "stylers": [
//                         {
//                             "visibility": "on"
//                         },
//                         {
//                             "lightness": -25
//                         },
//                         {
//                             "saturation": -100
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "water",
//                     "elementType": "geometry",
//                     "stylers": [
//                         {
//                             "hue": "#ffff00"
//                         },
//                         {
//                             "lightness": -25
//                         },
//                         {
//                             "saturation": -97
//                         }
//                     ]
//                 }]
//             },
//             b = document.getElementById("map"),
//             c = new google.maps.Map(b, a);
//         new google.maps.Marker({
//             position: new google.maps.LatLng(44.4325003,26.0987628),
//             map: c,
//             title: "Snazzy!"
//         })
//     }
//     google.maps.event.addDomListener(window, "load", b);
//
// });
