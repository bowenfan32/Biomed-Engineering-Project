<?php
/**
 * Created by PhpStorm.
 * User: bowen
 * Date: 3/10/2015
 * Time: 1:17 AM
 */
$target_path  = "./";
$target_path = $target_path . basename( $_FILES['uploadedfile']['name']);
if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target_path))
{
    echo "The file ".  basename( $_FILES['uploadedfile']['name']).
        " has been uploaded";
}
else
{
    echo "There was an error uploading the file, please try again!";
}
?>;