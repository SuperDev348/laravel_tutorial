<script>
import Layout from "../layouts/main";
import appConfig from "@/app.config";

import Chart from "@/components/widgets/chart";
import Stat from "@/components/widgets/widget-stat";
import Transaction from "@/components/widgets/transaction";
import Chat from "@/components/widgets/chat";
import Activity from "@/components/widgets/activity";

import { sparklineChartData, salesDonutChart, radialBarChart } from "./data";

export default {
  page: {
    title: "Dashboard",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
    Chart,
    Stat,
    Transaction,
    Chat,
    Activity
  },
  data() {
    return {
      sparklineChartData: sparklineChartData,
      salesDonutChart: salesDonutChart,
      radialBarChart: radialBarChart,
      statData: [
        {
          title: "Orders",
          image: require("@/assets/images/services-icon/01.png"),
          value: "1,685",
          subText: "+ 12%",
          color: "success"
        },
        {
          title: "Revenue",
          image: require("@/assets/images/services-icon/02.png"),
          value: "52,368",
          subText: "- 28%",
          color: "danger"
        },
        {
          title: "Average Price",
          image: require("@/assets/images/services-icon/03.png"),
          value: "15.8",
          subText: "00%",
          color: "info"
        },
        {
          title: "Product Sold",
          image: require("@/assets/images/services-icon/04.png"),
          value: "2436",
          subText: "+ 84%",
          color: "warning"
        }
      ],
      transactions: [
        {
          id: "#14256",
          image: require("@/assets/images/users/user-2.jpg"),
          name: "Philip Smead",
          date: "15/1/2018",
          amount: "$94",
          status: "Delivered"
        },
        {
          id: "#14257",
          image: require("@/assets/images/users/user-3.jpg"),
          name: "Brent Shipley",
          date: "16/1/2019",
          amount: "$112",
          status: "Pending"
        },
        {
          id: "#14258",
          image: require("@/assets/images/users/user-4.jpg"),
          name: "Robert Sitton",
          date: "17/1/2019",
          amount: "$116",
          status: "Delivered"
        },
        {
          id: "#14259",
          image: require("@/assets/images/users/user-5.jpg"),
          name: "Alberto Jackson",
          date: "18/1/2019",
          amount: "$109",
          status: "Cancel"
        },
        {
          id: "#14260",
          image: require("@/assets/images/users/user-6.jpg"),
          name: "David Sanchez",
          date: "15/1/2018",
          amount: "$94",
          status: "Delivered"
        },
        {
          id: "#14261",
          image: require("@/assets/images/users/user-2.jpg"),
          name: "Philip Smead",
          date: "15/1/2018",
          amount: "$94",
          status: "Pending"
        }
      ],
      chatMessages: [
        {
          id: 1,
          image: require("@/assets/images/users/user-2.jpg"),
          name: "John Deo",
          message: "Hello!",
          time: "10:00"
        },
        {
          id: 2,
          image: require("@/assets/images/users/user-3.jpg"),
          name: "Smith",
          message: "Hi, How are you? What about our next meeting?",
          time: "10:01",
          odd: true
        },
        {
          id: 3,
          image: require("@/assets/images/users/user-2.jpg"),
          name: "John Deo",
          message: "Yeah everything is fine",
          time: "10:01"
        },
        {
          id: 4,
          image: require("@/assets/images/users/user-3.jpg"),
          name: "Smith",
          message: "Wow that's great",
          time: "10:02",
          odd: true
        },
        {
          id: 5,
          image: require("@/assets/images/users/user-2.jpg"),
          name: "John Deo",
          message: "Yup!",
          time: "10:03"
        }
      ],
      activityData: [
        {
          date: "Jan 22",
          text: "Responded to need “Volunteer Activities”"
        },
        {
          date: "Jan 20",
          text:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui deleniti atque... "
        },
        {
          date: "Jan 19",
          text: "Joined the group “Boardsmanship Forum”"
        },
        {
          date: "Jan 17",
          text: "Responded to need “In-Kind Opportunity”"
        },
        {
          date: "Jan 16",
          text: "Sed ut perspiciatis unde omnis iste natus error sit rem."
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <!-- start page title -->
    <div class="row align-items-center">
      <div class="col-sm-6">
        <div class="page-title-box">
          <h4 class="font-size-18">Dashboard</h4>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item active">Welcome to Veltrix Dashboard</li>
          </ol>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="float-right d-none d-md-block">
          <b-dropdown right variant="primary">
            <template v-slot:button-content>
              <i class="mdi mdi-settings mr-2"></i> Settings
            </template>
            <a class="dropdown-item" href="javascript: void(0);">Action</a>
            <a class="dropdown-item" href="javascript: void(0);">Another action</a>
            <a class="dropdown-item" href="javascript: void(0);">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="javascript: void(0);">Separated link</a>
          </b-dropdown>
        </div>
      </div>
    </div>
    <!-- end page title -->
    <div class="row">
      <div class="col-xl-3 col-md-6" v-for="stat of statData" :key="stat.icon">
        <Stat
          :title="stat.title"
          :image="stat.image"
          :subText="stat.subText"
          :value="stat.value"
          :color="stat.color"
        />
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-9">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Monthly Earning</h4>
            <div class="row">
              <div class="col-lg-7">
                <div>
                  <Chart />
                </div>
              </div>
              <div class="col-lg-5">
                <div class="row">
                  <div class="col-md-6">
                    <div class="text-center">
                      <p class="text-muted mb-4">This month</p>
                      <h3>$34,252</h3>
                      <p
                        class="text-muted mb-4"
                      >It will be as simple as in fact it will be occidental.</p>
                      <apexchart
                        class="apex-charts"
                        height="150"
                        type="radialBar"
                        :series="[80]"
                        :options="radialBarChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="text-center">
                      <p class="text-muted mb-4">Last month</p>
                      <h3>$36,253</h3>
                      <p
                        class="text-muted mb-4"
                      >It will be as simple as in fact it will be occidental.</p>
                      <!-- Radial bar chart  -->
                      <apexchart
                        class="apex-charts"
                        height="150"
                        type="radialBar"
                        :series="[55]"
                        :options="radialBarChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end card -->
      </div>

      <div class="col-xl-3">
        <div class="card">
          <div class="card-body">
            <div>
              <h4 class="card-title mb-4">Sales Analytics</h4>
            </div>
            <div class="wid-peity mb-4">
              <div class="row">
                <div class="col-md-6">
                  <div>
                    <p class="text-muted">Online</p>
                    <h5 class="mb-4">1,542</h5>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-4">
                    <!-- sparkline chart -->
                    <sparkline height="65" width="122">
                      <sparklineLine
                        :data="sparklineChartData.sparkChart1"
                        :limit="sparklineChartData.sparkChart1.length"
                        :styles="sparklineChartData.style"
                        :refLineStyles="sparklineChartData.reflineStyle"
                      />
                    </sparkline>
                  </div>
                </div>
              </div>
            </div>
            <div class="wid-peity mb-4">
              <div class="row">
                <div class="col-md-6">
                  <div>
                    <p class="text-muted">Offline</p>
                    <h5 class="mb-4">6,451</h5>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-4">
                    <sparkline height="65" width="122">
                      <sparklineLine
                        :data="sparklineChartData.sparkChart2"
                        :limit="sparklineChartData.sparkChart2.length"
                        :styles="sparklineChartData.style"
                        :refLineStyles="sparklineChartData.reflineStyle"
                      />
                    </sparkline>
                  </div>
                </div>
              </div>
            </div>
            <div class>
              <div class="row">
                <div class="col-md-6">
                  <div>
                    <p class="text-muted">Marketing</p>
                    <h5>84,574</h5>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class>
                    <sparkline height="65" width="122">
                      <sparklineLine
                        :data="sparklineChartData.sparkChart3"
                        :limit="sparklineChartData.sparkChart3.length"
                        :styles="sparklineChartData.style"
                        :refLineStyles="sparklineChartData.reflineStyle"
                      />
                    </sparkline>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-3">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Sales Report</h4>

            <div class="cleafix">
              <p class="float-left">
                <i class="mdi mdi-calendar mr-1 text-primary"></i> Jan 01 - Jan 31
              </p>
              <h5 class="font-18 text-right">$4230</h5>
            </div>
            <!-- Sales donut chart -->
            <chartist
              ratio="ct-chart wid"
              :data="salesDonutChart.data"
              :options="salesDonutChart.options"
              type="Pie"
            ></chartist>
            <div class="mt-4">
              <table class="table mb-0">
                <tbody>
                  <tr>
                    <td>
                      <span class="badge badge-primary">Desk</span>
                    </td>
                    <td>Desktop</td>
                    <td class="text-right">54.5%</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="badge badge-success">Mob</span>
                    </td>
                    <td>Mobile</td>
                    <td class="text-right">28.0%</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="badge badge-warning">Tab</span>
                    </td>
                    <td>Tablets</td>
                    <td class="text-right">17.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <Activity :activityData="activityData" />
      </div>

      <div class="col-xl-5">
        <div class="row">
          <div class="col-md-6">
            <div class="card text-center">
              <div class="card-body">
                <div class="py-4">
                  <i class="ion ion-ios-checkmark-circle-outline display-4 text-success"></i>

                  <h5 class="text-primary mt-4">Order Successful</h5>
                  <p class="text-muted">Thanks you so much for your order.</p>
                  <div class="mt-4">
                    <a href class="btn btn-primary btn-sm">Chack Status</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card bg-primary">
              <div class="card-body">
                <div class="text-center text-white py-4">
                  <h5 class="mt-0 mb-4 text-white-50 font-size-16">Top Product Sale</h5>
                  <h1>1452</h1>
                  <p class="font-size-14 pt-1">Computer</p>
                  <p class="text-white-50 mb-0">
                    At solmen va esser necessi far uniform myth...
                    <a
                      href="#"
                      class="text-white"
                    >View more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-4">Client Reviews</h4>
                <p
                  class="text-muted mb-3 pb-4"
                >" Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators it would be necessary. "</p>
                <div class="float-right mt-2">
                  <a href="#" class="text-primary">
                    <i class="mdi mdi-arrow-right h5"></i>
                  </a>
                </div>
                <h6 class="mb-0">
                  <img
                    src="@/assets/images/users/user-3.jpg"
                    alt
                    class="avatar-sm rounded-circle mr-2"
                  /> James Athey
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-8">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Latest Trasaction</h4>
            <Transaction :transactions="transactions" />
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <Chat :chat-messages="chatMessages" />
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>