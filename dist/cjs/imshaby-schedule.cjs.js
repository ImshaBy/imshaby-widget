'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dd4b7220.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.22.3 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('imshaby-schedule.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["day-plate_8.cjs",[[1,"imshaby-schedule",{"parishId":[1,"parish-id"],"expanded":[4],"srvr":[32],"colorStyle":[32],"navigation":[32],"plateBraker":[32]}],[1,"mass-slot",{"accordionIndex":[2,"accordion-index"],"accordionExpanded":[1,"accordion-expanded"],"massIndex":[2,"mass-index"],"expanded":[4],"massInfo":[16],"actual":[32]}],[1,"day-plate",{"active":[1],"disabled":[1],"k":[2],"aria":[1],"day":[8],"date":[8]}],[1,"no-mass"],[1,"mass-additional",{"rorate":[4],"online":[4],"broadcastUrl":[1,"broadcast-url"]}],[1,"mass-footer",{"info":[1],"lastConfirmRelevance":[1,"last-confirm-relevance"]}],[1,"mass-header",{"address":[1],"langCode":[1,"lang-code"]}],[1,"mass-plate",{"time":[1],"actual":[4],"rorate":[4],"online":[4]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=imshaby-schedule.cjs.js.map