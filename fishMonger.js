const { boatInventory } = require("./fishingBoat.js")

const fishAvailable = boatInventory()

const mongerInventory = (chefBudget) => {
    let mongerPurchases = fishAvailable
        .filter(fish => fish.price <= 7.50 && fish.amount >= 10)

    let fishForChef = JSON.parse(JSON.stringify(mongerPurchases))
         .filter(fish => fish.price <= chefBudget)
    
    fishForChef.forEach(fish => {
        fish.amount = 5
    })

    return fishForChef
}

module.exports = { mongerInventory }