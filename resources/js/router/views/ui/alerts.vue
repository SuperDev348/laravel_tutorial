<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Alerts component
 */
export default {
  page: {
    title: "Alerts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Alerts",
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
          text: "Alerts",
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
            <h4 class="card-title">Examples</h4>
            <p class="card-title-desc">
              Alerts are available for any length of
              text, as well as an optional dismiss button. For proper styling, use one
              of the four
              <strong>required</strong> contextual classes (e.g.,
              <code class="highlighter-rouge">.alert-success</code>). For inline
              dismissal, use the alerts jQuery plugin.
            </p>

            <div class>
              <b-alert show variant="success">
                <strong>Well done!</strong> You successfully read this important alert message.
              </b-alert>
              <b-alert variant="info" show>
                <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
              </b-alert>
              <b-alert variant="warning" show>
                <strong>Warning!</strong> Better check yourself, you're not looking too good.
              </b-alert>
              <b-alert variant="danger" class="mb-0" show>
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
              </b-alert>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Link color</h4>
            <p class="card-title-desc">
              Use the
              <code class="highlighter-rouge">.alert-link</code> utility class to
              quickly provide matching colored links within any alert.
            </p>

            <div class>
              <div class="alert alert-success" role="alert">
                <strong>Well done!</strong> You successfully read
                <a href="#" class="alert-link">this important alert message</a>.
              </div>
              <div class="alert alert-info" role="alert">
                <strong>Heads up!</strong> This
                <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
              </div>
              <div class="alert alert-warning" role="alert">
                <strong>Warning!</strong> Better check yourself, you're
                <a href="#" class="alert-link">not looking too good</a>.
              </div>
              <div class="alert alert-danger mb-0" role="alert">
                <strong>Oh snap!</strong>
                <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Dismissing</h4>
            <p class="card-title-desc">You can see this in action with a live demo:</p>

            <div class>
              <b-alert show variant="success" dismissible>
                <strong>Well done!</strong> You successfully read this important alert message.
              </b-alert>
              <b-alert variant="info" show dismissible>
                <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
              </b-alert>
              <b-alert variant="warning" show dismissible>
                <strong>Warning!</strong> Better check yourself, you're not looking too good.
              </b-alert>
              <b-alert variant="danger" class="mb-0" show dismissible>
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
              </b-alert>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Additional content</h4>
            <p
              class="card-title-desc"
            >Alerts can also contain additional HTML elements like headings and paragraphs.</p>

            <b-alert show variant="success">
              <h4 class="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message. This example text is going to
                run a bit longer so that you can see how spacing within an alert works with this kind of
                content.
              </p>
              <p
                class="mb-0"
              >Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </b-alert>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Examples</h4>
            <p class="card-title-desc">
              Alerts are available for any length of
              text, as well as an optional dismiss button. For proper styling, use one
              of the four
              <strong>required</strong> contextual classes (e.g.,
              <code class="highlighter-rouge">.alert-success .bg-**</code>). For inline
              dismissal, use the alerts jQuery plugin.
            </p>

            <div class>
              <b-alert show class="bg-success text-white border-0">
                <strong>Well done!</strong> You successfully read this important alert message.
              </b-alert>
              <b-alert show class="bg-info text-white border-0" role="alert">
                <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
              </b-alert>
              <b-alert show class="bg-warning text-white border-0" role="alert">
                <strong>Warning!</strong> Better check yourself, you're not looking too good.
              </b-alert>
              <b-alert show class="bg-danger text-white mb-0 border-0" role="alert">
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
              </b-alert>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>