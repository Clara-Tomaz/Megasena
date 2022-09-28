const botaoSortear = document.querySelector("div.box button")
var numeroSorteado = document.querySelector("div.box h1")
var roleta = []

for (i=0;i<99;i++){
    roleta.push(i)
}

botãoSortear.addEventListener("click",() => {
    numeroSorteado.innerHTML = " O número sorteado é:" + roleta[Math.floor(Math.random()*8 + 1 *roleta.length)]

})