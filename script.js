let btn = document.querySelector("#btn")
let inputs = document.querySelector("#text-input")
let text = document.querySelector(".text")

btn.addEventListener('click', ()=>{
    if(inputs.value == "")
        {
            alert("Enter the task please!")
        }
        else
        {
            let newElement = document.createElement("p");
            newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
            text.appendChild(newElement);
            inputs.value= "";
            newElement.querySelector("i").addEventListener("click",()=>{
                newElement.remove();
            })
        }
})

