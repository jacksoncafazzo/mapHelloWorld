function initMap() {
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

$(document).ready(function() {
  async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9m1ReIk_LMoa3zaAzw1EnfuHzQsrnJfg&callback=initMap">

  event.preventDefault();
}
