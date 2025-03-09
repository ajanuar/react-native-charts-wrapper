import type { HostComponent, ViewProps } from 'react-native';
import type { BubblingEventHandler } from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import { PieRadarChartBaseProps } from './PieRadarChartBase';
import { RadarData } from './ChartDataConfig';
import { YAxisInterface } from './AxisIface';

interface ExtraOffsets {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

export interface NativeProps extends ViewProps, PieRadarChartBaseProps {
  data?: RadarData;
  yAxis?: YAxisInterface;
  drawWeb?: boolean;
  skipWebLineCount?: number;
  webLineWidth?: number;
  webLineWidthInner?: number;
  webAlpha?: number;
  webColor?: number;
  webColorInner?: number;
  extraOffsets?: ExtraOffsets;
  onChange?: BubblingEventHandler<void>;
  onSelect?: BubblingEventHandler<void>;
}

export default codegenNativeComponent<NativeProps>(
  'RNRadarChart'
) as HostComponent<NativeProps>;
