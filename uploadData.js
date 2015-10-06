/**
 * Created by bowen on 12/08/2015.
 */

var patientname1;
function getUsername() {
    var patientname = document.getElementsByName('patientname');
    for (var i = 0; i < patientname.length; i++) {
        if (patientname[i].checked) {
            patientname1 = patientname[i].value;
        }
    }

    document.getElementById("welcome").innerHTML = "Patient Name: " + patientname1;
    return patientname1;
}


function uploadData() {
    var rates = document.getElementsByName('hand');
    var rate_value;
    for (var i = 0; i < rates.length; i++) {
        if (rates[i].checked) {
            rate_value = rates[i].value;
        }
    }
    var radios = rate_value;
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("POST", "uploadData.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("table1=" + JSON.stringify(table1) + "&table2=" + JSON.stringify(table2) + "&score=" + score.toPrecision(2) + "&pinch=" + output.innerHTML + "&hand=" + radios + "&patientname=" + patientname1);
    alert("Upload Successful!");

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        window.location.href = "uploadData.php";
    }
}



