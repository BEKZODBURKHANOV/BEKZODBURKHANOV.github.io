<?php


$name = $_POST['user_name'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];
$token = "5390654683:AAHWTUSeZhFFlSucTa8v1DulmTp0ZKwCi48";
$chat_id = "-796239881";
$arr = array(
'Имя пользователя :' => $name,
'Email :' => $email,
'Сообщения :' => $message
);
foreach($arr as $key => $value){
    $txt .= "<b>".$key."</b>".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendmessage?chat_id={$chat_id}
    &parse_mode=html&text={$txt}","r");
if($sendToTelegram){
    echo '<h1 class=""success>Спасибо за отправку вашего сообщения!</h1>';
    return true;

}else{
    echo 'Ошибка';
}
?>