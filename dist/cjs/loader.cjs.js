'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dda69531.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["day-plate_8.cjs",[[1,"imshaby-schedule",{"parishId":[1,"parish-id"],"expanded":[4],"srvr":[32],"colorStyle":[32],"navigation":[32],"widgetCompositionFailed":[32],"widgetCompositionFailedError":[32]}],[0,"mass-slot",{"accordionIndex":[2,"accordion-index"],"accordionExpanded":[1,"accordion-expanded"],"massIndex":[2,"mass-index"],"expanded":[4],"massInfo":[16]}],[0,"day-plate",{"active":[1],"disabled":[1],"k":[2],"aria":[1],"day":[8],"date":[8]}],[0,"no-mass"],[0,"mass-additional",{"rorate":[4],"online":[4],"broadcastUrl":[1,"broadcast-url"]}],[0,"mass-footer",{"info":[1],"lastConfirmRelevance":[1,"last-confirm-relevance"]}],[0,"mass-header",{"address":[1],"langCode":[1,"lang-code"]}],[0,"mass-plate",{"time":[1],"actual":[4],"rorate":[4],"online":[4]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map