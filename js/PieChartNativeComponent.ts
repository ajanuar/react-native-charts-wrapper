import type { HostComponent, ViewProps } from 'react-native';
import type { BubblingEventHandler } from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import { PieRadarChartBaseProps } from './PieRadarChartBase';
import { PieData } from './ChartDataConfig';

interface ExtraOffsets {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

interface StyledCenterText {
  text?: string;
  color?: number;
  fontFamily?: string;
  size?: number;
}

export interface NativeProps extends ViewProps, PieRadarChartBaseProps {
  data?: PieData;
  extraOffsets?: ExtraOffsets;
  drawEntryLabels?: boolean;
  usePercentValues?: boolean;
  centerText?: string;
  styledCenterText?: StyledCenterText;
  centerTextRadiusPercent?: number;
  holeRadius?: number;
  holeColor?: number;
  transparentCircleRadius?: number;
  transparentCircleColor?: number;
  entryLabelColor?: number;
  entryLabelTextSize?: number;
  entryLabelFontFamily?: string;
  maxAngle?: number;
  onChange?: BubblingEventHandler<void>;
  onSelect?: BubblingEventHandler<void>;
}

export default codegenNativeComponent<NativeProps>(
  'RNPieChart'
) as HostComponent<NativeProps>;
