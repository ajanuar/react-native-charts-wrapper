import type { HostComponent, ViewProps } from 'react-native';
import type { BubblingEventHandler } from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import { BarLineChartBaseProps } from './BarLineChartBase';
import { ScatterData } from './ChartDataConfig';

export interface NativeProps extends ViewProps, BarLineChartBaseProps {
  data?: ScatterData;
  onChange?: BubblingEventHandler<void>;
  onSelect?: BubblingEventHandler<void>;
}

export type ComponentType = HostComponent<NativeProps>;

// Combined native commands from all enhancers
interface NativeCommands {
  // Move enhancer commands
  moveViewTo: (viewRef: React.ComponentRef<ComponentType>, x: number, y: number, axisDependency: string) => void;
  moveViewToX: (viewRef: React.ComponentRef<ComponentType>, x: number) => void;
  moveViewToAnimated: (viewRef: React.ComponentRef<ComponentType>, x: number, y: number, axisDependency: string, duration: number) => void;
  centerViewTo: (viewRef: React.ComponentRef<ComponentType>, x: number, y: number, axisDependency: string) => void;
  centerViewToAnimated: (viewRef: React.ComponentRef<ComponentType>, x: number, y: number, axisDependency: string, duration: number) => void;
  
  // Scale enhancer commands
  fitScreen: (viewRef: React.ComponentRef<ComponentType>) => void;
  
  // Highlight enhancer commands
  highlights: (viewRef: React.ComponentRef<ComponentType>, config: any[]) => void;
  
  // Scroll enhancer commands
  setDataAndLockIndex: (viewRef: React.ComponentRef<ComponentType>, data: ScatterData) => void;
}

// @ts-ignore -- migration to react-native 0.73+
export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: [
    'moveViewTo',
    'moveViewToX',
    'moveViewToAnimated',
    'centerViewTo',
    'centerViewToAnimated',
    'fitScreen',
    'highlights',
    'setDataAndLockIndex'
  ],
});

export default codegenNativeComponent<NativeProps>(
  'RNScatterChart'
) as HostComponent<NativeProps>;
