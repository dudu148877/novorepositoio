
           
                function logar(){

                    var login = document.getElementById('login').value;
                    var senha = document.getElementById('senha').value;
                    
                       console.log(login);
                    
                    
                    
                    if (login == "eduardosouza77" && senha == "198023passowrd"){
                    alert('Olá, seja bem vindo (a)')
                    location.href = "curriculo.html";
                    
                    }else{
                        alert('usuario ou senha incorreto');
                    }
                    }
