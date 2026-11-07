// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//     paragrafo.innerText = "Deu bom!"
//     paragrafo.style.color = "white"
//     alert("Deu certooo!!")
// })

// Crie um parágrafo com um ID e um botão.
// Quando o botão for clicado, o texto do parágrafo 
// deve ser alterado para:
// "Texto alterado com sucesso!"


// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")
// const img = document.getElementById("img")

// btn.addEventListener("mouseo", function(){
//     paragrafo.innerText = "Texto alterado com sucesso!"
//     img.src = "https://www.estadao.com.br/resizer/v2/B32SYPZY6NOHZE6GRKJPUFQUTE.jpg?quality=80&auth=2ac6ab1300b91ef01ae0925dc50fbd0e1fe4ec4739402bec73e11a8ba1b7ec45&width=1200"
// })

document.addEventListener("keydown", function(e){
    if(e.key === "r"){
        document.body.style.backgroundColor = "red"        
    } else if(e.key === "g"){
        document.body.style.backgroundColor = "green"
    } else if(e.key === "b"){
        document.body.style.backgroundColor = "blue"
    }
})

