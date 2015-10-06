<?php

	session_start();
	
	 //$nowtime = GetNow();
	//$userid  = $_SESSION['UserId'];
	//$sqlQuery = "UPDATE `users` SET `lastAccessTime` = '$nowtime' WHERE `users`.`userid` = '$userid' LIMIT 1;";
				
	//$sqlOutput = mysql_query($sqlQuery, SqlLink($_SESSION['sqlLink']));
	
	//if (!$sqlOutput){
	//	die(mysql_error().'Could not update the HealthUser22!');
	//}	
	
	@mysql_close($_SESSION['sqllink']);
	
	session_unset();
	session_destroy();
	
	header('Location: loginTest.html');
  
?>
