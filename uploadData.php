<?php


$table1 = $_POST['table1'];
$table2 = $_POST['table2'];
$pinch = $_POST['pinch'];
$hand = $_POST['hand'];
$score = $_POST['score'];
$loginname = $_POST['patientname'];

session_start();
//$loginname = $_SESSION["username"];

echo $_SESSION["username"];

$servername = "localhost:3306";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";


$db = mysqli_select_db($conn, "patient_data");

// insert data
if ($hand === "left") {
    $sql = "UPDATE patient_data.patientdata SET rawdata='$table1,  $pinch' WHERE PatientName='$loginname';";
    $sql .= "UPDATE patient_data.patientdata SET rawdata2='$table2,  $pinch' WHERE PatientName='$loginname';";
    $sql .= "UPDATE patient_data.patientdata SET testtime=now() WHERE PatientName='$loginname';";
    $sql .= "UPDATE patient_data.patientdata SET score1= '$score' WHERE PatientName = '$loginname'";
}
if ($hand === "right") {
    $sql = "UPDATE patient_data.patientdata SET rawdata3='$table1,  $pinch' WHERE PatientName='$loginname';";
    $sql .= "UPDATE patient_data.patientdata SET rawdata4='$table2, $pinch' WHERE PatientName='$loginname';";
    $sql .= "UPDATE patient_data.patientdata SET testtime=now() WHERE PatientName='$loginname';";
    $sql .= "UPDATE patient_data.patientdata SET score2= '$score' WHERE PatientName= '$loginname'";
}

/*$sql = "INSERT INTO patient_data.patientdata (rawdata) WHERE username=$loginname
VALUES ('$table1')";*/

if (mysqli_multi_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

