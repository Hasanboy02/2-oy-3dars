const themeInput = document.querySelector("#theme__checkbox")
const themeBtn = document.querySelector("#theme__btn")

themeBtn.addEventListener("click", function ()) {
    if (themeInput.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        themeBtn.textContent = "light Theme"
    } else{
        document.documentElement.setAttribute("data-theme", "light");
        console.log(themeBtn.textContent);
        themeBtn.textContent = "Dark Theme"
    }
}