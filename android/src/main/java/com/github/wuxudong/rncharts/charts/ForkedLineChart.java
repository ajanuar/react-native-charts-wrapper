package com.github.wuxudong.rncharts.charts;

public class ForkedLineChart extends LineChart implements LineDataProvider {
    @Override
    protected void init() {
        super.init();

        mRenderer = new LineChartRenderer(this, mAnimator, mViewPortHandler);
    }
}