export default function HighlightEnhancer(Chart) {
  return class HighlightExtended extends Chart {
    highlights(config) {
      if (this.getNativeComponentRef()?.current) {
        this.getNativeComponentRef().current.highlights(config);
      }
    }
  }
}