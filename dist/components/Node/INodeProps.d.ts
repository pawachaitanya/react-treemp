import { HierarchyRectangularNode } from "d3-hierarchy";
export interface INodeProps {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    data: any;
    readonly depth: number;
    parent: HierarchyRectangularNode<any> | null;
    children?: Array<HierarchyRectangularNode<any>>;
    readonly value?: number;
    id: number;
    xScaleFactor: number;
    yScaleFactor: number;
    xScaleFunction: any;
    yScaleFunction: any;
    zoomEnabled: boolean;
    globalHeight: number;
    globalWidth: number;
    isSelectedNode: boolean;
    nodeTotalNodes: number;
    globalTotalNodes: number;
    xTranslated?: number;
    yTranslated?: number;
    width?: number;
    height?: number;
    style?: object;
    name: string;
    label: string;
    className: string;
    bgColor: string;
    textColor: string;
    fontSize: number;
    valueUnit: string;
    onClick?: any;
    hasChildren: boolean;
    valueWithFormat: string;
    url: string;
    hideNumberOfChildren?: boolean;
    hideValue?: boolean;
    treemapId?: string;
}
