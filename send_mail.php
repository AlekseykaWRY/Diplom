<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $service = htmlspecialchars($_POST['service']);

    // Адрес электронной почты, на который будет отправлено письмо
    $to = "aabilev7@gmail.com"; // Замените на ваш email
    // Тема письма
    $subject = "Новая заявка с сайта";

    // Текст письма
    $message = "Имя: $name\n";
    $message .= "Номер телефона: $phone\n";
    $message .= "Услуга: $service\n";

    // Заголовки письма
    $headers = "From: aabilev7@gmail.com\r\n"; // Замените на ваш домен
    $headers .= "Reply-To: $to\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение отправлено успешно!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>
