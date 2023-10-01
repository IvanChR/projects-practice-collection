const dataJson = "./data.json";
const summaryCards = document.querySelector(".summary-cards")
fetch(dataJson)
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let obj = data[i]
            let category = obj.category
            let score = obj.score
            let icon = obj.icon

            let div = document.createElement("div")
            let img = document.createElement("img")
            let p = document.createElement("p")
            let span = document.createElement("span")
            let b = document.createElement("b")

            img.src = `${icon}`
            p.textContent = `${category}`
            b.textContent = `${score}`
            span.innerHTML = `<b>${score}</b> / 100`

            div.classList.add("card", `${obj.category.toLowerCase()}`)
            div.appendChild(img)
            div.appendChild(p)
            div.appendChild(span)

            summaryCards.appendChild(div)
        }

    }).catch(error => {
        console.log("Failed to load JSON", error)
    })