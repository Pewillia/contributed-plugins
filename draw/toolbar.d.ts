export declare class DrawObs {
    private _drawPoint;
    private _drawPolyline;
    private _drawPolygon;
    private _drawExtent;
    subsDrawPoint(geometry: any): void;
    subsDrawPolyline(geometry: any): void;
    subsDrawPolygon(geometry: any): void;
    subsDrawExtent(geometry: any): void;
    drawPoint: import("rxjs").Observable<unknown>;
    drawPolyline: import("rxjs").Observable<unknown>;
    drawPolygon: import("rxjs").Observable<unknown>;
    drawExtent: import("rxjs").Observable<unknown>;
}
export declare class DrawToolbar {
    private _mapApi;
    private _config;
    private _drawToolbar;
    private _editToolbar;
    private _editHandler;
    private _bundle;
    private _geometryService;
    private _drawEndHandler;
    private _activeTool;
    private _activeColor;
    private _activeGraphic;
    private _identifyMode;
    private _mapPoint;
    private _geomLength;
    private _extentPoints;
    private _graphicKey;
    private _areaParams;
    private _lengthParams;
    private _distanceParams;
    private _showMeasure;
    private _localMouse;
    private _localWCAG;
    private _local;
    /**
     * get local WCAG tooltip
     * @property localWCAG
     * @returns {Object} the WCAG tooltip to use
     */
    get localWCAG(): object;
    /**
     * get local mouse tooltip
     * @property localMouse
     * @returns {Object} the mouse tooltip to use
     */
    get localMouse(): object;
    /**
     * set local tooltip for draw toolbar
     * @property local
     * @param {Object} value the tooltip to use
     */
    set local(value: object);
    /**
     * get local WCAG tooltip
     * @property local
     * @returns {Object} the WCAG tooltip to use
     */
    get local(): object;
    /**
     * Toolbar constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {Any} config the viewer configuration
     */
    constructor(mapApi: any, config: any);
    /**
     * Initialize the toolbar
     * @function initToolbar
     * @param {any} myBundle esri dependencies bundle
     */
    initToolbar(myBundle: any): void;
    /**
     * get active tool
     * @property activeTool
     * @return {string} active tool name
     */
    get activeTool(): string;
    /**
     * set active tool
     * @property activeTool
     * @param {string} value tool name
     */
    set activeTool(value: string);
    /**
     * get active color
     * @property activeColor
     * @return {Number[]} active color
     */
    get activeColor(): number[];
    /**
     * set active color
     * @property activeColor
     * @param {Number[]} value active color
     */
    set activeColor(value: number[]);
    /**
     * get geometry length
     * @property geometryLength
     * @return {number} geometry length
     */
    get geometryLength(): number;
    /**
     * set geometry length
     * @property geometryLength
     * @param {number} value geometry length
     */
    set geometryLength(value: number);
    /**
     * get geometry points
     * @property mapPoints
     * @return {Object} geometry length
     */
    get mapPoints(): object[];
    /**
     * set geometry points
     * @property mapPoints
     * @param {Object[]} value geometry length
     */
    set mapPoints(value: object[]);
    /**
     * get graphic key
     * @property graphicKey
     * @return {String} graphic key
     */
    get graphicKey(): string;
    /**
     * set graphic key
     * @property graphicKey
     * @param {String} value graphic key
     */
    set graphicKey(value: string);
    /**
     * get graphic layer
     * @property graphicsLayer
     * @return {Any} graphic layer
     */
    get graphicsLayer(): any;
    /**
     * Import graphics file to graphiclayer
     * @function importGraphics
     * @param {Oject[]} graphics array of graphics to load
     */
    importGraphics(graphics: any): void;
    /**
     * Export graphics to file from graphiclayer
     * @function exportGraphics
     * @return {String} JSON array of graphics stringnify
     */
    exportGraphics(): string;
    /**
     * Disable/enable details panel
     * @function disableDetails
     * @param {Boolean} value true to enable, false to disable
     */
    disableDetails(value: boolean): void;
    /**
     * Simulate click for keyboard user (WCAG)
     * @function simulateClick
     * @param {Number[]} pt array of lat/long
     * @param {String} mouse mouse event
     */
    simulateClick(pt: number[], mouse: string): void;
    /**
     * Set extent point
     * @function setExtentPoints
     * @param {Number[]} value array of lat/long
     * @param {Boolean} final true if last point, false otherwise
     */
    setExtentPoints(value: number[], final: boolean): void;
    /**
     * Add geometry to map
     * @function addToMap
     * @param {Any} event esri toolbar event
     */
    addToMap(evt: any, isEdit?: boolean): void;
    /**
     * remove duplicate vertices inside geometry
     * @function removeDuplicate
     * @param {[]} arr array of coordinates
     * @param {Boolean} isPolygon true if geometry is polygon, false otherwise
     */
    removeDuplicate(arr: [], isPolygon: boolean): any;
    /**
     * Add graphic to graphiclayer
     * @function addGraphic
     * @param {Any} geometry esri geometry
     * @param {Any} symbol esri symbol
     */
    addGraphic(geometry: any, symbol: any): void;
    /**
     * Delete graphic from graphiclayer
     * @function deleteGraphics
     * @param {Any} geometry esri geometry to use to delete graphic inside
     */
    deleteGraphics(geometry: any): void;
    /**
     * Get the distance live when user move his mouse
     * @function outputDistance
     * @param {Any} evt esri geometry service distance-complete event
     */
    outputDistance(evt: any): void;
    /**
     * Get the area and distance to add to graphic
     * @function outputAreaAndLength
     * @param {Any} evt esri geometry service areas-and-lengths-complete event
     * @param {Any} graphic esri graphic to apply value to
     */
    outputAreaAndLength(evt: any, graphic: any): void;
    /**
     * Get the length to add to graphic
     * @function outputLength
     * @param {Any} evt esri geometry service length-complete event
     * @param {Any} graphic esri graphic to apply value to
     */
    outputLength(evt: any, graphic: any): void;
    /**
     * Get the label to add to graphic
     * @function labelPoint
     * @param {Any} evt esri geometry service label-point-complete event
     * @param {Any} graphic esri graphic to apply value to
     */
    labelPoint(evt: any, graphic: any): void;
    /**
     * Create measure svg backgrounbd
     * @function createBackground
     * @param {Boolean} [show] true to create and show label, false otherwise
     */
    createBackground(show?: boolean): void;
    /**
     * Densify geometry
     * @function densifyGeom
     * @param {Any} geom geometry to densify
     */
    densifyGeom(geom: any): void;
}