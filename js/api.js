async function sendContactForm(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const formData = {
        SenderName: document.getElementById('senderName').value,
        SenderMail: document.getElementById('senderMail').value,
        SenderPhone: document.getElementById('senderPhone').value,
        Subject: document.getElementById('subject').value,
        Message: document.getElementById('message').value
    };

    try {
        // Envia os dados para a API usando POST
        const response = await fetch('http://localhost:5220/fale-conosco', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Verifica se a resposta foi bem-sucedida
        if (response.ok) {
            const result = await response.json();
            alert('Mensagem enviada com sucesso!');
            console.log(result); // Mostra a resposta da API no console
        } else {
            alert('Ocorreu um erro ao enviar a mensagem.');
            console.error('Erro:', response.statusText);
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar a mensagem.');
    }
}