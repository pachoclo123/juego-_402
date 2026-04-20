gdjs.Game_32overCode = {};
gdjs.Game_32overCode.localVariables = [];
gdjs.Game_32overCode.idToCallbackMap = new Map();
gdjs.Game_32overCode.GDNewTextObjects1= [];
gdjs.Game_32overCode.GDNewTextObjects2= [];
gdjs.Game_32overCode.GDDino_9595Doux2Objects1= [];
gdjs.Game_32overCode.GDDino_9595Doux2Objects2= [];
gdjs.Game_32overCode.GDbloque2Objects1= [];
gdjs.Game_32overCode.GDbloque2Objects2= [];
gdjs.Game_32overCode.GDDino_9595Doux3Objects1= [];
gdjs.Game_32overCode.GDDino_9595Doux3Objects2= [];
gdjs.Game_32overCode.GDDino_9595Doux4Objects1= [];
gdjs.Game_32overCode.GDDino_9595Doux4Objects2= [];
gdjs.Game_32overCode.GDCoin_9595GoldObjects1= [];
gdjs.Game_32overCode.GDCoin_9595GoldObjects2= [];


gdjs.Game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino_Doux3"), gdjs.Game_32overCode.GDDino_9595Doux3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32overCode.GDDino_9595Doux3Objects1.length;i<l;++i) {
    if ( gdjs.Game_32overCode.GDDino_9595Doux3Objects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32overCode.GDDino_9595Doux3Objects1[k] = gdjs.Game_32overCode.GDDino_9595Doux3Objects1[i];
        ++k;
    }
}
gdjs.Game_32overCode.GDDino_9595Doux3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32overCode.GDDino_9595Doux3Objects1 */
{for(var i = 0, len = gdjs.Game_32overCode.GDDino_9595Doux3Objects1.length ;i < len;++i) {
    gdjs.Game_32overCode.GDDino_9595Doux3Objects1[i].getBehavior("Animation").setAnimationName("Hurt");
}
}
}

}


};

gdjs.Game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32overCode.GDNewTextObjects1.length = 0;
gdjs.Game_32overCode.GDNewTextObjects2.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux2Objects1.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux2Objects2.length = 0;
gdjs.Game_32overCode.GDbloque2Objects1.length = 0;
gdjs.Game_32overCode.GDbloque2Objects2.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux3Objects1.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux3Objects2.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux4Objects1.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux4Objects2.length = 0;
gdjs.Game_32overCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.Game_32overCode.GDCoin_9595GoldObjects2.length = 0;

gdjs.Game_32overCode.eventsList0(runtimeScene);
gdjs.Game_32overCode.GDNewTextObjects1.length = 0;
gdjs.Game_32overCode.GDNewTextObjects2.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux2Objects1.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux2Objects2.length = 0;
gdjs.Game_32overCode.GDbloque2Objects1.length = 0;
gdjs.Game_32overCode.GDbloque2Objects2.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux3Objects1.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux3Objects2.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux4Objects1.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux4Objects2.length = 0;
gdjs.Game_32overCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.Game_32overCode.GDCoin_9595GoldObjects2.length = 0;


return;

}

gdjs['Game_32overCode'] = gdjs.Game_32overCode;
