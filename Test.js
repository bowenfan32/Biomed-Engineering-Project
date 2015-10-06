/***********************************
 * This is the actual example part
 ************************************/

Leap.loop()
    .use('transform', {
        quaternion: new THREE.Quaternion,
        position: new THREE.Vector3,
        scale: new THREE.Vector3(1, 1, 1)
    })
    .use('boneHand', {
        targetEl: document.body,
        opacity: 0.8
    });


// Set up the controller:
Leap.loop({background: true}, {

    hand: function (hand) {

        /* Function for finding signed angle between metacarpal and proximal joints */
        function findSign(p1, p2, jointAngle, boneXBasis) {
            var cross = Leap.vec3.create();
            var crossBones = Leap.vec3.cross(cross, p1, p2);
            var dir = Leap.vec3.dot(crossBones, boneXBasis);
            if (hand.type == "left") {
                dir *= -1; // If left hand must switch direction!
            }
            if (dir < 0) {
                jointAngle *= -1;
            }
            return jointAngle;
        }

        /* Function that rounds the angle to 2 decimal places */
        function toDegree(angle) {
            window.TO_DEG = 180 / Math.PI;
            var finalAngle = (angle * TO_DEG).toPrecision(2) + '°';
            return finalAngle;
        }

        /* Function that finds the angle between two bone vectors */
        function findAngle(p1, p2) {
            var angle = Math.acos(Leap.vec3.dot(p1, p2));
            return angle;
        }

        /*angle between joints*/
        var a1 = hand.thumb.distal.direction(),
            a2 = hand.thumb.medial.direction(),
            a3 = hand.thumb.proximal.direction();
        thumbBasis = hand.thumb.medial.basis[0]; // this is the X orientation of a bone vector
        document.getElementById("thumb_distal_medial").innerHTML = toDegree(findSign(a1, a2, findAngle(a1, a2), thumbBasis));
        document.getElementById("thumb_medial_proximal").innerHTML = toDegree(findAngle(a2, a3));

        var b1 = hand.indexFinger.distal.direction(),
            b2 = hand.indexFinger.medial.direction(),
            b3 = hand.indexFinger.proximal.direction(),
            b4 = hand.indexFinger.metacarpal.direction();
        indexBasis = hand.indexFinger.metacarpal.basis[0];
        document.getElementById("index_distal_medial").innerHTML = toDegree(findAngle(b1, b2));
        document.getElementById("index_medial_proximal").innerHTML = toDegree(findAngle(b2, b3));
        document.getElementById("index_proximal_metacarpal").innerHTML = toDegree(findSign(b3, b4, findAngle(b3, b4), indexBasis));

        var c1 = hand.middleFinger.distal.direction(),
            c2 = hand.middleFinger.medial.direction(),
            c3 = hand.middleFinger.proximal.direction(),
            c4 = hand.middleFinger.metacarpal.direction();
        middleBasis = hand.middleFinger.metacarpal.basis[0];
        document.getElementById("middle_distal_medial").innerHTML = toDegree(findAngle(c1, c2));
        document.getElementById("middle_medial_proximal").innerHTML = toDegree(findAngle(c2, c3));
        document.getElementById("middle_proximal_metacarpal").innerHTML = toDegree(findSign(c3, c4, findAngle(c3, c4), middleBasis));

        var d1 = hand.ringFinger.distal.direction(),
            d2 = hand.ringFinger.medial.direction(),
            d3 = hand.ringFinger.proximal.direction(),
            d4 = hand.ringFinger.metacarpal.direction();
        ringBasis = hand.ringFinger.metacarpal.basis[0];
        document.getElementById("ring_distal_medial").innerHTML = toDegree(findAngle(d1, d2));
        document.getElementById("ring_medial_proximal").innerHTML = toDegree(findAngle(d2, d3));
        document.getElementById("ring_proximal_metacarpal").innerHTML = toDegree(findSign(d3, d4, findAngle(d3, d4), ringBasis));

        var e1 = hand.pinky.distal.direction(),
            e2 = hand.pinky.medial.direction(),
            e3 = hand.pinky.proximal.direction(),
            e4 = hand.pinky.metacarpal.direction();
        pinkyBasis = hand.pinky.metacarpal.basis[0];
        document.getElementById("pinky_distal_medial").innerHTML = toDegree(findAngle(e1, e2));
        document.getElementById("pinky_medial_proximal").innerHTML = toDegree(findAngle(e2, e3));
        document.getElementById("pinky_proximal_metacarpal").innerHTML = toDegree(findSign(e3, e4, findAngle(e3, e4), pinkyBasis));

        /*Angle between fingers*/
        var f1 = hand.thumb.medial.direction(),
            f2 = hand.indexFinger.proximal.direction(),
            f3 = hand.middleFinger.proximal.direction(),
            f4 = hand.ringFinger.proximal.direction(),
            f5 = hand.pinky.proximal.direction();
        document.getElementById("thumb_index_angle").innerHTML = toDegree(findAngle(f1, f2));
        document.getElementById("index_middle_angle").innerHTML = toDegree(findAngle(f2, f3));
        document.getElementById("middle_ring_angle").innerHTML = toDegree(findAngle(f3, f4));
        document.getElementById("ring_pinky_angle").innerHTML = toDegree(findAngle(f4, f5));

        /*Display pinch strength*/
        output.innerHTML = hand.pinchStrength.toPrecision(2);

    }
});

