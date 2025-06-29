<?php
//Permite peticiones desde React en localhost:3000, desde xampp
//header("Access-Control-Allow-Origin: http://localhost:3000");

//Importamos configuración con usuario y contraseña del email (desde archivo externo)
$config = include __DIR__ . '/../config.php';

// Responder preflight OPTIONS con headers
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    //Para que funcione la página se aceptara
    header("Access-Control-Allow-Origin: https://garimatejnanis.infinityfreeapp.com/contact");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Credentials: true");  
}

//Si la petición es de tipo OPTIONS (preflight), respondemos con 200 OK y salimos
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

//Cargamos las clases necesarias de PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//Indicamos que la respuesta será en formato JSON
header("Content-Type: application/json");

//Recibimos los datos enviados desde React en formato JSON
$data = json_decode(file_get_contents("php://input"));

//Validamos que los campos no estén vacíos
if (!$data || empty($data->name) || empty($data->email) || empty($data->phone) || empty($data->message)) {
    echo json_encode(["success" => false, "message" => "Form Incomplete"]);
    exit;
}

//Creamos el objeto PHPMailer
$mail = new PHPMailer(true);

try {
    //Configuración del servidor SMTP de Gmail
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $config['username']; // Tu correo Gmail
    $mail->Password = $config['password']; // Contraseña o app password
    $mail->SMTPSecure = 'tls'; // Encriptación TLS
    $mail->Port = 587; // Puerto para TLS

    //Remitente y destinatario
    $mail->setFrom('garimatejnani@gmail.com', 'Garima Web Contact'); // Quién envía el mensaje
    $mail->addAddress('garimatejnani@gmail.com', 'Your Name'); // A quién llega el mensaje
    $mail->addReplyTo($data->email, $data->name); // A qué dirección se responde si el destinatario hace clic en "responder"

    //Asunto del correo
    $mail->Subject = "Message from Contact Form - Garima Space";
    //$mail->Phone = $data->phone;
    //Cuerpo del mensaje
    $mail->Body = "Name: {$data->name}\nEmail: {$data->email}\nPhone: {$data->phone}\n\nMessage:\n{$data->message}";

    //Enviamos el mensaje
    $mail->send();

    //Respondemos con mensaje de éxito
    echo json_encode([
        'success' => true, 
        'message' => 'The email has been sent successfully.', 
        'color' => '#1B5E20'
    ]);
} catch (Exception $e) {
    //En caso de error, respondemos con el mensaje del error
    echo json_encode([
        'success' => false, 
        'message' => 'Something went wrong. Please try again: ' . $mail->ErrorInfo, 
        'color' => '#D50000'
    ]);
}
?>
