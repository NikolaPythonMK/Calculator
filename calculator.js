let inputButton = document.getElementsByClassName("input")
let output = document.getElementById("output");
let resultButton = document.getElementById("equal");
let clearButton = document.getElementById("clear")


for(let i = 0; i < inputButton.length; i++)
{
    inputButton[i].addEventListener("click", function(){
        console.log(inputButton[i].textContent)
        output.textContent += inputButton[i].textContent
    });
}

resultButton.addEventListener("click", function(){
    output.textContent = eval(output.textContent);
})

clearButton.addEventListener("click", function(){
    output.textContent = 0;
})