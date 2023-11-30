const optionMenu = document.querySelector(".select-menu")
const selectBtn = document.querySelector(".select-btn")
const options = document.querySelectorAll(".option")
const sBtn = document.querySelector(".sBtn-text")
const optionHehe = document.querySelector(".options")

selectBtn.addEventListener("click" , function(){
    optionHehe.classList.toggle("hidden")
})

options.forEach(pilihan => {
    pilihan.addEventListener("click" , () =>{
        let selectedOption = pilihan.querySelector(".option-text").innerText
        sBtn.innerText = selectedOption
        console.log(selectedOption)
    })
    console.log(Option)
})