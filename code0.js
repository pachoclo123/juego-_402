gdjs.menu_32principalCode = {};
gdjs.menu_32principalCode.localVariables = [];
gdjs.menu_32principalCode.idToCallbackMap = new Map();
gdjs.menu_32principalCode.GDNewTiledSpriteObjects1= [];
gdjs.menu_32principalCode.GDNewTiledSpriteObjects2= [];
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1= [];
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects2= [];
gdjs.menu_32principalCode.GDNewTextObjects1= [];
gdjs.menu_32principalCode.GDNewTextObjects2= [];
gdjs.menu_32principalCode.GDNewSpriteObjects1= [];
gdjs.menu_32principalCode.GDNewSpriteObjects2= [];
gdjs.menu_32principalCode.GDDino_9595Doux2Objects1= [];
gdjs.menu_32principalCode.GDDino_9595Doux2Objects2= [];
gdjs.menu_32principalCode.GDbloque2Objects1= [];
gdjs.menu_32principalCode.GDbloque2Objects2= [];
gdjs.menu_32principalCode.GDDino_9595Doux3Objects1= [];
gdjs.menu_32principalCode.GDDino_9595Doux3Objects2= [];
gdjs.menu_32principalCode.GDDino_9595Doux4Objects1= [];
gdjs.menu_32principalCode.GDDino_9595Doux4Objects2= [];
gdjs.menu_32principalCode.GDCoin_9595GoldObjects1= [];
gdjs.menu_32principalCode.GDCoin_9595GoldObjects2= [];


gdjs.menu_32principalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1[k] = gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena 1", false);
}
}

}


};

gdjs.menu_32principalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menu_32principalCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menu_32principalCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.menu_32principalCode.GDNewTextObjects1.length = 0;
gdjs.menu_32principalCode.GDNewTextObjects2.length = 0;
gdjs.menu_32principalCode.GDNewSpriteObjects1.length = 0;
gdjs.menu_32principalCode.GDNewSpriteObjects2.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux2Objects1.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux2Objects2.length = 0;
gdjs.menu_32principalCode.GDbloque2Objects1.length = 0;
gdjs.menu_32principalCode.GDbloque2Objects2.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux3Objects1.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux3Objects2.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux4Objects1.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux4Objects2.length = 0;
gdjs.menu_32principalCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.menu_32principalCode.GDCoin_9595GoldObjects2.length = 0;

gdjs.menu_32principalCode.eventsList0(runtimeScene);
gdjs.menu_32principalCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menu_32principalCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.menu_32principalCode.GDNewTextObjects1.length = 0;
gdjs.menu_32principalCode.GDNewTextObjects2.length = 0;
gdjs.menu_32principalCode.GDNewSpriteObjects1.length = 0;
gdjs.menu_32principalCode.GDNewSpriteObjects2.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux2Objects1.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux2Objects2.length = 0;
gdjs.menu_32principalCode.GDbloque2Objects1.length = 0;
gdjs.menu_32principalCode.GDbloque2Objects2.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux3Objects1.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux3Objects2.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux4Objects1.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux4Objects2.length = 0;
gdjs.menu_32principalCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.menu_32principalCode.GDCoin_9595GoldObjects2.length = 0;


return;

}

gdjs['menu_32principalCode'] = gdjs.menu_32principalCode;
