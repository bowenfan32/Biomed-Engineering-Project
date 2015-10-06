<!DOCTYPE html>
<html>
<link href="tablecloth/tablecloth.css" rel="stylesheet" type="text/css" media="screen"/>
<link href="Test.css" rel="stylesheet" type="text/css">
<link href="jQueryPopup/main.css" rel="stylesheet" type="text/css">
<script src="//cdnjs.cloudflare.com/ajax/libs/three.js/r67/three.js"></script>
<script src="//js.leapmotion.com/leap.rigged-hand-0.1.4.min.js"></script>
<script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.js"></script>

<script src="//js.leapmotion.com/leap-0.6.4.js"></script>
<script src="//js.leapmotion.com/leap-plugins-0.1.10.js"></script>
<script src="jquery.tabletojson.js"></script>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body onload="onload();">
<div id="header">
    <div class="container">
        <div id="titleArea">Finger Function Assessments</div>
        <button id="uploadButton" onclick="uploadData()">Upload</button>
        <button id="logoutButton" onclick="logout()">Logout</button>
    </div>
</div>

<div id="boxes">
    <div id="dialog" class="window">
        <b>Please select your patient:<b/> <br>

            <?php include 'GetPatientList.php'; ?>
        <div id="popupfoot" onclick="getUsername()"><a href="#" class="close agree">OK</a></div>
    </div>
    <div id="mask"></div>
</div>


<?php
//
//session_start();
//if (!isset($_SESSION["username"])) {
//    header("location:loginTest.html");
//} else {
//    echo "<div><b>Welcome " . $_SESSION["username"] . "!</b></div>";
//}
//?>

<div id="welcome"></div>


<div id="mainArea">
    <table border="1" id="sampleTable">
        <tr>
            <th></th>
            <th>Thumb</th>
            <th>Index</th>
            <th>Middle</th>
            <th>Ring</th>
            <th>Pinky</th>
        </tr>
        <tr>
            <th>Distal-Medial</th>
            <td id="thumb_distal_medial"></td>
            <td id="index_distal_medial"></td>
            <td id="middle_distal_medial"></td>
            <td id="ring_distal_medial"></td>
            <td id="pinky_distal_medial"></td>

        </tr>
        <tr>
            <th>Medial-Proximal</th>
            <td id="thumb_medial_proximal"></td>
            <td id="index_medial_proximal"></td>
            <td id="middle_medial_proximal"></td>
            <td id="ring_medial_proximal"></td>
            <td id="pinky_medial_proximal"></td>
        </tr>
        <tr>
            <th>Proximal-Metacarpal</th>
            <td>N/A</td>
            <td id="index_proximal_metacarpal"></td>
            <td id="middle_proximal_metacarpal"></td>
            <td id="ring_proximal_metacarpal"></td>
            <td id="pinky_proximal_metacarpal"></td>
        </tr>
    </table>
</div>
<div id="mainArea2">
    <table border="1">
        <tr>
            <th>Thumb - Index</th>
            <th>Index - Middle</th>
            <th>Middle - Ring</th>
            <th>Ring - Pinky</th>
        </tr>
        <tr>
            <td id="thumb_index_angle"></td>
            <td id="index_middle_angle"></td>
            <td id="middle_ring_angle"></td>
            <td id="ring_pinky_angle"></td>
        </tr>
    </table>
    <p style="font-size:20px">
        Pinch Strength: <var id="output"></var>
        <br>
        Grab Strength: <var id="output2"></var>
    </p>
</div>
<div id="mainArea3">
    <p><b>Please follow the following steps to make the assessment: </b></p>
    <button onclick="recordData1();userInstruction()">1. Record extention</button>
    <button onclick="recordData2();userInstruction()">2. Record Flexion</button>
    <button onclick="recordPinch();userInstruction()">3. Record Pinch</button>
    <br><br>

    <form>
        Please select left or right hand<br>
        <input type="radio" value="left" name="hand" id="hand">Left
        <input type="radio" value="right" name="hand" id="hand">Right
    </form>

    <p id="feedback"></p>


</div>
<div id="mainArea4">

    <label>x-axis rotation: <span id="rotationOutput">0</span>π</label><br/>
    <input id="rotationInput" type="range" min="-1" max="1" value="0" step="0.001">

    <p></p>

    <label>y-axis rotation: <span id="rotationOutput2">0</span>π</label><br/>
    <input id="rotationInput2" type="range" min="-1" max="1" value="0" step="0.001">
</div>

<div id="scoreArea">
    <p id="score"></p>
</div>

</body>
<script src="Test.js"></script>
<script src="uploadData.js"></script>
</html>
