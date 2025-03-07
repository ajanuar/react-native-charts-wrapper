import { UIManager, findNodeHandle } from 'react-native';

export default function ScaleEnhancer(Chart) {
  return class ScaleExtended extends Chart {
    fitScreen() {
      // For React Native New Architecture (Fabric)
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.fitScreen();
      } 
      // Fallback for old architecture
      else if (findNodeHandle(this.getNativeComponentRef())) {
        const viewId = findNodeHandle(this.getNativeComponentRef());
        const viewConfig = UIManager.getViewManagerConfig(this.getNativeComponentName());
        UIManager.dispatchViewManagerCommand(
          viewId,
          viewConfig.Commands.fitScreen,
          []
        );
      }
    }
  }
}