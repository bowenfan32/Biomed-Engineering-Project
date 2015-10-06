<?php

$servername = "localhost:3306";
$username = "root";
$password = "";


$assessor = $_POST['loginName'];

//$adminPassword = $_POST['password'];


// Create connection
$conn = new mysqli($servername, $username, $password);


$db = mysqli_select_db($conn,"patient_data");
$result = mysqli_query($conn,"SELECT password FROM patient_data.admin WHERE assessor = '$assessor'" );

while ($row=mysqli_fetch_assoc($result)){
    $output[]=$row;

}
/*if ($sqlData[0] == $password) {

    echo 'Login_successful';
}*/

print(json_encode($output));



mysqli_close($conn);