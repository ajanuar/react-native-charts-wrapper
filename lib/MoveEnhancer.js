export default function MoveEnhancer(Chart) {
  return class MoveExtended extends Chart {
    moveViewTo(x, y, axisDependency) {
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.moveViewTo(x, y, axisDependency);
      }
    }

    moveViewToX(x) {
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.moveViewToX(x);
      }
    }

    moveViewToAnimated(x, y, axisDependency, duration) {
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.moveViewToAnimated(x, y, axisDependency, duration);
      }
    }

    centerViewTo(x, y, axisDependency) {
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.centerViewTo(x, y, axisDependency);
      }
    }

    centerViewToAnimated(x, y, axisDependency, duration) {
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.centerViewToAnimated(x, y, axisDependency, duration);
      }
    }
  }
}