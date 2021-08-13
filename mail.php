<?php 
if(isset($_POST) ){
    $to = "s.sudakov@lancronix.ru";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];
    $header = 'сообщение с сайта';
    $headers = "From:" . $from;
    mail($to, $from, $message, $headers);
}
?>