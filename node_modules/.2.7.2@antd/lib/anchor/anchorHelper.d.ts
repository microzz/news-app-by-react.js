export declare const reqAnimFrame: any;
export declare const easeInOutCubic: (t: any, b: any, c: any, d: any) => any;
export declare function getDefaultTarget(): Window | null;
export declare function getOffsetTop(element: any): number;
export declare type Section = {
    top: number;
    bottom: number;
    section: any;
};
export declare function scrollTo(href: any, offsetTop?: number, target?: typeof getDefaultTarget, callback?: () => void): void;
declare class AnchorHelper {
    private links;
    private currentAnchor;
    private _activeAnchor;
    constructor();
    addLink(link: any): void;
    getCurrentActiveAnchor(): HTMLElement | null;
    setActiveAnchor(component: any): void;
    getCurrentAnchor(offsetTop?: number, bounds?: number): any;
    scrollTo(href: any, offsetTop: any, target?: typeof getDefaultTarget, callback?: () => void): void;
}
export default AnchorHelper;
