
// var appRouter = function(app) {

// app.get("/account", function(req, res) {
//     var accountMock = {
//         "username": "nraboy",
//         "password": "1234",
//         "twitter": "@nraboy"
//     }
//     if(!req.query.username) {
//         return res.send({"status": "error", "message": "missing username"});
//     } else if(req.query.username != accountMock.username) {
//         return res.send({"status": "error", "message": "wrong username"});
//     } else {
//         return res.send(accountMock);
//     }
// });

// app.post("/account", function(req, res) {
//     if(!req.body.username || !req.body.password || !req.body.twitter) {
//         return res.send({"status": "error", "message": "missing a parameter"});
//     } else {
//         return res.send(req.body);
//     }
// });

// }
 
// module.exports = appRouter;
var app = {};

app.init = function init() {
      //Find our div containers in the DOM
      var dataContainerOrientation = document.getElementById('dataContainerOrientation');
      var dataContainerMotion = document.getElementById('dataContainerMotion');
 
      //Check for support for DeviceOrientation event
      if(window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {
                var alpha = event.alpha;
                var beta = event.beta;
                var gamma = event.gamma;
                var roundA = Math.round(alpha);
                var roundB = Math.round(beta);
                var roundG = Math.round(gamma);
               
                // if(alpha!=null || beta!=null || gamma!=null) {
                  dataContainerOrientation.innerHTML = 'alpha: ' + roundA + '<br/>beta: ' + roundB + '<br />gamma: ' + roundG;
                // }
              }, false);
      }
 
      // Check for support for DeviceMotion events
      if(window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', function(event) {
                var x = Math.round(event.accelerationIncludingGravity.x);
                var y = Math.round(event.accelerationIncludingGravity.y);
                var z = Math.round(event.accelerationIncludingGravity.z);
                var r = event.rotationRate;
                // var _x = Math.round(x * 100) / 100;
                var html = 'Acceleration:<br />';
                html += 'x: ' + x +'<br />y: ' + y + '<br/>z: ' + z+ '<br />';

                var rBeta = Math.round(r.beta);
                var rGamma = Math.round(r.gamma);

                html += 'Rotation rate:<br />';
                if(r!=null) html += 'alpha: ' + Math.round(r.alpha) +'<br />beta: ' + Math.round(r.beta) + '<br/>gamma: ' + Math.round(r.gamma) + '<br />';
                dataContainerMotion.innerHTML = html;  

                var totalScore = Math.abs(rBeta) + Math.abs(rGamma);
                // var totalScore = 10;
                var endPoint = document.getElementById('endPt');
                console.log(endPoint);
                endPoint.src = "http://gyro-dev.us-west-2.elasticbeanstalk.com/set-score?score="+totalScore;                
              });
      }
    }
    app.init();  