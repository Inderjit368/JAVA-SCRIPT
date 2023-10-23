 window.onload = function() {
        L.mapquest.key = 'ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7';

        var map = L.mapquest.map('map', {
          center: [45.5019, -73.5674],
          layers: L.mapquest.tileLayer('map'),
          zoom: 11
        });

        map.addControl(L.mapquest.control());
      }