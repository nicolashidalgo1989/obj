<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3MwIRKbyo54MewosYTWxGnNK0fqnqV9c&language=es&callback=initMap"
        async defer></script>

<script>
    function initMap() {
                    
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
scrollwheel: false
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['Rosario Norte 100, 3rd Floor Office 301, Las Condes, Santiago.', -33.4077712,-70.5736081],
        //['Palace of Westminster, Chile', -36.515316,-72.153428],
        ['Edificio Dharma, Calle Sotomayor 575 Of. 407, Iquique', -20.2108381,-70.1495625],
        ['Sargento Aldea 1250, Tocopilla', -22.0965281,-70.2081063],
        ['Avenida Andalican 881, Mejillones', -23.1019336,-70.4473956],
        ['Condell 2026, "C" Tower, Of. 8 2nd Floor, Antofagasta', -23.6547848,-70.4044284],
        ['Carretera Panamericana Norte s/n, Puerto Barquitos Codelco Inside Camp', -26.358415, -70.645564],
        ['Pasaje Manuel Orella 415, Caldera', -27.0678813,-70.8107015],
        ['Craig 345 A, Piso 2, Huasco', -28.4634595,-71.2228396],
        ['Avda. Francia 947, Quintero', -32.782693,-71.5392777],
        ['Blanco Nº 1131, Edificio Espacio Errazuriz, Piso 3, Oficina 33, Valparaíso', -33.1181834,-71.5521343],
        ['Edificio Bioceanica, Barros Luco 1613, Of. 407, San Antonio', -33.593922,-71.613442],
        ['Lirquen - Penco - Talcahuano - San Vicente - Coronel, Avda. San Andrés 225-A, Concepción', -36.791768,-73.0614412],
        ['Chinquihue Km. 6, Puerto Montt', -41.5231081,-73.0457644],
        ['Pasaje Korner 1028, Piso 2, Punta Arenas', -53.1642065, -70.9055032],
        ['Pasaje Korner 1028, Piso 2, Punta Arenas', -53.1642065,-70.9055032],
        ['Pasaje Korner 1028, Piso 2, Punta Arenas',-53.1642065,-70.9055032], 
        ['Calle German Schreiber 184 Of. 301, San Isidro, Lima.', -12.0964146,-76.9797957],
        ['Av. Saenz Peña N° 284, Oficina 603, Piso 6, Callao', -12.0612497,-77.1469993],
        ['Jr. Tacna N° 150-B, Nueva Victoria, Supe Puerto', -10.8031864,-77.7553325],
        ['Jr. Independencia N° 167, Paita', -5.0861488,-81.1129099]



        
    ];
         
        // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {

        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);

        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                map.setZoom(15);
                            map.setCenter(marker.getPosition());
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(5);
        google.maps.event.removeListener(boundsListener);
    });



    }



</script>