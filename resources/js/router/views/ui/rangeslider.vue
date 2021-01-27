<script>
import VueSlideBar from "vue-slide-bar";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Range-slider component
 */
export default {
  page: {
    title: "Range Slider",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { VueSlideBar, Layout, PageHeader },
  data() {
    return {
      title: "Range-Slider",
      items: [
        {
          text: "Veltrix",
          href: "/"
        },
        {
          text: "UI Elements",
          href: "/"
        },
        {
          text: "Range-Slider",
          active: true
        }
      ],
      simpleValue: 10,
      sliderCustomzie: 300,
      sliderWithLabel: {
        value: 45,
        data: [15, 30, 45, 60, 75, 90, 120],
        range: [
          {
            label: "15 mins"
          },
          {
            label: "30 mins",
            isHide: true
          },
          {
            label: "45 mins"
          },
          {
            label: "1 hr",
            isHide: true
          },
          {
            label: "1 hr 15 mins"
          },
          {
            label: "1 hr 30 mins",
            isHide: true
          },
          {
            label: "2 hrs"
          }
        ],
        rangeValue: {}
      },
      customData: {
        value: 3,
        data: [1, 2, 3, 4, 5, 6, 7],
        range: [
          {
            label: "Sunday"
          },
          {
            label: "Monday"
          },
          {
            label: "Tuesday"
          },
          {
            label: "Wednesday"
          },
          {
            label: "Thursday"
          },
          {
            label: "Friday"
          },
          {
            label: "Saturday"
          }
        ]
      },
      loader: null,
      loadingValue: 0,
      customStyle: 800,
      lineHeight: 10
    };
  },
  methods: {
    /**
     * Range and label slider set range
     */
    callbackRange(val) {
      this.sliderWithLabel.rangeValue = val;
    },
    /**
     * Loading slider
     */
    startLoad() {
      this.loader = setInterval(() => {
        this.loadingValue++;
        if (this.loadingValue === 100) {
          clearInterval(this.loader);
        }
      }, 100);
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Default</h4>
            <p class="card-title-desc mb-2">Start without params</p>
            <vue-slide-bar v-model="simpleValue" />
          </div>
        </div>
        <!-- end card-body-->
      </div>
      <!-- end col -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Min-Max</h4>
            <p class="card-title-desc mb-2">Set min value, max value and start point</p>
            <vue-slide-bar v-model="sliderCustomzie" :min="100" :max="500" />
          </div>
          <!-- end card-body-->
        </div>
      </div>
      <!-- end col -->
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Range and Label</h4>
            <p class="card-title-desc mb-2">Set range, data</p>
            <div class="px-3">
              <vue-slide-bar
                v-model="sliderWithLabel.value"
                :data="sliderWithLabel.data"
                :range="sliderWithLabel.range"
                @callbackRange="callbackRange"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Loading</h4>
            <p class="card-title-desc mb-2">Set start</p>
            <vue-slide-bar v-model="loadingValue" :show-tooltip="true" :is-disabled="true" />
            <br />
            <b-button size="sm" variant="light" @click="startLoad">Start</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Custom Style</h4>
            <p class="card-title-desc mb-2">Set line-heigth</p>
            <vue-slide-bar v-model="customStyle" :min="100" :max="1000" :line-height="lineHeight" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body pb-0">
            <h4 class="card-title">Custom Data</h4>
            <p class="card-title-desc mb-2">Set label</p>
            <div class="px-3">
              <vue-slide-bar :data="customData.data" :range="customData.range" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>