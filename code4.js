gdjs.you_32winCode = {};
gdjs.you_32winCode.localVariables = [];
gdjs.you_32winCode.idToCallbackMap = new Map();
gdjs.you_32winCode.GDNewTextObjects1= [];
gdjs.you_32winCode.GDNewTextObjects2= [];
gdjs.you_32winCode.GDDino_9595Doux2Objects1= [];
gdjs.you_32winCode.GDDino_9595Doux2Objects2= [];
gdjs.you_32winCode.GDbloque2Objects1= [];
gdjs.you_32winCode.GDbloque2Objects2= [];
gdjs.you_32winCode.GDDino_9595Doux3Objects1= [];
gdjs.you_32winCode.GDDino_9595Doux3Objects2= [];
gdjs.you_32winCode.GDDino_9595Doux4Objects1= [];
gdjs.you_32winCode.GDDino_9595Doux4Objects2= [];
gdjs.you_32winCode.GDCoin_9595GoldObjects1= [];
gdjs.you_32winCode.GDCoin_9595GoldObjects2= [];


gdjs.you_32winCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino_Doux3"), gdjs.you_32winCode.GDDino_9595Doux3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.you_32winCode.GDDino_9595Doux3Objects1.length;i<l;++i) {
    if ( gdjs.you_32winCode.GDDino_9595Doux3Objects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.you_32winCode.GDDino_9595Doux3Objects1[k] = gdjs.you_32winCode.GDDino_9595Doux3Objects1[i];
        ++k;
    }
}
gdjs.you_32winCode.GDDino_9595Doux3Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino_Doux4"), gdjs.you_32winCode.GDDino_9595Doux4Objects1);
{for(var i = 0, len = gdjs.you_32winCode.GDDino_9595Doux4Objects1.length ;i < len;++i) {
    gdjs.you_32winCode.GDDino_9595Doux4Objects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};

gdjs.you_32winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.you_32winCode.GDNewTextObjects1.length = 0;
gdjs.you_32winCode.GDNewTextObjects2.length = 0;
gdjs.you_32winCode.GDDino_9595Doux2Objects1.length = 0;
gdjs.you_32winCode.GDDino_9595Doux2Objects2.length = 0;
gdjs.you_32winCode.GDbloque2Objects1.length = 0;
gdjs.you_32winCode.GDbloque2Objects2.length = 0;
gdjs.you_32winCode.GDDino_9595Doux3Objects1.length = 0;
gdjs.you_32winCode.GDDino_9595Doux3Objects2.length = 0;
gdjs.you_32winCode.GDDino_9595Doux4Objects1.length = 0;
gdjs.you_32winCode.GDDino_9595Doux4Objects2.length = 0;
gdjs.you_32winCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.you_32winCode.GDCoin_9595GoldObjects2.length = 0;

gdjs.you_32winCode.eventsList0(runtimeScene);
gdjs.you_32winCode.GDNewTextObjects1.length = 0;
gdjs.you_32winCode.GDNewTextObjects2.length = 0;
gdjs.you_32winCode.GDDino_9595Doux2Objects1.length = 0;
gdjs.you_32winCode.GDDino_9595Doux2Objects2.length = 0;
gdjs.you_32winCode.GDbloque2Objects1.length = 0;
gdjs.you_32winCode.GDbloque2Objects2.length = 0;
gdjs.you_32winCode.GDDino_9595Doux3Objects1.length = 0;
gdjs.you_32winCode.GDDino_9595Doux3Objects2.length = 0;
gdjs.you_32winCode.GDDino_9595Doux4Objects1.length = 0;
gdjs.you_32winCode.GDDino_9595Doux4Objects2.length = 0;
gdjs.you_32winCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.you_32winCode.GDCoin_9595GoldObjects2.length = 0;


return;

}

gdjs['you_32winCode'] = gdjs.you_32winCode;
