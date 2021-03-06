declare function require (id: string): any;

declare interface Route {
    urls: string[];
    link: string;
    title: string;
    component: any;
    subRoutes?: any;
}

declare interface SliderData {
    activeItem: number;
    itemsCount: number;
    intervalHandler: any;
    interval: number;
    handler: any;
}