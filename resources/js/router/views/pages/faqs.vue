<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * FAQs component
 */
export default {
  page: {
    title: "FAQs",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "FAQs",
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
          text: "FAQs",
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
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="row justify-content-center mb-5">
              <div class="col-lg-5">
                <div class="text-center faq-title pt-4 pb-4">
                  <div class="pt-3 pb-3">
                    <i class="ti-comments text-primary h3"></i>
                  </div>
                  <h4>Can't find what you are looking for?</h4>
                  <p
                    class="text-muted"
                  >If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                  <button type="button" class="btn btn-primary mt-2 mr-1">Email Us</button>
                  <button type="button" class="btn btn-success mt-2">Send us a tweet</button>
                </div>
              </div>
            </div>
            <!-- end row -->

            <div class="row justify-content-center">
              <div class="col-lg-5">
                <h5 class="mt-0 font-size-18 mb-4">
                  <i class="ti-agenda text-primary mr-2"></i> General Questions
                </h5>
                <div>
                  <b-card no-body class="mb-1 faq">
                    <b-card-header role="tab">
                      <h6 class="m-0 font-size-16">
                        <a
                          v-b-toggle.accordion-1
                          class="text-dark"
                          href="javascript: void(0);"
                        >What is Lorem Ipsum?</a>
                      </h6>
                    </b-card-header>
                    <b-collapse id="accordion-1" visible accordion="my-accordion">
                      <b-card-body>
                        <b-card-text>The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1 faq">
                    <b-card-header role="tab">
                      <h6 class="m-0 font-size-16">
                        <a
                          v-b-toggle.accordion-2
                          class="text-dark"
                          href="javascript: void(0);"
                        >Where does it come from?</a>
                      </h6>
                    </b-card-header>
                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-card-text>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar</b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1 faq">
                    <b-card-header role="tab">
                      <h6 class="m-0 font-size-16">
                        <a
                          v-b-toggle.accordion-3
                          class="text-dark"
                          href="javascript: void(0);"
                        >Why do we use it?</a>
                      </h6>
                    </b-card-header>
                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-card-text>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple</b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1 faq">
                    <b-card-header role="tab">
                      <h6 class="m-0 font-size-16">
                        <a
                          v-b-toggle.accordion-4
                          class="text-dark"
                          href="javascript: void(0);"
                        >Where can I get some?</a>
                      </h6>
                    </b-card-header>
                    <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-card-text>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar</b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </div>
              <div class="col-lg-5 offset-lg-1">
                <h5 class="mt-0 font-size-18 mb-4">
                  <i class="ti-bookmark-alt text-primary mr-2"></i> Pricing &amp; Plans
                </h5>
                <b-card no-body class="mb-1 faq">
                  <b-card-header role="tab">
                    <h6 class="m-0 font-size-16">
                      <a
                        v-b-toggle.pricing-accordion-1
                        class="text-dark"
                        href="javascript: void(0);"
                      >Where can I get some?</a>
                    </h6>
                  </b-card-header>
                  <b-collapse id="pricing-accordion-1" visible accordion="pricing" role="tabpanel">
                    <b-card-body>
                      <b-card-text>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1 faq">
                  <b-card-header role="tab">
                    <h6 class="m-0 font-size-16">
                      <a
                        v-b-toggle.pricing-accordion-2
                        class="text-dark"
                        href="javascript: void(0);"
                      >Why do we use it?</a>
                    </h6>
                  </b-card-header>
                  <b-collapse id="pricing-accordion-2" accordion="pricing" role="tabpanel">
                    <b-card-body>
                      <b-card-text>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1 faq">
                  <b-card-header role="tab">
                    <h6 class="m-0 font-size-16">
                      <a
                        v-b-toggle.pricing-accordion-3
                        class="text-dark"
                        href="javascript: void(0);"
                      >Where does it come from?</a>
                    </h6>
                  </b-card-header>
                  <b-collapse id="pricing-accordion-3" accordion="pricing" role="tabpanel">
                    <b-card-body>
                      <b-card-text>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1 faq">
                  <b-card-header role="tab">
                    <h6 class="m-0 font-size-16">
                      <a
                        v-b-toggle.pricing-accordion-4
                        class="text-dark"
                        href="javascript: void(0);"
                      >What is Lorem Ipsum?</a>
                    </h6>
                  </b-card-header>
                  <b-collapse id="pricing-accordion-4" accordion="pricing">
                    <b-card-body>
                      <b-card-text>The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>