// exported arrow functions behave just like regular variables
export const _invisible = x => 2 * x;
export const visible = x => 3 * _invisible(x);
export default x => x * x;
