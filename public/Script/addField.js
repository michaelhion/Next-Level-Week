//Procura o botão
document.querySelector("#add-time")
//Escuta o evento de click no botão
.addEventListener('click',cloneField);
//Executa uma ação 
function cloneField(){
    //Duplica os campos 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    
    const fields = newFieldContainer.querySelectorAll('input');

    fields.forEach(function(field){
        //loop para limpar os inputs. Devo pegar o valor passado no PARAMETRO para limpar o value
        field.value = "";
    });

    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}