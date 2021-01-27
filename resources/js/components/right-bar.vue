<script>
/**
 * Right sidebar component
 */
export default {
  components: {},
  data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"]
      }
    };
  },

  methods: {
    hide() {
      this.$parent.toggleRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    handleRightBarClick(e, el) {
      this.$parent.hideRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    middleware(event, el) {
      return !event.target.classList.contains("toggle-right");
    }
  }
};
</script>

<template>
  <div>
    <div v-click-outside="config" class="right-bar">
      <div data-simplebar class="h-100">
        <div class="rightbar-title px-3 py-4">
          <a href="javascript:void(0);" class="right-bar-toggle float-right" @click="hide">
            <i class="mdi mdi-close noti-icon"></i>
          </a>
          <h1 class="m-0">Search</h1>
        </div>

        <!-- Settings -->
        <form class="app-search w-75" style="margin: 0 auto;">
          <div class="position-relative">
            <span class="fa fa-search"></span>
            <input type="text" class="form-control" placeholder="Search..." />
          </div>
        </form>

        <div class="p-4 row">
          <div class="col-lg-6 col-md-12">
            <h5 class="pb-2">Products</h5>
            <ul class="pl-0">
              <li class="d-flex align-items-center">
                <img :src="require('@/assets/images/product/img-1.png')" />
                <p class="mb-0">Product 1</p>
              </li>
              <li class="d-flex align-items-center">
                <img :src="require('@/assets/images/product/img-2.png')" />
                <p class="mb-0">Product 2</p>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-12">
            <h5 class="pb-2">Tutorials</h5>
            <ul class="pl-0">
              <li class="d-flex align-items-center">
                <img :src="require('@/assets/images/small/img-1.jpg')" />
                <p class="mb-0">TUTORIAL DESCRIPTION</p>
              </li>
              <li class="d-flex align-items-center">
                <img :src="require('@/assets/images/small/img-2.jpg')" />
                <p class="mb-0">TUTORIAL DESCRIPTION</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end scroll-->
    </div>

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>

<style>
  .right-bar ul {
    overflow: hidden scroll;
  }
  .right-bar ul li {
    border-top: 1px solid grey;
    padding: 10px;
  }
  .right-bar ul li img {
    width: 70px;
    height: 70px;
  }
</style>
