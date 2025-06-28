const toolsToRemove = [
    "iron",
    "diamond",
    "golden",
    "netherite"
]


ServerEvents.recipes(event =>{
    toolsToRemove.forEach((tool) =>{
    event.remove({output: `minecraft:${tool}_axe`})
    event.remove({output: `minecraft:${tool}_pickaxe`})
    event.remove({output: `minecraft:${tool}_shovel`})
    event.remove({output: `minecraft:${tool}_sword`})
    event.remove({output: `minecraft:${tool}_hoe`})
})
}

)

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.customCommand('diamonds', event => {
  event.player.give(Item.of('minecraft:diamond', 64))
})

