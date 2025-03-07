import { UIManager, findNodeHandle } from 'react-native';

export default function ScrollEnhancer(Chart) {
  return class ScrollExtended extends Chart {
    setDataAndLockIndex(data) {
      // For React Native New Architecture (Fabric)
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.setDataAndLockIndex(data);
      } 
      // Fallback for old architecture
      else if (findNodeHandle(this.getNativeComponentRef())) {
        const viewId = findNodeHandle(this.getNativeComponentRef());
        const viewConfig = UIManager.getViewManagerConfig(this.getNativeComponentName());
        UIManager.dispatchViewManagerCommand(
          viewId,
          viewConfig.Commands.setDataAndLockIndex,
          [data]
        );
      }
    }
  }
}