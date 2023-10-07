
document.getElementById("questionarioform").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão de submit do formulário

  
    var respostas = {};

   
    var campos = document.querySelectorAll('input[type="text"]');

    
    campos.forEach(function (campo) {
        respostas[campo.id] = campo.value;
    });

    var respostasJSON = JSON.stringify(respostas);

    
    fetch('servidor', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: respostasJSON,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respostas enviadas com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro ao enviar respostas:', error);
    });
});
