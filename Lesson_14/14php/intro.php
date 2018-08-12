<?php
// print_r($_GET);
print_r($_POST);
$tel = $_POST["tel"];
$user_name = "Admin";
$title = "PHP lesson";
// print $user_name;
$subjects = array(

"frontend" => 3000,
"php" => 3500,
"java" => 2500

);
include("intro-template.html");


/* "Hello, $user_name!"
'Hello, $name!' 'Hello, '.$name.'!' 
'Hello, $user_name!' 'Hello, '.$user_name.'!'  */

?>
