<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Tabs & accordions component
 */
export default {
  page: {
    title: "Tabs & Accordions",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Tabs & accordions",
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
          text: "Tabs & accordions",
          active: true
        }
      ],
      text: `
         Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
        `,
      content: `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit.`
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
            <h4 class="card-title">Default Tabs</h4>
            <p class="card-title-desc">
              Use the tab JavaScript plugin—include
              it individually or through the compiled
              <code
                class="highlighter-rouge"
              >bootstrap.js</code>
              file—to extend our navigational tabs and pills to create tabbable panes
              of local content, even via dropdown menus.
            </p>
            <b-tabs content-class="p-3">
              <b-tab active class="border-0">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Home</span>
                </template>
                <p class="mb-0">{{ text }}</p>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Profile</span>
                </template>
                <p class="mb-0">{{ content }}</p>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Messages</span>
                </template>
                <p class="mb-0">{{ text }}</p>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Settings</span>
                </template>
                <p class="mb-0">{{ content }}</p>
              </b-tab>
            </b-tabs>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Justify Tabs</h4>
            <p class="card-title-desc">
              Use the tab JavaScript plugin—include
              it individually or through the compiled
              <code
                class="highlighter-rouge"
              >bootstrap.js</code>
              file—to extend our navigational tabs and pills to create tabbable panes
              of local content, even via dropdown menus.
            </p>
            <b-tabs justified pills class="navtab-bg" content-class="p-3">
              <b-tab active>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Home</span>
                </template>
                <p class="mb-0">{{ text }}</p>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Profile</span>
                </template>
                <p class="mb-0">{{ content }}</p>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Messages</span>
                </template>
                <p class="mb-0">{{ text }}</p>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Settings</span>
                </template>
                <p class="mb-0">{{ content }}</p>
              </b-tab>
            </b-tabs>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Custom Tabs</h4>
            <p class="card-title-desc">Example of custom tabs</p>
            <b-tabs nav-class="nav-tabs-custom" content-class="p-3">
              <b-tab active>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Home</span>
                </template>
                <p class="mb-0">{{ text }}</p>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Profile</span>
                </template>
                <p class="mb-0">{{ content }}</p>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Messages</span>
                </template>
                <p class="mb-0">{{ text }}</p>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Settings</span>
                </template>
                <p class="mb-0">{{ content }}</p>
              </b-tab>
            </b-tabs>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Custom Tabs Justified</h4>
            <p class="card-title-desc">Example of custom tabs</p>
            <b-tabs justified nav-class="nav-tabs-custom" content-class="p-3">
              <b-tab active>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Home</span>
                </template>
                <p class="mb-0">{{ text }}</p>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Profile</span>
                </template>
                <p class="mb-0">{{ content }}</p>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Messages</span>
                </template>
                <p class="mb-0">{{ text }}</p>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Settings</span>
                </template>
                <p class="mb-0">{{ content }}</p>
              </b-tab>
            </b-tabs>
          </div>
          <!-- end card-body -->
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
            <h4 class="card-title">Default Collapse</h4>
            <p class="card-title-desc">
              You can use a link with the
              <code class="highlighter-rouge">href</code>
              attribute, or a button with the
              <code
                class="highlighter-rouge"
              >data-target</code>
              attribute. In both cases, the
              <code
                class="highlighter-rouge"
              >data-toggle="collapse"</code>
              is required.
            </p>

            <p>
              <b-button v-b-toggle.collapse class="m-1" variant="primary">Link with href</b-button>

              <!-- Using value -->
              <b-button
                v-b-toggle="'collapse'"
                class="m-1"
                variant="primary"
              >Button with data-target</b-button>
            </p>
            <!-- Element to collapse -->
            <b-collapse id="collapse" visible class="mt-1">
              <b-card>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</b-card>
            </b-collapse>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Accordion example</h4>
            <p class="card-title-desc">Extend the default collapse behavior to create an accordion.</p>

            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0 font-14">
                    <a
                      v-b-toggle.accordion-1
                      class="text-dark"
                      href="javascript: void(0);"
                    >Collapsible Group Item #1</a>
                  </h6>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0 font-14">
                    <a
                      v-b-toggle.accordion-2
                      class="text-dark"
                      href="javascript: void(0);"
                    >Collapsible Group Item #2</a>
                  </h6>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0 font-14">
                    <a
                      v-b-toggle.accordion-3
                      class="text-dark"
                      href="javascript: void(0);"
                    >Collapsible Group Item #3</a>
                  </h6>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>