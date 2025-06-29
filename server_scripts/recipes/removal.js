const toolsToRemove = [
    "iron",
    "diamond",
    "golden",
    "netherite"
]



ServerEvents.recipes(event =>{
 HEAD
        let silentGearRecipes = [];
    
        event.forEachRecipe({type: 'silentgear:compound_part'}, recipe => {
            silentGearRecipes.push(recipe.getId().toString())
        })

    toolsToRemove.forEach((tool) =>{
    event.remove({output: `minecraft:${tool}_axe`})
    event.remove({output: `minecraft:${tool}_pickaxe`})
    event.remove({output: `minecraft:${tool}_shovel`})
    event.remove({output: `minecraft:${tool}_sword`})
    event.remove({output: `minecraft:${tool}_hoe`})

})}
)
>>>>>>> e636b01112143e1203529804b96b64d54530a277

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

