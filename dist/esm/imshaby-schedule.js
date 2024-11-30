import { p as promiseResolve, b as bootstrapLazy } from './index-d0479849.js';
export { s as setNonce } from './index-d0479849.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.22.3 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["mass-additional_4",[[1,"mass-additional",{"rorate":[4],"online":[4],"broadcastUrl":[1,"broadcast-url"]}],[1,"mass-footer",{"info":[1],"lastConfirmRelevance":[1,"last-confirm-relevance"]}],[1,"mass-header",{"address":[1],"langCode":[1,"lang-code"]}],[1,"mass-plate",{"time":[1],"actual":[4],"rorate":[4],"online":[4]}]]],["day-plate_3",[[1,"mass-slot",{"accordionIndex":[2,"accordion-index"],"accordionExpanded":[1,"accordion-expanded"],"massIndex":[2,"mass-index"],"expanded":[4],"massInfo":[16],"actual":[32]}],[1,"day-plate",{"active":[1],"disabled":[1],"k":[2],"aria":[1],"day":[8],"date":[8]}],[1,"no-mass"]]],["imshaby-schedule",[[1,"imshaby-schedule",{"parishId":[1,"parish-id"],"expanded":[4],"srvr":[32],"colorStyle":[32],"navigation":[32],"plateBraker":[32]}]]]], options);
});

//# sourceMappingURL=imshaby-schedule.js.map