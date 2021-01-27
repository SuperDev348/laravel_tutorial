<script>
import { layoutMethods } from "@/state/helpers";

/**
 * Horizontal navbar component
 */
export default {
  mounted() {
    var links = document.getElementsByClassName("side-nav-link");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
        }
        const parent3 = parent2.parentElement;
        if (parent3) {
          parent3.classList.add("active");
          var childAnchor = parent3.querySelector(".has-dropdown");
          if (childAnchor) childAnchor.classList.add("active");
        }

        const parent4 = parent3.parentElement;
        if (parent4) parent4.classList.add("active");
        const parent5 = parent4.parentElement;
        if (parent5) parent5.classList.add("active");
      }
    }
  },
  methods: {
    ...layoutMethods,

    /**
     * menu clicked show the subelement
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling;
      if (nextEl && !nextEl.classList.contains("show")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("show");
        }
        nextEl.classList.add("show");
      } else if (nextEl) {
        nextEl.classList.remove("show");
      }
      return false;
    },
    topbarLight() {
      document.body.setAttribute("data-topbar", "light");
      document.body.removeAttribute("data-layout-size", "boxed");
    },
    boxedWidth() {
      document.body.setAttribute("data-layout-size", "boxed");
      document.body.removeAttribute("data-topbar", "light");
      document.body.setAttribute("data-topbar", "dark");
    },
    changeLayout(layout) {
      this.changeLayoutType({ layoutType: layout });
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    }
  }
};
</script>
<template>
  <div class="topnav">
    <div class="container-fluid">
      <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
        <div class="collapse navbar-collapse justify-content-between" id="topnav-menu-content">
          <b-button class="" pill variant="primary">Start your Free 7 Day Trial</b-button>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link tag="a" class="nav-link side-nav-link" to="/">
                <i class="ti-home mr-2"></i>HOME
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class="nav-link side-nav-link" to="/tutorials">
                <i class="ti-package mr-2"></i>TUTORIALS
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class="nav-link side-nav-link" to="/tutorials">
                <i class="ti-harddrives mr-2"></i>SOUNDS
              </router-link>
            </li>

            <li class="nav-item dropdown mega-dropdown">
              <a
                class="nav-link dropdown-toggle arrow-none"
                href="javascript: void(0);"
                id="topnav-chart"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="ti-support mr-2"></i>PLUGINS
              </a>

              <div
                class="dropdown-menu mega-dropdown-menu dropdown-mega-menu-lg"
                aria-labelledby="topnav-uielement"
              >
                <div class="row">
                  <div class="col-lg-6">
                    <div>
                      <router-link
                        tag="a"
                        to="/tutorials/all"
                        class="dropdown-item side-nav-link"
                      >Plugin 1</router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div>
                      <router-link
                        tag="a"
                        to="/tutorials/all"
                        class="dropdown-item side-nav-link"
                      >Plugin 2</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <router-link tag="a" class="nav-link side-nav-link" to="/tutorials">
                <i class="ti-archive mr-2"></i>GIFT/VOUCHERS
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class="nav-link side-nav-link" to="/tutorials">
                <i class="ti-bookmark-alt mr-2"></i>FORUM
              </router-link>
            </li>

            <li class="nav-item">
              <div class="dropdown pt-1">
                <button
                  type="button"
                  class="btn noti-icon right-bar-toggle toggle-right"
                  @click="toggleRightSidebar"
                >
                  <i class="fa fa-search toggle-right"></i>
                </button>
              </div>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>