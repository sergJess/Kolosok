<?php 
if(isset($_POST) ){
    $to = "info@pavelkolosok.ru";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $message = "Автор:" . $name . "\r\n" ."текст сообщения:" . $_POST['message'];
    $header = 'сообщение с сайта';
    $headers = "From:" . $from;
    mail($to, $from, $message, $headers);
}
?>