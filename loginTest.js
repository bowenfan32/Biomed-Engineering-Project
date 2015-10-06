function trim(str) {
   return str.replace(/^\s+|\s+$/g, '');
}

function processFormData() {

    var name_element = document.getElementById('txt_name');
    var password_element = document.getElementById('txt_password');


    var name = name_element.value;
    var password = password_element.value;

    //alert(name+password);

    callPHP("login_username="+name+"&login_password="+password, "loginTest2.php");

}




function onload()
{
    document.getElementById("uploadButton").disabled = true;
    document.getElementById("logoutButton").disabled = true;
    return false; 
}





function callPHP(params, url) {
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    xmlhttp.onreadystatechange = function(){


        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){

            //if xmlhttp.responseText == 'login_successful' {
            if (xmlhttp.responseText == 'Login_successful') {

                //document.getElementById("myDiv").innerHTML =xmlhttp.responseText;
                window.location.href = "start.php";
            } else {
                document.getElementById("myDiv").innerHTML ="<a href='loginTest.html'>"+xmlhttp.responseText+"!&nbspPlease Click to try again!</a>";
            }


        } else {
            document.getElementById("myDiv").innerHTML =xmlhttp.responseText;
        }


    }
    xmlhttp.send(params);

    /* if(window.XMLHttpRequest){
     xmlhttp = new XMLHttpRequest();
     } else {
     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
     }

     xmlhttp.onreadystatechange = function(){


     if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
     //if xmlhttp.responseText == 'login_successful' {
     if (xmlhttp.responseText == 'Login_successful') {
     //document.getElementById("myDiv").innerHTML =xmlhttp.responseText;
     window.location.href = "start.php";
     } else {
     document.getElementById("myDiv").innerHTML ="<a href='loginTest.html'>"+xmlhttp.responseText+"!&nbspPlease Click to try again!</a>";
     }


     } else {
     document.getElementById("myDiv").innerHTML =xmlhttp.responseText;
     }

     }

     xmlhttp.open("POST", "loginTest.php", true);
     xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     //alert("login_username="+u+"&login_password="+p);
     xmlhttp.send("login_username="+name+"&login_password="+password);
     xmlhttp.send();*/





}




/*function uploadData()
{
    window.location.href="http://www.google.com";
}	

function logout()
{
    window.location.href="http://www.baidu.com";	
}*/
