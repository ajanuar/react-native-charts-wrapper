// Convert PropTypes to TypeScript interfaces

export interface ValueFormatterLabel {
  x: number;
  label: string;
}

export type ValueFormatterType = 'largeValue' | 'percent' | 'date' | 'labelByXValue' | string | string[];

export type AxisDependency = 'LEFT' | 'RIGHT';

export type GradientOrientation = 
  | 'TOP_BOTTOM'
  | 'TR_BL'
  | 'RIGHT_LEFT'
  | 'BR_TL'
  | 'BOTTOM_TOP'
  | 'BL_TR'
  | 'LEFT_RIGHT'
  | 'TL_BR';

export interface GradientConfig {
  colors: number[];
  positions?: number[];  // iOS
  angle?: number;        // iOS
  orientation?: GradientOrientation; // Android
}

export interface CommonConfig {
  color?: number;
  colors?: number[];
  highlightEnabled?: boolean;
  drawValues?: boolean;
  valueTextSize?: number;
  valueTextColor?: number;
  visible?: boolean;
  valueFormatter?: ValueFormatterType;
  valueFormatterPattern?: string;
  valueFormatterLabels?: ValueFormatterLabel[];
  axisDependency?: AxisDependency;
}

export interface BarLineScatterCandleBubbleConfig extends CommonConfig {
  highlightColor?: number;
}

export interface LineScatterCandleRadarConfig extends BarLineScatterCandleBubbleConfig {
  drawVerticalHighlightIndicator?: boolean;
  drawHorizontalHighlightIndicator?: boolean;
  highlightLineWidth?: number;
}

export interface LineRadarConfig extends LineScatterCandleRadarConfig {
  fillGradient?: GradientConfig;
  fillColor?: number;
  fillAlpha?: number;
  drawFilled?: boolean;
  lineWidth?: number; // must be between 0.2 and 10
}