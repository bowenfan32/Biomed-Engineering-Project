<?php

if (count($_POST)>0) {
    //check login information
    $username = $_POST['login_username'];
    $password = $_POST['login_password'];
    //$remember = $_POST['login_remember'];
    //$username='admin';
    //$password='Nimda';

    $sqlLnk  = new mysqli("localhost:3306", "root", "");
    $db = mysqli_select_db($sqlLnk,"patient_data");
    if ($sqlLnk->connect_error) {
        //   echo 'Could not connect to sql: ' . mysql_error();
        die("Connection failed: " . $sqlLnk->connect_error);
    } elseif (!mysqli_select_db($sqlLnk, "patient_data")){

        echo 'Database_not_found';
    } else {
        $sqlQuery = "SELECT password FROM admin WHERE assessor='$username'";
        $sqlResult= mysqli_query( $sqlLnk, $sqlQuery);
//        $sqlData = mysqli_fetch_row($sqlOutput);
        $sqlData=mysqli_fetch_row( $sqlResult);
        if ($sqlData[0] === $password) {
            //   session starts
            //   keep username
            session_start();
            $_SESSION['username'] = $username;
            $_SESSION['sqlLink'] = $sqlLnk;
            echo 'Login_successful';
        } else {
            echo 'Login_failed_wrong_password';

        }
    }

} else {
    session_start();
    $_SESSION["username"] = "johnfang";
    echo 'Post_error';
}

?>
