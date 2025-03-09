
export default function ScrollEnhancer(Chart) {
  return class ScrollExtended extends Chart {
    setDataAndLockIndex(data) {
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.setDataAndLockIndex(data);
      }
    }
  }
}