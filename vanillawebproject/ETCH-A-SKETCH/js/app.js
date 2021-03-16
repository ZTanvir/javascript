const btnVal = document.querySelector(".btn")
btnVal.addEventListener("click", function () {
    const containerEl = document.querySelector(".container")

    containerEl.textContent = ""

    let x = prompt("Enter number between 1-100")
    if (x > 0 & x < 101) {
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < x; j++) {

                const createDiv = document.createElement("div")
                containerEl.appendChild(createDiv)

            }

        }
        //random color
        function randomFun() {
            let clr = Math.floor(Math.random() * 255);
            return clr
        }

        const divEl = document.querySelectorAll("div>div")
        divEl.forEach(item => {
            item.addEventListener("mouseover", function () {
                let clr = "rgb" + "(" + randomFun() + "," + randomFun() + "," + randomFun() + ")"
                item.style.backgroundColor = clr

            })
        })
    }
    else {
        alert("Enter valid number")
    }

})
