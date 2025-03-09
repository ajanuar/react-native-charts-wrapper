import { ChartProps } from './ChartBase';
import { YAxisInterface } from './AxisIface';

export interface VisibleRange {
    x?: {
        min?: number;
        max?: number;
    };
    y?: {
        left?: {
            min?: number;
            max?: number;
        };
        right?: {
            min?: number;
            max?: number;
        };
    };
}

export interface MaxScale {
    x?: number;
    y?: number;
}

export interface ViewPortOffsets {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}

export interface Zoom {
    scaleX: number;
    scaleY: number;
    xValue: number;
    yValue: number;
    axisDependency: 'LEFT' | 'RIGHT';
}

export interface BarLineChartBaseProps extends ChartProps {
    maxHighlightDistance?: number;
    drawGridBackground?: boolean;
    gridBackgroundColor?: number;

    drawBorders?: boolean;
    borderColor?: number;
    borderWidth?: number;

    minOffset?: number;
    maxVisibleValueCount?: number;
    visibleRange?: VisibleRange;
    maxScale?: MaxScale;
    autoScaleMinMaxEnabled?: boolean;
    keepPositionOnRotation?: boolean;

    highlightPerDragEnabled?: boolean;

    scaleEnabled?: boolean;
    scaleXEnabled?: boolean;
    scaleYEnabled?: boolean;
    dragEnabled?: boolean;
    pinchZoom?: boolean;
    doubleTapToZoomEnabled?: boolean;

    yAxis?: {
        left?: YAxisInterface;
        right?: YAxisInterface;
    };
    zoom?: Zoom;
    viewPortOffsets?: ViewPortOffsets;
    extraOffsets?: ViewPortOffsets;

    group?: string;
    identifier?: string;
    syncX?: boolean;
    syncY?: boolean;
}
