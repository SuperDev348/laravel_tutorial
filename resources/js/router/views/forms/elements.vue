<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Form Elements component
 */
export default {
  page: {
    title: "Form Elements",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Form Elements",
      items: [
        {
          text: "Veltrix",
          href: "/"
        },
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Form Elements",
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
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Textual inputs</h4>
            <p class="card-title-desc">
              Here are examples of
              <code class="highlighter-rouge">.form-control</code> applied to each
              textual HTML5
              <code
                class="highlighter-rouge"
              >&lt;input&gt;</code>
              <code class="highlighter-rouge">type</code>.
            </p>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Text"
              label-for="example-text-input"
            >
              <b-form-input id="example-text-input" value="Artisanal kale"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Search"
              label-for="example-search-input"
            >
              <b-form-input type="search" id="example-search-input" value="How do I shoot web"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Email"
              label-for="example-email-input"
            >
              <b-form-input type="email" id="example-email-input" value="bootstrap@example.com"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="URL"
              label-for="example-url-input"
            >
              <b-form-input type="url" id="example-url-input" value="https://getbootstrap.com"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="URL"
              label-for="example-tel-input"
            >
              <b-form-input type="tel" id="example-tel-input" value="1-(555)-555-5555"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Password"
              label-for="example-password-input"
            >
              <b-form-input type="password" id="example-password-input" value="hunter2"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Number"
              label-for="example-number-input"
            >
              <b-form-input type="number" id="example-number-input" value="42"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Date and time"
              label-for="example-datetime-local-input"
            >
              <b-form-input
                type="datetime-local"
                id="example-datetime-local-input"
                value="2011-08-19T13:45:00"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Date"
              label-for="example-date-input"
            >
              <b-form-input type="date" id="example-date-input" value="2011-08-19"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Month"
              label-for="example-month-input"
            >
              <b-form-input type="month" id="example-month-input" value="2011-08"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Week"
              label-for="example-week-input"
            >
              <b-form-input type="week" id="example-week-input" value="2011-08"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Time"
              label-for="example-time-input"
            >
              <b-form-input type="time" id="example-time-input" value="13:45:00"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Color"
              label-for="example-color-input"
            >
              <b-form-input type="color" id="example-color-input" value="#02a499"></b-form-input>
            </b-form-group>

            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Select</label>
              <div class="col-sm-10">
                <select class="form-control">
                  <option>Select</option>
                  <option>Large select</option>
                  <option>Small select</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Custom Select</label>
              <div class="col-sm-10">
                <select class="custom-select">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Large"
              label-for="example-text-input-lg"
            >
              <b-form-input
                type="text"
                size="lg"
                id="example-text-input-lg"
                placeholder=".form-control-lg"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="10"
              label-cols-sm="2"
              label="Small"
              label-for="example-text-input-sm"
            >
              <b-form-input
                type="text"
                size="sm"
                id="example-text-input-sm"
                placeholder=".form-control-sm"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>