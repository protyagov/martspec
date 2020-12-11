// declare module 'rc-steps';
declare module 'react-stepper-horizontal';
declare module 'react-rating-stars-component';
// declare module 'pure-typeahead';
declare module 'react-meta-tags';
declare module 'typeahead.js';
declare module 'react-svg-donuts/complex';
declare module 'react-svg-donuts';
declare module 'corejs-typeahead';


interface JQuery {
    daterangepicker(options?: any, callback?: Function): any;

    queryBuilder(options?: any, callback?: Function): any;

    jqGrid(options?: any, callback?: Function, flag?: boolean): any;

    getColumnByName(options?: any, callback?: Function): any;

    croppie(elem: any, options?: any): any;
}


declare interface String {
    isNullOrEmpty(): boolean;
}