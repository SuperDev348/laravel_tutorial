<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import barChart from "./bar-chart";
import lineChart from "./line-chart";
import pieChart from "./pie-chart";
import donutChart from "./donut-chart";
import polarChart from "./polar-chart";
import radarChart from "./radar-chart";

/**
 * Chart-js chart component
 */
export default {
  page: {
    title: "Chartjs chart",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
    PageHeader,
    barChart,
    lineChart,
    pieChart,
    donutChart,
    polarChart,
    radarChart
  },
  data() {
    return {
      title: "Chartjs Charts",
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
          text: "Chartjs Charts",
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
          <div class="card-body">
            <h4 class="card-title mb-4">Line Chart</h4>
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
            <!-- Line Chart -->
            <lineChart :height="300" />
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Bar Chart</h4>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">2541</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">84845</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">12001</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </div>
            </div>
            <!-- Bar Chart -->
            <barChart :height="300" />
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
            <h4 class="card-title mb-4">Pie Chart</h4>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">2536</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">69421</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">89854</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </div>
            </div>
            <!-- Pie Chart -->
            <pieChart :height="140" />
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Donut Chart</h4>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">9595</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">36524</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">62541</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </div>
            </div>
            <!-- Donut Chart -->
            <donutChart :height="140" />
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
            <h4 class="card-title mb-4">Polar area Chart</h4>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">4852</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">3652</h5>
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
            <!-- Polar area Chart -->
            <polarChart :height="165" />
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Radar Chart</h4>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">694</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">55210</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">489498</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </div>
            </div>
            <!-- Radar Chart -->
            <radarChart :height="165" />
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
