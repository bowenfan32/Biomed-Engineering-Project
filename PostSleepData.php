<?php
/**
 * Created by PhpStorm.
 * User: bowen
 * Date: 30/09/2015
 * Time: 8:37 PM
 */



$servername = "localhost:3306";
$username = "root";
$password = "";


//$assessor = $_POST['loginName'];

//$adminPassword = $_POST['password'];

$xdata = $_POST['xdata'];
$ydata = $_POST['ydata'];
$zdata = $_POST['zdata'];


// Create connection
$conn = new mysqli($servername, $username, $password);


$db = mysqli_select_db($conn,"sleep_data");

$sql = "UPDATE sleep_data.accelerometer_data SET xdata='$xdata';";
$sql .= "UPDATE sleep_data.accelerometer_data SET ydata='$ydata';";
$sql .= "UPDATE sleep_data.accelerometer_data SET zdata='$zdata'";
//$result = mysqli_query($conn,"SELECT password FROM patient_data.admin WHERE assessor = '$assessor'" );

if (mysqli_multi_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



mysqli_close($conn);