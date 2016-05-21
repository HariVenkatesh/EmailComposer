document.addEventListener("deviceready", onDeviceReadyone, false);

function onDeviceReadyone() {
    // Now safe to use device APIs

    StatusBar.overlaysWebView(true);
}


window.plugin.email.isServiceAvailable(
    function (isAvailable) {
        // alert('Service is not available') unless isAvailable;
    }
);

function openemail()
{

window.plugin.email.open({
    attachments: [
        'absolute://storage/sdcard/splash.png',
        'relative://drawable/icon.png'
    ]
});

window.plugins.toast.showLongBottom('Opening E-mail');
}



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
        $("#btnDefaultSMS").click(function(){
            alert("click");
            var number = $("#numberTxt").val();
            var message = $("#messageTxt").val();
            var intent = "INTENT"; //leave empty for sending sms using default intent
            var success = function () { alert('Message sent successfully'); };
            var error = function (e) { alert('Message Failed:' + e); };
            sms.send(number, message, intent, success, error);
        });
    }
};










