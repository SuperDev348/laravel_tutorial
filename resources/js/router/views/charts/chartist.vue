<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import Chart from "@/components/widgets/chart";

import {
  overlappingBarChart,
  stackBarChart,
  donutAnimateChart,
  simplePieChart,
  smilAnimationChart,
  simpleLineChart
} from "./data-chartist";

/**
 * Chartist Chart component
 */
export default {
  page: {
    title: "Chartist chart",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, Chart },
  data() {
    return {
      overlappingBarChart: overlappingBarChart,
      stackBarChart: stackBarChart,
      donutAnimateChart: donutAnimateChart,
      simplePieChart: simplePieChart,
      smilAnimationChart: smilAnimationChart,
      simpleLineChart: simpleLineChart,
      title: "Chartist Chart",
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
          text: "Chartist Chart",
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
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Overlapping bars on mobile</h4>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">86541</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">2541</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">102030</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </div>
            </div>
            <!-- Overlapping bars on mobile -->

            <chartist
              ratio="ct-chart"
              :data="overlappingBarChart.data"
              :options="overlappingBarChart.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Stacked bar chart</h4>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">5241</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">65411</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">51654</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </div>
            </div>
            <!-- Stacked bar chart -->

            <chartist
              ratio="ct-chart"
              :data="stackBarChart.data"
              :options="stackBarChart.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Animating a Donut with Svg.animate</h4>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">748949</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">5181</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">101025</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </div>
            </div>
            <!-- Donut chart -->
            <chartist
              ratio="ct-chart"
              :data="donutAnimateChart.data"
              :options="donutAnimateChart.options"
              type="Pie"
            ></chartist>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Simple pie chart</h4>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">48484</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">48652</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">85412</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </div>
            </div>
            <!-- Simple pie chart -->
            <chartist
              ratio="ct-chart"
              :data="simplePieChart.data"
              :options="simplePieChart.options"
              type="Pie"
            ></chartist>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Advanced Smil Animations</h4>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">45410</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">4442</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">3201</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </div>
            </div>
            <!-- Advanced Smil Animations -->
            <chartist
              ratio="ct-chart"
              :data="smilAnimationChart.data"
              :options="smilAnimationChart.options"
              type="Line"
            ></chartist>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Simple line chart</h4>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">44242</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">75221</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">65212</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </div>
            </div>
            <!-- Simple line chart -->
            <chartist
              ratio="ct-chart"
              :data="simpleLineChart.data"
              :options="simpleLineChart.options"
              type="Line"
            ></chartist>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Line chart with area</h4>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">4234</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">64521</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">94521</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </div>
            </div>
            <!-- line area chart -->
            <Chart />
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>