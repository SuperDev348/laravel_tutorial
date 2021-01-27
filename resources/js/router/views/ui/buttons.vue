<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Buttons component
 */
export default {
  page: {
    title: "Buttons",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Buttons",
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
          text: "Buttons",
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
            <p
              class="card-title-desc"
            >Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>
            <div class="button-items">
              <b-button variant="primary">Primary</b-button>
              <b-button variant="secondary">Secondary</b-button>
              <b-button variant="success">Success</b-button>
              <b-button variant="info">Info</b-button>
              <b-button variant="warning">Warning</b-button>
              <b-button variant="danger">Danger</b-button>
              <b-button variant="dark">Dark</b-button>
              <b-button variant="link">Link</b-button>
              <b-button variant="light">Light</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Outline buttons</h4>
            <p class="card-title-desc">
              Replace the default modifier classes with the
              <code class="highlighter-rouge">outline-*</code> ones to remove all background images and colors on any button.
            </p>
            <div class="button-items">
              <b-button variant="outline-primary">Primary</b-button>
              <b-button variant="outline-secondary">Secondary</b-button>
              <b-button variant="outline-success">Success</b-button>
              <b-button variant="outline-info">Info</b-button>
              <b-button variant="outline-warning">Warning</b-button>
              <b-button variant="outline-danger">Danger</b-button>
              <b-button variant="outline-dark">Dark</b-button>
              <b-button variant="outline-light">Light</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Rounded buttons</h4>
            <p class="card-title-desc">
              Use
              <code>pill</code> for button round border.
            </p>
            <div class="button-items">
              <b-button pill variant="primary">Primary</b-button>
              <b-button pill variant="secondary">Secondary</b-button>
              <b-button pill variant="success">Success</b-button>
              <b-button pill variant="info">Info</b-button>
              <b-button pill variant="warning">Warning</b-button>
              <b-button pill variant="danger">Danger</b-button>
              <b-button pill variant="dark">Dark</b-button>
              <b-button pill variant="link">Link</b-button>
              <b-button pill variant="light">Light</b-button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sizes</h4>
            <p class="card-title-desc">
              Fancy larger or smaller buttons? Add size
              <code class="highlighter-rouge">lg</code> or
              <code class="highlighter-rouge">sm</code> for additional sizes.
            </p>

            <div class="button-items">
              <b-button size="lg" variant="primary">Large button</b-button>
              <b-button size="lg">Large button</b-button>
              <b-button size="sm" variant="primary">Small button</b-button>
              <b-button size="sm">Small button</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Block Buttons</h4>
            <p class="card-title-desc">
              Create block level buttons—those that
              span the full width of a parent—by adding
              <code
                class="highlighter-rouge"
              >block</code>.
            </p>

            <div class="button-items">
              <b-button block variant="primary" size="lg">Block Level Button</b-button>
              <b-button block size="sm">Block Level Button</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Button tags</h4>
            <p class="card-title-desc">
              The
              <code class="highlighter-rouge">.btn</code>
              classes are designed to be used with the
              <code
                class="highlighter-rouge"
              >&lt;button&gt;</code> element.
              However, you can also use these classes on
              <code
                class="highlighter-rouge"
              >&lt;a&gt;</code>. (though
              some browsers may apply a slightly different rendering).
            </p>

            <div class="button-items">
              <b-button href="#" variant="primary">Link</b-button>
              <b-button variant="success" type="submit">Button</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sizing</h4>
            <p class="card-title-desc">
              Instead of applying button sizing
              classes to every button in a group, just add size
              <code
                class="highlighter-rouge"
              >lg, sm</code> to each
              <code class="highlighter-rouge">button-group</code>, including each one
              when nesting multiple groups.
            </p>
            <div>
              <b-button-group size="lg">
                <b-button variant="secondary">Left</b-button>
                <b-button variant="secondary">Middle</b-button>
                <b-button variant="secondary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mt-2">
              <b-button-group>
                <b-button variant="secondary">Left</b-button>
                <b-button variant="secondary">Middle</b-button>
                <b-button variant="secondary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mt-2">
              <b-button-group size="sm">
                <b-button variant="secondary">Left</b-button>
                <b-button variant="secondary">Middle</b-button>
                <b-button variant="secondary">Right</b-button>
              </b-button-group>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Vertical variation</h4>
            <p class="card-title-desc">
              Make a set of buttons appear vertically
              stacked rather than horizontally. Split button dropdowns are not
              supported here.
            </p>
            <b-button-group vertical>
              <b-button variant="secondary">Button</b-button>
              <b-dropdown variant="secondary">
                <template slot="button-content">
                  Dropdown
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item>Dropdown Link</b-dropdown-item>
                <b-dropdown-item>Dropdown Link</b-dropdown-item>
              </b-dropdown>
              <b-button variant="secondary">Button</b-button>
              <b-button variant="secondary">Button</b-button>
            </b-button-group>
          </div>
        </div>
      </div>
    </div>

    <div class="row"></div>
    <!-- end row -->
  </Layout>
</template>