/*function promptUser() {
 alert("asdf");
 var names;
 var namename = prompt("To begin the assessment, please enter your name");
 //localStorage["names"] = JSON.stringify(names);
 localStorage.setItem(names.push(namename));


 // Retrieve
 document.getElementById("username").innerHTML = localStorage.getItem("names");
 for (var i = 0; i < localStorage.length; i++) {

 var propertyName = localStorage.key(i);

 alert(i + " : " + propertyName + " = " +
 localStorage.getItem(propertyName));
 }

 }*/

// Store


/*function setCookie(cname, cvalue, exdays) {
 var d = new Date();
 d.setTime(d.getTime() + (exdays*24*60*60*1000));
 var expires = "expires="+d.toUTCString();
 document.cookie = cname + "=" + cvalue + "; " + expires;
 }

 function getCookie(cname) {
 var name = cname + "=";
 var ca = document.cookie.split(';');
 for(var i=0; i<ca.length; i++) {
 var c = ca[i];
 while (c.charAt(0)==' ') c = c.substring(1);
 if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
 }
 return "";
 }*/


var table1, table2;
function recordData1() {
    table1 = $('#sampleTable').tableToJSON({
        ignoreColumns: [0]
    }); // Convert the table into a javascript object
    console.log(table1);
    //la.innerHTML = JSON.stringify(table1);
}

function recordData2() {
    table2 = $('#sampleTable').tableToJSON({
        ignoreColumns: [0]
    }); // Convert the table into a javascript object
    console.log(table2);
    //la1.innerHTML = JSON.stringify(table2);
}

function userInstruction() {
    if (feedback.innerHTML == "")
        document.getElementById("feedback").innerHTML = "Extention recorded";
    else if (feedback.innerHTML == "Extention recorded")
        document.getElementById("feedback").innerHTML = "Flexion recorded";
    else if (feedback.innerHTML == "Flexion recorded")
        document.getElementById("feedback").innerHTML = "";
}

function recordPinch() {
    computeScore();
    return output.innerHTML;
}


