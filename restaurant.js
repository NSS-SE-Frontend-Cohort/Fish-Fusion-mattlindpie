const { mongerInventory } = require("./fishMonger.js")

const fishMenu = (chefBudget) => {

let inventory = mongerInventory(chefBudget)

const menuItems = inventory.map(item => 
'<article class="menu">\n' +
'<h2>' + item.species + '</h2>\n' +
    '<section class="menu__item">' + item.species + ' Soup</section>\n' +
    '<section class="menu__item">' + item.species + ' Sandwich</section>\n' +
    '<section class="menu__item">Grilled ' + item.species + '</section>\n' +
'</article>\n'   
)

const html = '<h1>Menu</h1> \n' + menuItems.join('')
return html
}

module.exports = {fishMenu}