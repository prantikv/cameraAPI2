
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
      },
    // Update DOM on a Received Event
    

    takePicture: function() {
      navigator.camera.getPicture( function( imageURI ) {

        var image=document.getElementById('myImage');
        image.src=imageURI;
        

    },
       function( message ) {alert( message ); },
       {quality: 50,destinationType: Camera.DestinationType.FILE_URI, saveToPhotoAlbum: true, sourceType : Camera.PictureSourceType.PHOTOLIBRARY });
    }
};

 app.initialize();saveToPhotoAlbum: true