import { XAxisInterface } from './AxisIface';

interface DescriptionProps {
  text?: string;
  textColor?: number;
  textSize?: number;
  positionX?: number;
  positionY?: number;
}

type HorizontalAlignment = 'LEFT' | 'CENTER' | 'RIGHT';
type VerticalAlignment = 'TOP' | 'CENTER' | 'BOTTOM';
type Orientation = 'HORIZONTAL' | 'VERTICAL';
type Direction = 'LEFT_TO_RIGHT' | 'RIGHT_TO_LEFT';
type FormType = 'NONE' | 'EMPTY' | 'DEFAULT' | 'SQUARE' | 'CIRCLE' | 'LINE';

interface LegendProps {
  enabled?: boolean;
  textColor?: number;
  textSize?: number;
  fontFamily?: string;
  fontStyle?: number;
  fontWeight?: number;
  wordWrapEnabled?: boolean;
  maxSizePercent?: number;
  horizontalAlignment?: HorizontalAlignment;
  verticalAlignment?: VerticalAlignment;
  orientation?: Orientation;
  drawInside?: boolean;
  direction?: Direction;
  form?: FormType;
  formSize?: number;
  xEntrySpace?: number;
  yEntrySpace?: number;
  formToTextSpace?: number;
  custom?: {
    colors?: number[];
    labels?: string[];
  };
}

interface AnimationProps {
  durationX?: number;
  durationY?: number;
  easingX?: string;
  easingY?: string;
}

interface MarkerProps {
  enabled?: boolean;
  digits?: number;
  markerColor?: number;
  textColor?: number;
  textSize?: number;
}

interface HighlightProps {
  x: number;
  dataSetIndex?: number;
  dataIndex?: number;
  y?: number;
  stackIndex?: number;
}

interface ChartProps {
  animation?: AnimationProps;
  chartBackgroundColor?: number;
  logEnabled?: boolean;
  noDataText?: string;
  noDataTextColor?: number;
  touchEnabled?: boolean;
  dragDecelerationEnabled?: boolean;
  dragDecelerationFrictionCoef?: number;
  highlightPerTapEnabled?: boolean;
  chartDescription?: DescriptionProps;
  legend?: LegendProps;
  xAxis?: XAxisInterface;
  onYaxisMinMaxChange?: (event: any) => void;
  marker?: MarkerProps;
  highlights?: HighlightProps[];
}

export type { 
  DescriptionProps,
  LegendProps,
  AnimationProps,
  MarkerProps,
  HighlightProps,
  ChartProps
};
