function logar(){

    gmail = document.getElementById('gmail').value;
    Senha = document.getElementById('senha').value;
    console.log(gmail)



    if (gmail == "eduardode@gmail.com" && Senha === "verde"){
        alert('seja bem vindo')
        location.href="https://www.instagram.com/duduh_dev/";
        
        
    }else{
        alert('erro')
    }
}