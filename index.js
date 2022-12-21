let btn1 = document.querySelectorAll(".btn1")
let result = document.getElementById("res")
let btn2 = document.querySelectorAll(".btn2")
let btn3 = document.querySelectorAll(".btn3")

let calc = "";

Array.from(btn3).forEach((element) => {
        element.classList.add('disabled')
    console.log(element.classList)
})

Array.from(btn1).forEach((element) => {
    element.addEventListener("click", () => {
        calc += element.value
        document.getElementById("calc").value = calc
        console.log(calc)
        if(calc.length>=1){
            Array.from(btn3).forEach((element) => {
                element.classList.remove('disabled')
            })
        }
    })
})

result.addEventListener("click", () => {
    document.getElementById("calc").value = eval(document.getElementById("calc").value)
    console.log(document.getElementById("calc").value)
})

document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("t2").reset()
})

document.getElementById("remove").addEventListener("click", () => {
    calc = calc.slice(0, calc.length - 1)
    document.getElementById("calc").value = calc
})

