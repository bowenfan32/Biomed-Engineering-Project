function checkLogin(){
    var u = document.getElementById("usernamelogin").value;
    var p = document.getElementById("passwordlogin").value;

    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onReadystatechange = function(){
	    		alert(xmlhttp.responseText);
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		alert('inside'+ xmlhttp.responseText);
 	    document.getElementById("loginStatus").innerHTML = xmlhttp.responseText;
        }
    }
    alert(' start');

    xmlhttp.open("POST", "http://121.40.94.102/service/login1.php", true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    alert("login_username="+u+"&login_password="+p);   
    xmlhttp.send("login_username="+u+"&login_password="+p);
    xmlhttp.send(); 
}
