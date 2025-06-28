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
    "prospector_hammer",
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
    "coating"
]

JEIEvents.hideItems(event => {
   toolsparts.forEach((part) =>{
   event.hide(`silentgear:${part}_template`)
  })
})