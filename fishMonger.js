const { boatInventory } = require("./fishingBoat.js")

const fishAvailable = boatInventory()

const mongerInventory = (chefBudget) => {
    let mongerPurchases = []
    for (let i = 0; i < fishAvailable.length; ++i) {
        let fish = fishAvailable[i]
        if (fish.price <= 7.50) {
            mongerPurchases.push(fish)
            let j = mongerPurchases.length-1
            if(fish.amount < 10) {
                mongerPurchases[j].amount = fish.amount
            } else {
                mongerPurchases[j].amount = 10
            }
        }
    }

    const fishForChef = []
    for(let mongerPurchase of mongerPurchases) {
        if(mongerPurchase.price <= chefBudget) {
            let fishAmount = mongerPurchase.amount / 2
            mongerPurchase.amount = Math.round(fishAmount)

            fishForChef.push(mongerPurchase)
        }
    }
    return fishForChef
}

module.exports = { mongerInventory }