var score;
function computeScore() {
    var thumbDIP = ((table2[0].Thumb.slice(0, -1) - table1[0].Thumb.slice(0, -1)) / 110) * 8;
    var thumbPIP = ((table2[1].Thumb.slice(0, -1) - table1[1].Thumb.slice(0, -1)) / 60) * (22 - thumbDIP);

    var indexDIP = ((table2[0].Index.slice(0, -1) - table1[0].Index.slice(0, -1)) / 40) * 4;
    var indexPIP = ((table2[1].Index.slice(0, -1) - table1[1].Index.slice(0, -1)) / 80) * (11 - indexDIP);
    var indexMP = ((table2[2].Index.slice(0, -1) - table1[2].Index.slice(0, -1)) / 120) * (20 - indexPIP);

    var middleDIP = ((table2[0].Middle.slice(0, -1) - table1[0].Middle.slice(0, -1)) / 40) * 4;
    var middlePIP = ((table2[1].Middle.slice(0, -1) - table1[1].Middle.slice(0, -1)) / 80) * (11 - middleDIP);
    var middleMP = ((table2[2].Middle.slice(0, -1) - table1[2].Middle.slice(0, -1)) / 120) * (20 - middlePIP);

    var ringDIP = ((table2[0].Ring.slice(0, -1) - table1[0].Ring.slice(0, -1)) / 40) * 2;
    var ringPIP = ((table2[1].Ring.slice(0, -1) - table1[1].Ring.slice(0, -1)) / 80) * (5.5 - ringDIP);
    var ringMP = ((table2[2].Ring.slice(0, -1) - table1[2].Ring.slice(0, -1)) / 120) * (10 - ringPIP);

    var pinkyDIP = ((table2[0].Pinky.slice(0, -1) - table1[0].Pinky.slice(0, -1)) / 40) * 2;
    var pinkyPIP = ((table2[1].Pinky.slice(0, -1) - table1[1].Pinky.slice(0, -1)) / 80) * (5.5 - pinkyDIP);
    var pinkyMP = ((table2[2].Pinky.slice(0, -1) - table1[2].Pinky.slice(0, -1)) / 120) * (10 - pinkyPIP);

    var pinchStrength = (output.innerHTML / 1.0) * 18;

    score = thumbPIP + thumbDIP + indexMP + indexPIP + indexDIP + middleMP + middlePIP + middleDIP + ringMP
    + ringPIP + ringDIP + pinkyMP + pinkyPIP + pinkyDIP + pinchStrength;
    document.getElementById("score").innerHTML = "Your score is: " + score.toPrecision(2);

}


$(document).ready(function () {

    var id = '#dialog';

//Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

//Set heigth and width to mask to fill up the whole screen
    $('#mask').css({'width': maskWidth, 'height': maskHeight});

//transition effect
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);

//Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();

//Set the popup window to center
    $(id).css('top', winH / 2 - $(id).height() / 2);
    $(id).css('left', winW / 2 - $(id).width() / 2);

//transition effect
    $(id).fadeIn(2000);

//if close button is clicked
    $('.window .close').click(function (e) {
//Cancel the link behavior
        e.preventDefault();

        $('#mask').hide();
        $('.window').hide();
    });

//if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });

});




/*********************************************************
 * End of the actual example
 ****************************************************/


/*********************************************************
 * The rest of the code is here for visualizing the example.
 ****************************************************/

// Set up scene
var initScene = function () {
    window.scene = new THREE.Scene();
    window.renderer = new THREE.WebGLRenderer({
        alpha: true
    });

    window.renderer.setClearColor(0x000000, 0);
    window.renderer.setSize(window.innerWidth, window.innerHeight);
    window.renderer.domElement.style.position = 'fixed';
    window.renderer.domElement.style.top = 0;
    window.renderer.domElement.style.left = 0;
    window.renderer.domElement.style.width = '100%';
    window.renderer.domElement.style.height = '100%';

    document.body.appendChild(window.renderer.domElement);

    window.scene.add(new THREE.AmbientLight(0x888888));

    var pointLight = new THREE.PointLight(0xFFffff);
    pointLight.position = new THREE.Vector3(-20, 10, 100);
    pointLight.lookAt(new THREE.Vector3(0, 0, 0));
    window.scene.add(pointLight);

    window.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    window.camera.position.fromArray([0, 160, 400]);
    window.camera.lookAt(new THREE.Vector3(0, 0, 0));

    window.addEventListener('resize', function () {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);

    }, false);

    scene.add(camera);


    renderer.render(scene, camera);
};

initScene();

window.transformPlugin = Leap.loopController.plugins.transform;

document.getElementById('rotationInput').oninput = function (e) {
    var value = e.target.value;
    transformPlugin.quaternion.setFromEuler(
        new THREE.Euler(0, Math.PI * parseFloat(value, 10), 0)
    );
    document.getElementById('rotationOutput').innerHTML = value;
};


document.getElementById('rotationInput2').oninput = function (e) {
    var value = e.target.value;
    transformPlugin.quaternion.setFromEuler(
        new THREE.Euler(Math.PI * parseFloat(value, 10), 0, 0)
    );
    document.getElementById('rotationOutput2').innerHTML = value;
};


var value = 150;
transformPlugin.position.set(
    0, parseInt(value, 10), 0
);

