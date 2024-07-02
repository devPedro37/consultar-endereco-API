function inserirDadosApi(){
    cep.onkeyup = () =>{ //ESTA AÇÃO LÊ QUANDO É PARADO DE DIGITAR
        if(cep.value.length == 8){//VERIFICA O TAMANHO DO VALOR DIGITADO EM cep
            fetch(`https://viacep.com.br/ws/${cep.value}/json/`) //SOLICITAMOS PARA O FETCH CONSUMIR OS DADOS DA API
            .then(reposta => reposta.json())//TRATAMOS A RESPOSTA VINDO DA API PELO FETCH E TRANSFORMAMOS EM JSON
            .then(resposta =>{
                rua.value = resposta.logradouro;
                bairro.value = resposta.bairro;
                cidade.value = resposta.localidade;
                estado.value = resposta.uf;
            })
        }
    }
}