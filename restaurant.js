const { mongerInventory } = require("./fishMonger.js")

const fishMenu = (chefBudget) => {

let inventory = mongerInventory(chefBudget)

let html = `<h1>Menu</h1>\n`

for (let item of inventory) {
    html += `<article class="menu">
<h2>${item.species}</h2>
    <section class="menu__item">${item.species} Soup</section>
    <section class="menu__item">${item.species} Sandwich</section>
    <section class="menu__item">Grilled ${item.species}</section>
</article>`
}

return html
}

module.exports = {fishMenu}