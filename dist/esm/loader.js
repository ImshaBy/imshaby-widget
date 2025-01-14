import { b as bootstrapLazy } from './index-07f12cdc.js';
export { s as setNonce } from './index-07f12cdc.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["day-plate_8",[[1,"imshaby-schedule",{"parishId":[1,"parish-id"],"expanded":[4],"srvr":[32],"colorStyle":[32],"navigation":[32],"widgetCompositionFailed":[32],"widgetCompositionFailedError":[32]}],[0,"mass-slot",{"accordionIndex":[2,"accordion-index"],"accordionExpanded":[1,"accordion-expanded"],"massIndex":[2,"mass-index"],"expanded":[4],"massInfo":[16]}],[0,"day-plate",{"active":[1],"disabled":[1],"k":[2],"aria":[1],"day":[8],"date":[8]}],[0,"no-mass"],[0,"mass-additional",{"rorate":[4],"online":[4],"broadcastUrl":[1,"broadcast-url"]}],[0,"mass-footer",{"info":[1],"lastConfirmRelevance":[1,"last-confirm-relevance"]}],[0,"mass-header",{"address":[1],"langCode":[1,"lang-code"]}],[0,"mass-plate",{"time":[1],"actual":[4],"rorate":[4],"online":[4]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map