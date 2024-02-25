const inputSearch = document.querySelector(".search") 
const btnSearch = document.querySelector(".btn-search")
const teste = document.querySelector(".teste")

const apiKey = "5bc50a772dfb4d70a62bfc7f8f7e7ab1"




const getRecipe = async function (recipe) {
    const recipeApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=5bc50a772dfb4d70a62bfc7f8f7e7ab1&query=${recipe}`

    const res = await fetch (recipeApi)
    const data = await res.json()

    return data
}

const showRecipe = async (recipe) => {
    const data = await getRecipe(recipe)

// Limpa o conteúdo atual
const teste = document.querySelector(".teste")
teste.innerHTML = ""

// Verifica se há resultados
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
    })
} else {
    console.log("Nenhum resultado encontrado.")
}

console.log(data)
}


btnSearch.addEventListener("click", function () {
    
    const receita = inputSearch.value
    showRecipe(receita)
})





