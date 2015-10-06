<?php

$servername = "localhost:3306";
$username = "root";
$password = "";

session_start();
$assessor = $_SESSION["username"];

// Create connection
$conn = new mysqli($servername, $username, $password);

$db = mysqli_select_db($conn, "patient_data");
$result = mysqli_query($conn, "select PatientName from patient_data.usertable WHERE assessor= '$assessor' ");

//while ($row = mysqli_fetch_assoc($result)) {
////    $output[] = $row;
//
//
//
//    print($row['PatientName'] . "<br>");
//
//}

?>

<html>
<head></head>
<body>

<?php while ($row = mysqli_fetch_assoc($result)): ?>
<!--   <button onclick="getUsername()" id="usernamep">  --><?php //print($row['PatientName']); ?><!-- </button>-->
    <input type="radio" value="<?php print($row['PatientName']); ?>" name="patientname" id="hand"><?php print($row['PatientName']); ?>
<?php endwhile; ?> <br>

</body>
</html>



<?php mysqli_close($conn); ?>


