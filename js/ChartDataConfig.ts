import { 
  CommonConfig, 
  BarLineScatterCandleBubbleConfig, 
  LineScatterCandleRadarConfig, 
  LineRadarConfig 
} from "./ChartDataSetConfig";

// Value types
export interface LineValue {
  x?: number;
  y: number;
  marker?: string;
  icon?: {
    bundle?: any;
    width?: number;
    height?: number;
  };
}

export interface BarValue {
  x?: number;
  y: number | number[];
  marker?: string | string[];
}

export interface BubbleValue {
  x?: number;
  y: number;
  size: number;
  marker?: string;
}

export interface CandleValue {
  x?: number;
  shadowH: number;
  shadowL: number;
  open: number;
  close: number;
  marker?: string;
}

export interface PieValue {
  value: number;
  label?: string;
}

export interface RadarValue {
  value: number;
}

// Line chart specific configs
export interface LineDataSetConfig extends CommonConfig, BarLineScatterCandleBubbleConfig, LineScatterCandleRadarConfig, LineRadarConfig {
  circleRadius?: number;
  drawCircles?: boolean;
  mode?: "LINEAR" | "STEPPED" | "CUBIC_BEZIER" | "HORIZONTAL_BEZIER";
  drawCubicIntensity?: number;
  circleColor?: number;
  circleColors?: number[];
  circleHoleColor?: number;
  drawCircleHole?: boolean;
  fillFormatter?: {
    min: number;
  };
  dashedLine?: {
    lineLength: number;
    spaceLength: number;
    phase?: number;
  };
}

export interface LineDataSet {
  values: Array<LineValue | number>;
  label: string;
  config?: LineDataSetConfig;
}

export interface LineData {
  dataSets: LineDataSet[];
}

// Bar chart specific configs
export interface BarDataSetConfig extends CommonConfig, BarLineScatterCandleBubbleConfig {
  barShadowColor?: number;
  highlightAlpha?: number;
  stackLabels?: string[];
}

export interface BarDataSet {
  values: Array<BarValue | number | number[]>;
  label: string;
  config?: BarDataSetConfig;
}

export interface BarDataConfig {
  barWidth?: number;
  group?: {
    fromX: number;
    groupSpace: number;
    barSpace: number;
  };
}

export interface BarData {
  dataSets: BarDataSet[];
  config?: BarDataConfig;
}

// Bubble chart specific configs
export interface BubbleDataSetConfig extends CommonConfig, BarLineScatterCandleBubbleConfig {}

export interface BubbleDataSet {
  values: BubbleValue[];
  label: string;
  config?: BubbleDataSetConfig;
}

export interface BubbleData {
  dataSets: BubbleDataSet[];
}

// Candle chart specific configs
export type PaintStyle = "FILL" | "STROKE" | "FILL_AND_STROKE";

export interface CandleDataSetConfig extends CommonConfig, BarLineScatterCandleBubbleConfig, LineScatterCandleRadarConfig {
  barSpace?: number;
  shadowWidth?: number;
  shadowColor?: number;
  shadowColorSameAsCandle?: boolean;
  neutralColor?: number;
  decreasingColor?: number;
  decreasingPaintStyle?: PaintStyle;
  increasingColor?: number;
  increasingPaintStyle?: PaintStyle;
}

export interface CandleDataSet {
  values: CandleValue[];
  label: string;
  config?: CandleDataSetConfig;
}

export interface CandleData {
  dataSets: CandleDataSet[];
}

// Pie chart specific configs
export type ValuePosition = "INSIDE_SLICE" | "OUTSIDE_SLICE";

export interface PieDataSetConfig extends CommonConfig {
  sliceSpace?: number;
  selectionShift?: number;
  xValuePosition?: ValuePosition;
  yValuePosition?: ValuePosition;
  valueLinePart1Length?: number;
  valueLinePart2Length?: number;
  valueLineColor?: number;
  valueLineWidth?: number;
  valueLinePart1OffsetPercentage?: number;
  valueLineVariableLength?: boolean;
}

export interface PieDataSet {
  values: Array<PieValue | number>;
  label: string;
  config?: PieDataSetConfig;
}

export interface PieData {
  dataSets: PieDataSet[];
}

// Radar chart specific configs
export interface RadarDataSetConfig extends CommonConfig, LineScatterCandleRadarConfig, LineRadarConfig {}

export interface RadarDataSet {
  values: Array<RadarValue | number>;
  label: string;
  config?: RadarDataSetConfig;
}

export interface RadarData {
  dataSets: RadarDataSet[];
  labels?: string[];
}

// Scatter chart specific configs
export type ScatterShape = "SQUARE" | "CIRCLE" | "TRIANGLE" | "CROSS" | "X";

export interface ScatterDataSetConfig extends CommonConfig, BarLineScatterCandleBubbleConfig, LineScatterCandleRadarConfig {
  scatterShapeSize?: number;
  scatterShape?: ScatterShape;
  scatterShapeHoleColor?: number;
  scatterShapeHoleRadius?: number;
}

export interface ScatterDataSet {
  values: Array<LineValue | number>; // LineValue is reused because the structure is the same
  label: string;
  config?: ScatterDataSetConfig;
}

export interface ScatterData {
  dataSets: ScatterDataSet[];
}

// Combined data
export interface CombinedData {
  lineData?: LineData;
  barData?: BarData;
  scatterData?: ScatterData;
  candleData?: CandleData;
  bubbleData?: BubbleData;
}

export {
  LineData as lineData,
  BarData as barData,
  PieData as pieData,
  BubbleData as bubbleData,
  ScatterData as scatterData,
  CandleData as candleData,
  RadarData as radarData,
  CombinedData as combinedData
};
