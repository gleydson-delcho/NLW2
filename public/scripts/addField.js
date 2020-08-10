// Função criar botão horário
const newTime = document.getElementById("add-time");

newTime.addEventListener('click', cloneField = () => {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    const fields = newFieldContainer.querySelectorAll('input');
    const boxTime = document.getElementById('schedule-items');
    boxTime.appendChild(newFieldContainer);

    fields.forEach(field => field.value="");    
});
// Quando clicar no botão


// Executar uma ação
// function cloneField() {
    // Duplicar campos
//     const fields = document.querySelector('.schedule-item').cloneNode(true)
    // Colocar na página
//     document.querySelector('#schedule-items').appendChild(fields)
// }
    

    