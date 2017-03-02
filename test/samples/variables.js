// Private variables of any kind should be un-exported
export const _c1 = 1;
export var _v2 = 2;
export let _l3 = 3;

// Public variables should be visible and still access un-exported ones
export const c11 = _c1 + 10;
export var v12 = _v2 + 10;
export let l13 = _l3 + 10;
