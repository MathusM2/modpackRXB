const toolsparts =[
    "rod",
    "tip",
    "grip",
    "binding",
    "lining",
    "cord",
    "pickaxe",
    "dagger",
    "knife",
    "trident",
    "spear",
    "machete",
    "katana",
    "sword",
    "fletching",
    "shovel",
    "axe",
    "paxel",
    "hammer",
    "excavator",
    "saw",
    "hoe",
    "mattock",
    "pospector",
    "shield",
    "slingshot",
    "crossbow",
    "bow",
    "fishing_rod",
    "shears",
    "sickle",
    "helmet",
    "chestplate",
    "leggings",
    "boots",
    "elytra",
    "arrow",
    "ring",
    "bracelet",
]



StartupEvents.registry('item', event => {
    event.create('blueprinttier2')
    .displayName('Blueprint Tier (III)'),
    event.create('blueprinttier3')
    .displayName('Blueprint Tier (IV)')
    
    //partes em blue print:
    toolsparts.forEach((part) =>{
    event.create(`${part}_blueprinttier2`)
    .displayName(`Tool ${part} Blueprint (II)`).texture('layer0','kubejs:item/blueprinttier2').texture('layer1',`kubejs:item/blueprint_${part}`)
    event.create(`${part}_blueprinttier3`)
    .displayName(`Tool ${part} Blueprint (II)`).texture('layer0','kubejs:item/blueprinttier3').texture('layer1',`kubejs:item/blueprint_${part}`)

})
})