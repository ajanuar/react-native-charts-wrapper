import { ChartProps } from './ChartBase';

// TypeScript interface for PieRadarChartBase props
export interface PieRadarChartBaseProps extends ChartProps {
  minOffset?: number;
  rotationEnabled?: boolean;
  rotationAngle?: number;
}
