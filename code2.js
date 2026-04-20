gdjs.Escena2Code = {};
gdjs.Escena2Code.localVariables = [];
gdjs.Escena2Code.idToCallbackMap = new Map();
gdjs.Escena2Code.GDbloqueObjects1= [];
gdjs.Escena2Code.GDbloqueObjects2= [];
gdjs.Escena2Code.GDDino_9595DouxObjects1= [];
gdjs.Escena2Code.GDDino_9595DouxObjects2= [];
gdjs.Escena2Code.GDNewSpriteObjects1= [];
gdjs.Escena2Code.GDNewSpriteObjects2= [];
gdjs.Escena2Code.GDChickenObjects1= [];
gdjs.Escena2Code.GDChickenObjects2= [];
gdjs.Escena2Code.GDBackground_9595Blue_9595DesertObjects1= [];
gdjs.Escena2Code.GDBackground_9595Blue_9595DesertObjects2= [];
gdjs.Escena2Code.GDSummer_9595Tile_9595Water_9595WavesObjects1= [];
gdjs.Escena2Code.GDSummer_9595Tile_9595Water_9595WavesObjects2= [];
gdjs.Escena2Code.GDGrassObjects1= [];
gdjs.Escena2Code.GDGrassObjects2= [];
gdjs.Escena2Code.GDForest_9595BackgroundObjects1= [];
gdjs.Escena2Code.GDForest_9595BackgroundObjects2= [];
gdjs.Escena2Code.GDDoorObjects1= [];
gdjs.Escena2Code.GDDoorObjects2= [];
gdjs.Escena2Code.GDNewSprite2Objects1= [];
gdjs.Escena2Code.GDNewSprite2Objects2= [];
gdjs.Escena2Code.GDFloater_9595enemyObjects1= [];
gdjs.Escena2Code.GDFloater_9595enemyObjects2= [];
gdjs.Escena2Code.GDDino_9595Doux2Objects1= [];
gdjs.Escena2Code.GDDino_9595Doux2Objects2= [];
gdjs.Escena2Code.GDbloque2Objects1= [];
gdjs.Escena2Code.GDbloque2Objects2= [];
gdjs.Escena2Code.GDDino_9595Doux3Objects1= [];
gdjs.Escena2Code.GDDino_9595Doux3Objects2= [];
gdjs.Escena2Code.GDDino_9595Doux4Objects1= [];
gdjs.Escena2Code.GDDino_9595Doux4Objects2= [];
gdjs.Escena2Code.GDCoin_9595GoldObjects1= [];
gdjs.Escena2Code.GDCoin_9595GoldObjects2= [];


gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDDino_95959595DouxObjects1Objects = Hashtable.newFrom({"Dino_Doux": gdjs.Escena2Code.GDDino_9595DouxObjects1});
gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDChickenObjects1Objects = Hashtable.newFrom({"Chicken": gdjs.Escena2Code.GDChickenObjects1});
gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDDino_95959595DouxObjects1Objects = Hashtable.newFrom({"Dino_Doux": gdjs.Escena2Code.GDDino_9595DouxObjects1});
gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Escena2Code.GDDoorObjects1});
gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDFloater_95959595enemyObjects1Objects = Hashtable.newFrom({"Floater_enemy": gdjs.Escena2Code.GDFloater_9595enemyObjects1});
gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDbloqueObjects1Objects = Hashtable.newFrom({"bloque": gdjs.Escena2Code.GDbloqueObjects1});
gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDFloater_95959595enemyObjects1Objects = Hashtable.newFrom({"Floater_enemy": gdjs.Escena2Code.GDFloater_9595enemyObjects1});
gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDDino_95959595DouxObjects1Objects = Hashtable.newFrom({"Dino_Doux": gdjs.Escena2Code.GDDino_9595DouxObjects1});
gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDDino_95959595DouxObjects1Objects = Hashtable.newFrom({"Dino_Doux": gdjs.Escena2Code.GDDino_9595DouxObjects1});
gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDChickenObjects1Objects = Hashtable.newFrom({"Chicken": gdjs.Escena2Code.GDChickenObjects1});
gdjs.Escena2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.Escena2Code.GDChickenObjects1);
/* Reuse gdjs.Escena2Code.GDDino_9595DouxObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDDino_95959595DouxObjects1Objects, gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDChickenObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena2Code.GDChickenObjects1 */
/* Reuse gdjs.Escena2Code.GDDino_9595DouxObjects1 */
{for(var i = 0, len = gdjs.Escena2Code.GDDino_9595DouxObjects1.length ;i < len;++i) {
    gdjs.Escena2Code.GDDino_9595DouxObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
{for(var i = 0, len = gdjs.Escena2Code.GDDino_9595DouxObjects1.length ;i < len;++i) {
    gdjs.Escena2Code.GDDino_9595DouxObjects1[i].getBehavior("PlatformerObject").setCanNotAirJump();
}
}
{for(var i = 0, len = gdjs.Escena2Code.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Escena2Code.GDChickenObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{for(var i = 0, len = gdjs.Escena2Code.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Escena2Code.GDChickenObjects1[i].getBehavior("Animation").setAnimationName("Hit");
}
}
{for(var i = 0, len = gdjs.Escena2Code.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Escena2Code.GDChickenObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDDino_95959595DouxObjects1Objects = Hashtable.newFrom({"Dino_Doux": gdjs.Escena2Code.GDDino_9595DouxObjects1});
gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDCoin_95959595GoldObjects1Objects = Hashtable.newFrom({"Coin_Gold": gdjs.Escena2Code.GDCoin_9595GoldObjects1});
gdjs.Escena2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino_Doux"), gdjs.Escena2Code.GDDino_9595DouxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena2Code.GDDino_9595DouxObjects1.length;i<l;++i) {
    if ( gdjs.Escena2Code.GDDino_9595DouxObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Escena2Code.GDDino_9595DouxObjects1[k] = gdjs.Escena2Code.GDDino_9595DouxObjects1[i];
        ++k;
    }
}
gdjs.Escena2Code.GDDino_9595DouxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena2Code.GDDino_9595DouxObjects1 */
{for(var i = 0, len = gdjs.Escena2Code.GDDino_9595DouxObjects1.length ;i < len;++i) {
    gdjs.Escena2Code.GDDino_9595DouxObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Doux"), gdjs.Escena2Code.GDDino_9595DouxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena2Code.GDDino_9595DouxObjects1.length;i<l;++i) {
    if ( !(gdjs.Escena2Code.GDDino_9595DouxObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Escena2Code.GDDino_9595DouxObjects1[k] = gdjs.Escena2Code.GDDino_9595DouxObjects1[i];
        ++k;
    }
}
gdjs.Escena2Code.GDDino_9595DouxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena2Code.GDDino_9595DouxObjects1 */
{for(var i = 0, len = gdjs.Escena2Code.GDDino_9595DouxObjects1.length ;i < len;++i) {
    gdjs.Escena2Code.GDDino_9595DouxObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.Escena2Code.GDChickenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino_Doux"), gdjs.Escena2Code.GDDino_9595DouxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDDino_95959595DouxObjects1Objects, gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDChickenObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena2Code.GDDino_9595DouxObjects1 */
{for(var i = 0, len = gdjs.Escena2Code.GDDino_9595DouxObjects1.length ;i < len;++i) {
    gdjs.Escena2Code.GDDino_9595DouxObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Doux"), gdjs.Escena2Code.GDDino_9595DouxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Escena2Code.GDDoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena2Code.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.Escena2Code.GDDoorObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Escena2Code.GDDoorObjects1[k] = gdjs.Escena2Code.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.Escena2Code.GDDoorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDDino_95959595DouxObjects1Objects, gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "you win", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Doux"), gdjs.Escena2Code.GDDino_9595DouxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Floater_enemy"), gdjs.Escena2Code.GDFloater_9595enemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("bloque"), gdjs.Escena2Code.GDbloqueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDFloater_95959595enemyObjects1Objects, gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDbloqueObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDFloater_95959595enemyObjects1Objects, gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDDino_95959595DouxObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Escena2Code.GDDino_9595DouxObjects1 */
/* Reuse gdjs.Escena2Code.GDFloater_9595enemyObjects1 */
{for(var i = 0, len = gdjs.Escena2Code.GDFloater_9595enemyObjects1.length ;i < len;++i) {
    gdjs.Escena2Code.GDFloater_9595enemyObjects1[i].getBehavior("Flippable").flipY(true);
}
}
{for(var i = 0, len = gdjs.Escena2Code.GDDino_9595DouxObjects1.length ;i < len;++i) {
    gdjs.Escena2Code.GDDino_9595DouxObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Doux"), gdjs.Escena2Code.GDDino_9595DouxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena2Code.GDDino_9595DouxObjects1.length;i<l;++i) {
    if ( gdjs.Escena2Code.GDDino_9595DouxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Escena2Code.GDDino_9595DouxObjects1[k] = gdjs.Escena2Code.GDDino_9595DouxObjects1[i];
        ++k;
    }
}
gdjs.Escena2Code.GDDino_9595DouxObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Escena2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin_Gold"), gdjs.Escena2Code.GDCoin_9595GoldObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino_Doux"), gdjs.Escena2Code.GDDino_9595DouxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDDino_95959595DouxObjects1Objects, gdjs.Escena2Code.mapOfGDgdjs_9546Escena2Code_9546GDCoin_95959595GoldObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena2Code.GDCoin_9595GoldObjects1 */
{for(var i = 0, len = gdjs.Escena2Code.GDCoin_9595GoldObjects1.length ;i < len;++i) {
    gdjs.Escena2Code.GDCoin_9595GoldObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
}

}


};

gdjs.Escena2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena2Code.GDbloqueObjects1.length = 0;
gdjs.Escena2Code.GDbloqueObjects2.length = 0;
gdjs.Escena2Code.GDDino_9595DouxObjects1.length = 0;
gdjs.Escena2Code.GDDino_9595DouxObjects2.length = 0;
gdjs.Escena2Code.GDNewSpriteObjects1.length = 0;
gdjs.Escena2Code.GDNewSpriteObjects2.length = 0;
gdjs.Escena2Code.GDChickenObjects1.length = 0;
gdjs.Escena2Code.GDChickenObjects2.length = 0;
gdjs.Escena2Code.GDBackground_9595Blue_9595DesertObjects1.length = 0;
gdjs.Escena2Code.GDBackground_9595Blue_9595DesertObjects2.length = 0;
gdjs.Escena2Code.GDSummer_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.Escena2Code.GDSummer_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.Escena2Code.GDGrassObjects1.length = 0;
gdjs.Escena2Code.GDGrassObjects2.length = 0;
gdjs.Escena2Code.GDForest_9595BackgroundObjects1.length = 0;
gdjs.Escena2Code.GDForest_9595BackgroundObjects2.length = 0;
gdjs.Escena2Code.GDDoorObjects1.length = 0;
gdjs.Escena2Code.GDDoorObjects2.length = 0;
gdjs.Escena2Code.GDNewSprite2Objects1.length = 0;
gdjs.Escena2Code.GDNewSprite2Objects2.length = 0;
gdjs.Escena2Code.GDFloater_9595enemyObjects1.length = 0;
gdjs.Escena2Code.GDFloater_9595enemyObjects2.length = 0;
gdjs.Escena2Code.GDDino_9595Doux2Objects1.length = 0;
gdjs.Escena2Code.GDDino_9595Doux2Objects2.length = 0;
gdjs.Escena2Code.GDbloque2Objects1.length = 0;
gdjs.Escena2Code.GDbloque2Objects2.length = 0;
gdjs.Escena2Code.GDDino_9595Doux3Objects1.length = 0;
gdjs.Escena2Code.GDDino_9595Doux3Objects2.length = 0;
gdjs.Escena2Code.GDDino_9595Doux4Objects1.length = 0;
gdjs.Escena2Code.GDDino_9595Doux4Objects2.length = 0;
gdjs.Escena2Code.GDCoin_9595GoldObjects1.length = 0;
gdjs.Escena2Code.GDCoin_9595GoldObjects2.length = 0;

gdjs.Escena2Code.eventsList1(runtimeScene);
gdjs.Escena2Code.GDbloqueObjects1.length = 0;
gdjs.Escena2Code.GDbloqueObjects2.length = 0;
gdjs.Escena2Code.GDDino_9595DouxObjects1.length = 0;
gdjs.Escena2Code.GDDino_9595DouxObjects2.length = 0;
gdjs.Escena2Code.GDNewSpriteObjects1.length = 0;
gdjs.Escena2Code.GDNewSpriteObjects2.length = 0;
gdjs.Escena2Code.GDChickenObjects1.length = 0;
gdjs.Escena2Code.GDChickenObjects2.length = 0;
gdjs.Escena2Code.GDBackground_9595Blue_9595DesertObjects1.length = 0;
gdjs.Escena2Code.GDBackground_9595Blue_9595DesertObjects2.length = 0;
gdjs.Escena2Code.GDSummer_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.Escena2Code.GDSummer_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.Escena2Code.GDGrassObjects1.length = 0;
gdjs.Escena2Code.GDGrassObjects2.length = 0;
gdjs.Escena2Code.GDForest_9595BackgroundObjects1.length = 0;
gdjs.Escena2Code.GDForest_9595BackgroundObjects2.length = 0;
gdjs.Escena2Code.GDDoorObjects1.length = 0;
gdjs.Escena2Code.GDDoorObjects2.length = 0;
gdjs.Escena2Code.GDNewSprite2Objects1.length = 0;
gdjs.Escena2Code.GDNewSprite2Objects2.length = 0;
gdjs.Escena2Code.GDFloater_9595enemyObjects1.length = 0;
gdjs.Escena2Code.GDFloater_9595enemyObjects2.length = 0;
gdjs.Escena2Code.GDDino_9595Doux2Objects1.length = 0;
gdjs.Escena2Code.GDDino_9595Doux2Objects2.length = 0;
gdjs.Escena2Code.GDbloque2Objects1.length = 0;
gdjs.Escena2Code.GDbloque2Objects2.length = 0;
gdjs.Escena2Code.GDDino_9595Doux3Objects1.length = 0;
gdjs.Escena2Code.GDDino_9595Doux3Objects2.length = 0;
gdjs.Escena2Code.GDDino_9595Doux4Objects1.length = 0;
gdjs.Escena2Code.GDDino_9595Doux4Objects2.length = 0;
gdjs.Escena2Code.GDCoin_9595GoldObjects1.length = 0;
gdjs.Escena2Code.GDCoin_9595GoldObjects2.length = 0;


return;

}

gdjs['Escena2Code'] = gdjs.Escena2Code;
