<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * General component
 */
export default {
  page: {
    title: "General",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "General",
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
          text: "General",
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
            <div class="row">
              <div class="col-lg-6">
                <div>
                  <h4 class="card-title">badges</h4>
                  <p
                    class="card-title-desc"
                  >Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                  <div>
                    <b-badge variant="primary">Primary</b-badge>
                    <b-badge variant="success" class="ml-1">Success</b-badge>
                    <b-badge variant="info" class="ml-1">Info</b-badge>
                    <b-badge variant="warning" class="ml-1">Warning</b-badge>
                    <b-badge variant="danger" class="ml-1">Danger</b-badge>
                    <b-badge variant="dark" class="ml-1">Dark</b-badge>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div>
                  <h4 class="card-title mo-mt-2">Pill badges</h4>
                  <p class="card-title-desc">
                    Use the
                    <code>pill</code> modifier class to make
                    badges more rounded (with a larger
                    <code>border-radius</code>
                    and additional horizontal
                    <code>padding</code>).
                    Useful if you miss the badges from v3.
                  </p>

                  <div>
                    <b-badge pill variant="primary">Primary</b-badge>
                    <b-badge pill variant="success" class="ml-1">Success</b-badge>
                    <b-badge pill variant="info" class="ml-1">Info</b-badge>
                    <b-badge pill variant="warning" class="ml-1">Warning</b-badge>
                    <b-badge pill variant="danger" class="ml-1">Danger</b-badge>
                    <b-badge pill variant="dark" class="ml-1">Dark</b-badge>
                  </div>
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Popovers</h4>
            <p
              class="card-title-desc"
            >Add small overlay content, like those found in iOS, to any element for housing secondary information.</p>

            <div class="button-items">
              <button
                v-b-popover.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                type="button"
                class="btn btn-secondary"
              >Popover on top</button>

              <button
                type="button"
                class="btn btn-secondary"
                v-b-popover.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
              >Popover on right</button>

              <button
                type="button"
                class="btn btn-secondary"
                v-b-popover.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
              >Popover on bottom</button>

              <button
                type="button"
                class="btn btn-secondary"
                v-b-popover.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
              >Popover on left</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Tooltips</h4>
            <p class="card-title-desc">Hover over the links below to see tooltips:</p>

            <div class="button-items">
              <button
                type="button"
                class="btn btn-primary"
                v-b-tooltip.hover
                title="Tooltip on top"
              >Tooltip on top</button>

              <button
                type="button"
                class="btn btn-primary"
                v-b-tooltip.hover.right="'Tooltip on right'"
              >Tooltip on right</button>

              <button
                type="button"
                class="btn btn-primary"
                v-b-tooltip.hover.bottom="'Tooltip on bottom'"
              >Tooltip on bottom</button>

              <button
                type="button"
                class="btn btn-primary"
                v-b-tooltip.hover.left="'Tooltip on left'"
              >Tooltip on left</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Pagination</h4>

            <div class="row">
              <div class="col-lg-6">
                <h5 class="font-size-16 mt-0">Default Example</h5>
                <p
                  class="card-title-desc"
                >Pagination links indicate a series of related content exists across multiple pages.</p>

                <b-pagination
                  :v-model="30"
                  :total-rows="50"
                  :per-page="10"
                  aria-controls="my-table"
                ></b-pagination>

                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-lg-6">
                <h5 class="font-size-16">Alignment</h5>
                <p class="card-title-desc">
                  Change the alignment of pagination
                  components with flexbox utilities.
                </p>

                <b-pagination :total-rows="50" prev-text="Previous" next-text="Next" align="center"></b-pagination>

                <b-pagination :total-rows="50" prev-text="Previous" next-text="Next" align="right"></b-pagination>
              </div>
            </div>
            <!-- end row -->

            <div class="row">
              <div class="col-lg-6">
                <h5 class="font-size-16">Sizing</h5>
                <p class="card-title-desc">
                  Fancy larger or smaller pagination? Add
                  <code>.pagination-lg</code> or
                  <code>.pagination-sm</code> for additional
                  sizes.
                </p>

                <b-pagination size="lg" :total-rows="30" :per-page="10" aria-controls="my-table"></b-pagination>

                <b-pagination size="sm" :total-rows="30" :per-page="10" aria-controls="my-table"></b-pagination>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Border spinner</h4>
            <p class="card-title-desc">Use the border spinners for a lightweight loading indicator.</p>
            <div>
              <b-spinner label="Spinning" variant="primary" class="m-1"></b-spinner>
              <b-spinner label="Spinning" class="m-1"></b-spinner>
              <b-spinner label="Spinning" variant="success" class="m-1"></b-spinner>
              <b-spinner label="Spinning" variant="info" class="m-1"></b-spinner>
              <b-spinner label="Spinning" variant="warning" class="m-1"></b-spinner>
              <b-spinner label="Spinning" variant="danger" class="m-1"></b-spinner>
              <b-spinner label="Spinning" variant="dark" class="m-1"></b-spinner>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Growing spinner</h4>
            <p
              class="card-title-desc"
            >If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>
            <div>
              <b-spinner type="grow" label="Spinning" variant="primary" class="m-1"></b-spinner>
              <b-spinner type="grow" label="Spinning" class="m-1"></b-spinner>
              <b-spinner type="grow" label="Spinning" variant="success" class="m-1"></b-spinner>
              <b-spinner type="grow" label="Spinning" variant="info" class="m-1"></b-spinner>
              <b-spinner type="grow" label="Spinning" variant="warning" class="m-1"></b-spinner>
              <b-spinner type="grow" label="Spinning" variant="danger" class="m-1"></b-spinner>
              <b-spinner type="grow" label="Spinning" variant="dark" class="m-1"></b-spinner>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>