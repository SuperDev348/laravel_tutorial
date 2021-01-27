<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Pricing component
 */
export default {
  page: {
    title: "Pricing",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Pricing",
      items: [
        {
          text: "Veltrix",
          href: "/"
        },
        {
          text: "Extra Pages",
          href: "/"
        },
        {
          text: "Pricing",
          active: true
        }
      ],
      pricingData: [
        {
          icon: "ion ion-ios-airplane",
          title: "Starter",
          price: "19"
        },
        {
          icon: "ion ion-ios-trophy",
          title: "Professional",
          price: "29"
        },
        {
          icon: "ion ion-ios-umbrella",
          title: "Enterprise",
          price: "39"
        },
        {
          icon: "ion ion-ios-cube",
          title: "Unlimited",
          price: "49"
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
      <div class="col-xl-3 col-md-6" v-for="item of pricingData" :key="item.title">
        <div class="card pricing-box">
          <div class="card-body p-4">
            <div class="media mt-2">
              <i :class="`${item.icon} h2 align-self-center`"></i>
              <div class="media-body text-right">
                <h4 class="mt-0">{{item.title}}</h4>
                <p class="text-muted mb-0">Sed ut neque unde</p>
              </div>
            </div>
            <div class="pricing-features mt-5 pt-2">
              <p>
                <i class="mdi mdi-check text-primary mr-2"></i> Free Live Support
              </p>
              <p>
                <i class="mdi mdi-check text-primary mr-2"></i> Unlimited User
              </p>
              <p>
                <i class="mdi mdi-check text-primary mr-2"></i> No Time Tracking
              </p>
              <p>
                <i class="mdi mdi-close text-primary mr-2"></i> Free Setup
              </p>
            </div>
            <div class="text-center mt-5">
              <h1 class="mb-0">
                <sup>
                  <small>$</small>
                </sup>{{item.price}}/
                <span class="font-size-16">Per month</span>
              </h1>
            </div>
            <div class="mt-5">
              <a href="#" class="btn btn-primary btn-block">Sign up Now</a>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>