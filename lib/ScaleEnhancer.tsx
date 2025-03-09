export default function ScaleEnhancer(Chart) {
  return class ScaleExtended extends Chart {
    fitScreen() {
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.fitScreen();
      }
    }
  }
}