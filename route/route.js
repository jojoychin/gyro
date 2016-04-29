
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
      // if(window.DeviceOrientationEvent) {
      //   window.addEventListener('deviceorientation', function(event) {
      //           var alpha = Math.round(event.alpha * 100) / 100;
      //           var beta = Math.round(event.beta * 100) / 100;
      //           var gamma = Math.round(event.gamma * 100) / 100;
               
      //           if(alpha!=null || beta!=null || gamma!=null) 
      //             // dataContainerOrientation.innerHTML = 'alpha: ' + alpha + '<br/>beta: ' + beta + '<br />gamma: ' + gamma;
      //         }, false);
      // }
 
      // Check for support for DeviceMotion events
      if(window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', function(event) {
                var x = Math.round(event.accelerationIncludingGravity.x * 100) / 100;
                var y = Math.round(event.accelerationIncludingGravity.y * 100) / 100;
                var z = Math.round(event.accelerationIncludingGravity.z * 100) / 100;
                var r = event.rotationRate;
                // var _x = Math.round(x * 100) / 100;
                // var html = 'Acceleration:<br />';
                // html += 'x: ' + x +'<br />y: ' + y + '<br/>z: ' + z+ '<br />';

                var totalScore = x + y + z;
                // var totalScore = 10;
                var endPoint = document.getElementById('endPt');
                console.log(endPoint);
                endPoint.src = "http://localhost:3000/set-score?score="+totalScore;

                // html += 'Rotation rate:<br />';
                // if(r!=null) html += 'alpha: ' + r.alpha +'<br />beta: ' + r.beta + '<br/>gamma: ' + r.gamma + '<br />';
                // dataContainerMotion.innerHTML = html;                  
              });
      }
    }
    app.init();  