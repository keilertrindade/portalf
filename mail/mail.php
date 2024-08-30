<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtenha os dados do formulário
    $senderName = $_POST['name'];
    $senderMail = $_POST['email'];
    $senderPhone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    

    // Dados a serem enviados para a API
    $data = [
        'senderName' => $senderName,
        'senderMail' => $senderMail,
        'senderPhone' => $senderPhone,
        'subject' => $subject,
        'message' => $message,
        
    ];

    // URL da API
    $url = 'http://localhost:5220/fale-conosco';

    // Inicie o cURL
    $ch = curl_init($url);

    // Configurações do cURL
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json'
    ]);

    // Executa a requisição e obtém a resposta
    $response = curl_exec($ch);

    // Verifica se houve algum erro
    if ($response === false) {
        echo 'Erro ao enviar dados: ' . curl_error($ch);
    } else {
        echo 'Resposta da API: ' . $response;
    }

    // Fecha a conexão cURL
    curl_close($ch);
} else {
    echo 'Método inválido.';
}
?>
