import { UIManager, findNodeHandle} from 'react-native';

export default function MoveEnhancer(Chart) {
  return class MoveExtended extends Chart {
    // x, y, left/right
    moveViewTo(x, y, axisDependency) {
      // For React Native New Architecture (Fabric)
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.moveViewTo(x, y, axisDependency);
      } 
      // Fallback for old architecture
      else if (findNodeHandle(this.getNativeComponentRef())) {
        const viewId = findNodeHandle(this.getNativeComponentRef());
        const viewConfig = UIManager.getViewManagerConfig(this.getNativeComponentName());
        UIManager.dispatchViewManagerCommand(
          viewId,
          viewConfig.Commands.moveViewTo,
          [x, y, axisDependency]
        );
      }
    }

    moveViewToX(x) {
      // For React Native New Architecture (Fabric)
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.moveViewToX(x);
      } 
      // Fallback for old architecture
      else if (findNodeHandle(this.getNativeComponentRef())) {
        const viewId = findNodeHandle(this.getNativeComponentRef());
        const viewConfig = UIManager.getViewManagerConfig(this.getNativeComponentName());
        UIManager.dispatchViewManagerCommand(
          viewId,
          viewConfig.Commands.moveViewToX,
          [x]
        );
      }
    }

    moveViewToAnimated(x, y, axisDependency, duration) {
      // For React Native New Architecture (Fabric)
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.moveViewToAnimated(x, y, axisDependency, duration);
      } 
      // Fallback for old architecture
      else if (findNodeHandle(this.getNativeComponentRef())) {
        const viewId = findNodeHandle(this.getNativeComponentRef());
        const viewConfig = UIManager.getViewManagerConfig(this.getNativeComponentName());
        UIManager.dispatchViewManagerCommand(
          viewId,
          viewConfig.Commands.moveViewToAnimated,
          [x, y, axisDependency, duration]
        );
      }
    }

    centerViewTo(x, y, axisDependency) {
      // For React Native New Architecture (Fabric)
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.centerViewTo(x, y, axisDependency);
      } 
      // Fallback for old architecture
      else if (findNodeHandle(this.getNativeComponentRef())) {
        const viewId = findNodeHandle(this.getNativeComponentRef());
        const viewConfig = UIManager.getViewManagerConfig(this.getNativeComponentName());
        UIManager.dispatchViewManagerCommand(
          viewId,
          viewConfig.Commands.centerViewTo,
          [x, y, axisDependency]
        );
      }
    }

    centerViewToAnimated(x, y, axisDependency, duration) {
      // For React Native New Architecture (Fabric)
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.centerViewToAnimated(x, y, axisDependency, duration);
      } 
      // Fallback for old architecture
      else if (findNodeHandle(this.getNativeComponentRef())) {
        const viewId = findNodeHandle(this.getNativeComponentRef());
        const viewConfig = UIManager.getViewManagerConfig(this.getNativeComponentName());
        UIManager.dispatchViewManagerCommand(
          viewId,
          viewConfig.Commands.centerViewToAnimated,
          [x, y, axisDependency, duration]
        );
      }
    }
  }
}