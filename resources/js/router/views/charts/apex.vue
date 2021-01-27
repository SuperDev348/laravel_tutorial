<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import {
  linewithDataChart,
  stackedAreaChart,
  basicColumChart,
  nagativeValueBarChart,
  lineColumAreaChart,
  simpleBubbleChart,
  simplePieChart,
  basicRadialBarChart,
  strokedCircularGuage
} from "./data-apex";

/**
 * Apex-chart component
 */
export default {
  page: {
    title: "Apex chart",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      linewithDataChart: linewithDataChart,
      stackedAreaChart: stackedAreaChart,
      basicColumChart: basicColumChart,
      nagativeValueBarChart: nagativeValueBarChart,
      lineColumAreaChart: lineColumAreaChart,
      simplePieChart: simplePieChart,
      simpleBubbleChart: simpleBubbleChart,
      basicRadialBarChart: basicRadialBarChart,
      strokedCircularGuage: strokedCircularGuage,
      title: "Apexcharts",
      items: [
        {
          text: "Veltrix",
          href: "/"
        },
        {
          text: "Charts",
          href: "/"
        },
        {
          text: "Apexcharts",
          active: true
        }
      ]
    };
  }
};
</script>
<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Line with Data Labels</h4>
            <!-- line with data labels chart -->
            <apexchart
              class="apex-charts"
              dir="ltr"
              height="380"
              type="line"
              :series="linewithDataChart.series"
              :options="linewithDataChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Stacked Area</h4>
            <!-- Stacked Area chart -->
            <apexchart
              class="apex-charts"
              dir="ltr"
              height="380"
              type="area"
              :series="stackedAreaChart.series"
              :options="stackedAreaChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Basic Column Chart</h4>
            <!-- basic column chart -->
            <apexchart
              class="apex-charts"
              dir="ltr"
              height="380"
              type="bar"
              :series="basicColumChart.series"
              :options="basicColumChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Bar with Negative Values</h4>
            <!-- Bar with Negative Values chart -->
            <apexchart
              class="apex-charts"
              dir="ltr"
              height="380"
              type="bar"
              :series="nagativeValueBarChart.series"
              :options="nagativeValueBarChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Line, Column & Area Chart</h4>
            <!-- Line, Column & Area Chart -->
            <apexchart
              class="apex-charts"
              dir="ltr"
              height="380"
              type="line"
              :series="lineColumAreaChart.series"
              :options="lineColumAreaChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Simple Bubble Chart</h4>
            <!-- Simple Bubble Chart -->
            <apexchart
              class="apex-charts"
              dir="ltr"
              height="380"
              type="bubble"
              :series="simpleBubbleChart.series"
              :options="simpleBubbleChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Simple Pie Chart</h4>
            <!-- Simple Pie Chart -->
            <apexchart
              class="apex-charts"
              height="320"
              type="pie"
              :series="simplePieChart.series"
              :options="simplePieChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Basic RadialBar Chart</h4>
            <!-- Basic RadialBar Chart -->
            <apexchart
              class="apex-charts"
              height="335"
              type="radialBar"
              :series="basicRadialBarChart.series"
              :options="basicRadialBarChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Stroked Circular Guage</h4>
            <!-- Stroked Circular Guage -->
            <apexchart
              class="apex-charts"
              height="350"
              type="radialBar"
              :series="strokedCircularGuage.series"
              :options="strokedCircularGuage.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>