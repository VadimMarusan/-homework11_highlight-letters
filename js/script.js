let btn = document.querySelectorAll(".btn");
console.log(btn);

function keyPress() {
    document.addEventListener("keypress", (event) => {
        btn.forEach(element => {
            event.key === element.textContent || event.key === (element.textContent).toLowerCase() ? element.style.backgroundColor = "blue": element.style.backgroundColor = "#000";
        })
    });
}
keyPress();