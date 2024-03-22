const inputSearch = document.querySelector(".search") 
const btnSearch = document.querySelector(".btn-search")
const teste = document.querySelector(".teste")
const devsFav = document.querySelector(".control")

const apiKey = "5bc50a772dfb4d70a62bfc7f8f7e7ab1"




const getRecipe = async function (recipe) {
    const recipeApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=5bc50a772dfb4d70a62bfc7f8f7e7ab1&query=${recipe}`

    const res = await fetch (recipeApi)
    const data = await res.json()

    return data
}

const showRecipe = async (recipe) => {
    const data = await getRecipe(recipe)


const teste = document.querySelector(".teste")
teste.innerHTML = ""


if (data.results && data.results.length > 0) {
    data.results.forEach(async item => {
        const urlRecipe = `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${apiKey}`
        const res = await fetch(urlRecipe)
        const dataRecipe = await res.json()
        console.log(dataRecipe)


        const a = document.createElement("a")
        a.href = dataRecipe.sourceUrl
        a.target = "_blank"
        a.classList.add("recipe-item")

        const img = document.createElement("img")
        img.src = item.image
        img.alt = item.title
        a.appendChild(img)

        const name = document.createElement("h3")
        name.textContent = item.title
        a.appendChild(name)

        const btn = document.createElement("button")
        btn.textContent = "Click aqui para ver a receita"
        btn.classList.add("btn-link")
        a.appendChild(btn)


        teste.appendChild(a)
        devsFav.classList.add ("hide")
    })
} else {
    alert("Nenhuma receita encontrada, tente outra receita.")
}

console.log(data)
}


btnSearch.addEventListener("click", function () {
    
    const receita = inputSearch.value
    showRecipe(receita)
})

inputSearch.addEventListener("keyup", (e) => {
    if (e.code === "Enter"){
    const receita = inputSearch.value
    showRecipe(receita)
    }
  })

  const imgs = document.querySelector(".container-img")
  const img = document.querySelectorAll("#img img")

  let idX = 0
  let position = 1200

  function carrossel () {
    idX++

    if (idX > img.length - 1 ) {
        idX = 0
        position = 1200
    } else {
        position -= 800
    }

    

    imgs.style.transform = `translateX(${position}px)`
    console.log(idX)
  }

  setInterval(carrossel, 4000)







