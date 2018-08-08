<?php
define("company", "Test");
$file = isset($_GET["file"]) ? $_GET["file"] : "home";
include("templates/index.html");
?>