import { UIManager, findNodeHandle} from 'react-native';

export default function HighlightEnhancer(Chart) {
  return class HighlightExtended extends Chart {
    highlights(config) {
      // For React Native New Architecture (Fabric)
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.highlights(config);
      } 
      // Fallback for old architecture
      else if (findNodeHandle(this.getNativeComponentRef())) {
        const viewId = findNodeHandle(this.getNativeComponentRef());
        const viewConfig = UIManager.getViewManagerConfig(this.getNativeComponentName());
        UIManager.dispatchViewManagerCommand(
          viewId,
          viewConfig.Commands.highlights,
          [config]
        );
      }
    }
  }
}