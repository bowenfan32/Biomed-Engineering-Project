<?php

$servername = "localhost:3306";
$username = "root";
$password = "";

$loginName = $_POST['loginName'];

// Create connection
$conn = new mysqli($servername, $username, $password);

$db = mysqli_select_db($conn, "patient_data");
$result = mysqli_query($conn, "select * from patient_data.patientdata where PatientName IN (select PatientName from patient_data.usertable where assessor = '$loginName')");
while ($row = mysqli_fetch_assoc($result)) {
    $output[] = $row;
}

print(json_encode($output));

mysqli_close($conn);
