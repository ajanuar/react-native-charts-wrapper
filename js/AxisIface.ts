export interface GridDashedLine {
  lineLength: number;
  spaceLength: number;
  phase: number;
}

export interface LimitLine {
  limit: number;
  label?: string;
  lineColor?: number;
  lineWidth?: number;
  valueTextColor?: number;
  valueFont?: number;
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: string;
  labelPosition?: 'LEFT_TOP' | 'LEFT_BOTTOM' | 'RIGHT_TOP' | 'RIGHT_BOTTOM';
  lineDashPhase?: number;
  lineDashLengths?: number[];
}

export interface ZeroLine {
  enabled?: boolean;
  lineWidth?: number;
  lineColor?: number;
}

export type ValueFormatterType = 'largeValue' | 'percent' | 'date' | string | string[];
export type TimeUnitType = 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS';

export interface AxisInterface {
  // what is drawn
  enabled?: boolean;
  drawLabels?: boolean;
  drawAxisLine?: boolean;
  drawGridLines?: boolean;

  // style
  textColor?: number;
  textSize?: number;
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: string;
  gridColor?: number;
  gridLineWidth?: number;
  axisLineColor?: number;
  axisLineWidth?: number;
  gridDashedLine?: GridDashedLine;

  // limit lines
  limitLines?: LimitLine[];
  drawLimitLinesBehindData?: boolean;

  axisMaximum?: number;
  axisMinimum?: number;
  granularity?: number;
  granularityEnabled?: boolean;

  labelCount?: number;
  labelCountForce?: boolean;

  centerAxisLabels?: boolean; // Centers the axis labels instead of drawing them at their original position. This is useful especially for grouped BarChart.

  // formatting
  valueFormatter?: ValueFormatterType;

  // valueFormatterPattern, since, timeUnit are used when valueFormatter is 'date'
  // since: milliseconds of 2018-6-1, timeUnit: DAYS, x:9, valueFormatterPattern: YYYY-MM-dd
  // will display 2018-6-10

  // Note: for iOS/Charts, double is used for x, but in MpAndroidChart, float is used for x.
  // so in android, there will be precision loss when you use MILLISECONDS/SECOND/MINUTES as x value.   
  // you can use a different since like seconds of 2019 or use timeUnit DAYS, then x value will be within a valid range.

  valueFormatterPattern?: string;
  since?: number; // milliseconds from 1970-1-1 when x=0
  timeUnit?: TimeUnitType; // timeUnit of x,
}

export interface XAxisInterface extends AxisInterface {
  labelRotationAngle?: number;
  avoidFirstLastClipping?: boolean;
  position?: 'TOP' | 'BOTTOM' | 'BOTH_SIDED' | 'TOP_INSIDE' | 'BOTTOM_INSIDE';
  yOffset?: number;
}

export interface YAxisInterface extends AxisInterface {
  inverted?: boolean;
  spaceTop?: number;
  spaceBottom?: number;
  position?: 'OUTSIDE_CHART' | 'INSIDE_CHART';
  maxWidth?: number;
  minWidth?: number;
  zeroLine?: ZeroLine;
}
