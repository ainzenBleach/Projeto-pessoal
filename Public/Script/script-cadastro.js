   
function cadastrar(){
    var nome = input_nome.value
    var senha = input_senha.value
    var senha_confirmada = input_senha_confirmada.value
    var continente = select_continente.value
    var cargo = select_cargo.value
    var mensagem = ``

    var nome_caractere = nome.length
    var senha_caractere = senha.length

    if(nome_caractere < 1){
        mensagem = `<span>Nome muito pequeno</span>`
    }else if(senha_caractere < 8){
        mensagem = `<span>A senha deve ter mais 8 caractere</span>`
    }else if(senha != senha_confirmada){
        mensagem = `<span>As senhas devem ser iguais</span>`
    }else if(continente == '#'){
        mensagem = `<span>Escolha um continente</span>`
    }else if(cargo == "#"){
        mensagem = `<span>Escolha um cargo</span>`
    }

    aviso.innerHTML = mensagem
}