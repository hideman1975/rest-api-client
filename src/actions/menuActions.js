
export const MENU_CLICK = 'MENU_CLICK';
export function menuClick(activePage) {

    return {
        type: MENU_CLICK,
        activePage: activePage

    };
}