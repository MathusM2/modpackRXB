const toolsToRemove = [
    "iron",
    "diamond",
    "golden",
    "netherite"
]



ServerEvents.recipes(event =>{
        let silentGearRecipes = [];
    
        event.forEachRecipe({type: 'silentgear:compound_part'}, recipe => {
            silentGearRecipes.push(recipe.getId().toString())
        })

        silentGearRecipes.forEach((recipeId) =>{
            event.remove({id: `${recipeId}`})
        })

        /*
        toolsToRemove.forEach((tool) =>{
            event.remove({output: `minecraft:${tool}_axe`})
            event.remove({output: `minecraft:${tool}_pickaxe`})
            event.remove({output: `minecraft:${tool}_shovel`})
            event.remove({output: `minecraft:${tool}_sword`})
            event.remove({output: `minecraft:${tool}_hoe`})

        })
        */
    }
)

ServerEvents.customCommand('diamonds', event => {
  event.player.give(Item.of('minecraft:diamond', 64))
})

