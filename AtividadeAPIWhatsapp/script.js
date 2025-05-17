function enviarMensagem (event) {
    const nome = document.getElementById("nome").value;
    const numero  = document.getElementById("numero").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome == "" || numero == "" || mensagem == "") {
        alert("Alguns dos campos não foram preenchidos.")
        return;
    }else if (numero.length !== 11) {
        alert("Por favor, insira um número de telefone válido com DDD (11 dígitos).");
        return;
    }

    

    const texto = `Olá, meu nome é ${nome}.                                                                                                                                                                                                     ${mensagem}`;
    const link = `https://api.whatsapp.com/send?phone=55${numero}&text=${texto}`;
    
    
    window.open(link);

}