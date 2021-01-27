<script>

/**
 * Topbar component
 */
export default {
  data() {
    return {};
  },
  methods: {
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    }
  }
};
</script>
<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link tag="a" to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt height="30" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-dark.png" alt height="60" width="130" />
            </span>
          </router-link>

          <router-link tag="a" to="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt height="30" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-light.png" alt height="60" width="130" />
            </span>
          </router-link>
        </div>

        <button
          type="button"
          class="btn btn-sm px-3 font-size-24 header-item"
          id="vertical-menu-btn"
          @click="toggleMenu()"
        >
          <i class="mdi mdi-menu"></i>
        </button>

        <b-button class="my-3" pill variant="primary">Start your Free 7 Day Trial</b-button>

        <!-- <div class="d-none d-sm-block">
          <b-dropdown variant="secondary" class="pt-3 d-inline-block">
            <template v-slot:button-content>
              Create
              <i class="mdi mdi-chevron-down"></i>
            </template>
            <a class="dropdown-item" href="javascript: void(0);">Action</a>
            <a class="dropdown-item" href="javascript: void(0);">Another action</a>
            <a class="dropdown-item" href="javascript: void(0);">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="javascript: void(0);">Separated link</a>
          </b-dropdown>
        </div> -->
      </div>

      <div class="d-flex">
        <!-- App Search-->
        <!-- <form class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="Search..." />
            <span class="fa fa-search"></span>
          </div>
        </form> -->

        <!-- <div class="dropdown d-inline-block d-lg-none ml-2">
          <button
            type="button"
            class="btn header-item noti-icon"
            id="page-header-search-dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="mdi mdi-magnify"></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
            aria-labelledby="page-header-search-dropdown"
          >
            <form class="p-3">
              <div class="form-group m-0">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="mdi mdi-magnify"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div> -->

        <div class="dropdown d-none d-lg-inline-block">
          <button type="button" class="btn header-item noti-icon" @click="initFullScreen">
            <i class="mdi mdi-fullscreen"></i>
          </button>
        </div>

        <a
          href="/"
          class="btn btn-info btn-block my-3 d-inline-block"
          target="_blank"
        >
          Your Basket <i class="mdi mdi-cart mr-1"></i> £0.00
        </a>

        <b-dropdown class="d-inline-block" right toggle-class="header-item" variant="white">
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
              src="@/assets/images/users/user-4.jpg"
              alt="Header Avatar"
            />
          </template>
          <a class="dropdown-item" href="#">
            <i class="mdi mdi-account-circle font-size-17 align-middle mr-1"></i> Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="mdi mdi-wallet font-size-17 align-middle mr-1"></i> My Wallet
          </a>
          <!-- <a class="dropdown-item d-block" href="#">
            <span class="badge badge-success float-right">11</span>
            <i class="mdi mdi-settings font-size-17 align-middle mr-1"></i> Settings
          </a>
          <a class="dropdown-item" href="#">
            <i class="mdi mdi-lock-open-outline font-size-17 align-middle mr-1"></i> Lock screen
          </a> -->
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-danger" href="/logout">
            <i class="bx bx-power-off font-size-17 align-middle mr-1 text-danger"></i> Logout
          </a>
        </b-dropdown>

      </div>
    </div>
  </header>
</template>

