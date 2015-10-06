<?php
/**
 * Created by PhpStorm.
 * User: bowen
 * Date: 1/10/2015
 * Time: 8:03 PM
 */



$servername = "localhost:3306";
$username = "root";
$password = "";
// Create connection
$conn = new mysqli($servername, $username, $password);


$db = mysqli_select_db($conn,"sleep_data");

$sql = "UPDATE sleep_data.accelerometer_data SET xdata='z';";
$sql .= "UPDATE sleep_data.accelerometer_data SET ydata='b';";
$sql .= "UPDATE sleep_data.accelerometer_data SET zdata='c'";
//$result = mysqli_query($conn,"SELECT password FROM patient_data.admin WHERE assessor = '$assessor'" );

if (mysqli_multi_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



mysqli_close($conn);

