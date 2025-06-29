const toolsParts =[
    "pickaxe",
    "shovel",
    "axe",
    "hoe",
    "hammer",
    "paxel",
    "prospector_hammer",
    "mattock",
]


ServerEvents.recipes(event => {
    //Tier II or Iron
    //Added tools head parts of silentgear mod
    event.shapeless(Item.of('silentgear:hammer_head', 1), ['silentgear:hammer_blueprint', '5x minecraft:iron_ingot'])
    event.shapeless(Item.of('silentgear:pickaxe_head', 1), ['silentgear:pickaxe_blueprint', '3x minecraft:iron_ingot'])
    event.shapeless(Item.of('silentgear:axe_head', 1), ['silentgear:axe_blueprint', '3x minecraft:iron_ingot']) 
    event.shapeless(Item.of('silentgear:hoe_head', 1), ['silentgear:hoe_blueprint', '2x minecraft:iron_ingot']) 
    event.shapeless(Item.of('silentgear:paxel_head', 1), ['silentgear:paxel_blueprint', '5x minecraft:iron_ingot']) 
    event.shapeless(Item.of('silentgear:mattock_head', 1), ['silentgear:mattock_blueprint', '4x minecraft:iron_ingot']) 
    event.shapeless(Item.of('silentgear:shovel_head', 1), ['silentgear:shovel_blueprint', '1x minecraft:iron_ingot']) 
    event.shapeless(Item.of('silentgear:prospector_hammer_head', 1), ['silentgear:prospector_hammer_blueprint', '2x minecraft:iron_ingot'])
    event.shapeless(Item.of('silentgear:rod', 1), ['silentgear:rod_blueprint', '2x minecraft:stick'])
    
    //Added equipment parts of silentgear mod
    event.shaped(Item.of('silentgear:helmet_plates', 1), ['ABB', 'BBB'], {A:'silentgear:helmet_blueprint', B:'minecraft:iron_ingot'}) 
    event.shaped(Item.of('silentgear:chestplate_plates', 1), ['ABB', 'BBB', 'BBB'], {A:'silentgear:chestplate_blueprint', B:'minecraft:iron_ingot'}) 
    event.shaped(Item.of('silentgear:legging_plates', 1), ['ABB', 'BBB', 'B B'], {A:'silentgear:leggings_blueprint', B:'minecraft:iron_ingot'}) 
    event.shaped(Item.of('silentgear:boot_plates', 1), ['ABB', 'BB '], {A:'silentgear:boots_blueprint', B:'minecraft:iron_ingot'}) 
})  