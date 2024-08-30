import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm'

async function sendContactForm(event) {
   event.preventDefault(); //  Evita o envio padrão do formulário

    // Captura os dados do formulário
    const formData = {
        SenderName: document.getElementById('senderName').value,
        SenderMail: document.getElementById('senderMail').value,
        SenderPhone: document.getElementById('senderPhone').value,
        Subject: document.getElementById('subject').value,
        Message: document.getElementById('message').value
    };

    //alert();
    console.log(formData);

    const endpoint = 'http://localhost:5220/fale-conosco';

    try {
        // Envia os dados para a API usando POST
        const response = await axios.post(endpoint, formData, {
            headers: {
                'Content-Type': 'application/json'                
            }
        });

        // Verifica se a resposta foi bem-sucedida
        alert('Mensagem enviada com sucesso! Retornaremos o mais rápido possível.');
        console.log(response.data); // Mostra a resposta da API no console
        window.location.href = "index.html";
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar a mensagem.');
    }
}

function testGetRequest() {
    //event.preventDefault();
    // URL do seu endpoint
    var url = "http://localhost:5220/fale-conosco/ObterTodos"; // Substitua pela URL correta

    //Fazendo a requisição GET usando axios
    axios.get(url)
        .then(function (response) {
            // Sucesso: exibe o objeto de resposta no console
            alert("ok");
            console.log(response.data);
        })
        .catch(function (error) {
            // Erro: exibe a mensagem de erro no console
            alert("error");
            console.error("Erro na requisição:", error);
        });


}


async function registerMailToNewsletter(event){
    event.preventDefault();

    // Captura os dados do formulário
    
    const endpoint = 'http://localhost:5220/newsletter';

    const formData = {
        Mail: document.getElementById('mailNewsletter').value
    };

    
    console.log(formData);
    alert();
    try {
        // Envia os dados para a API usando POST
        const response = await axios.post(endpoint, formData, {
            headers: {
                'Content-Type': 'application/json'                
            }
        });

        // Verifica se a resposta foi bem-sucedida
        alert('Mensagem enviada com sucesso!');
        console.log(response.data); // Mostra a resposta da API no console
        
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar a mensagem.');
    }
}

async function registerMailToNewsletterBlock(event){
    event.preventDefault();

    // Captura os dados do formulário
    
    const endpoint = 'http://localhost:5220/newsletter';

    const formData = {
        Mail: document.getElementById('mailNewsletterBlock').value
    };

    
    console.log(formData);
    alert();
    try {
        // Envia os dados para a API usando POST
        const response = await axios.post(endpoint, formData, {
            headers: {
                'Content-Type': 'application/json'                
            }
        });

        // Verifica se a resposta foi bem-sucedida
        alert('Mensagem enviada com sucesso!');
        console.log(response.data); // Mostra a resposta da API no console
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar a mensagem.');
    }
}




window.testGetRequest = testGetRequest;
window.sendContactForm = sendContactForm;
window.registerMailToNewsletter = registerMailToNewsletter;
window.registerMailToNewsletterBlock = registerMailToNewsletterBlock;
