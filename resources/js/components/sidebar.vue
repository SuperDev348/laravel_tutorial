<script>
import simplebar from "simplebar-vue";
import MetisMenu from "metismenujs/dist/metismenujs";

import { layoutMethods } from "@/state/helpers";

/**
 * Sidebar component
 */
export default {
  components: {
    simplebar
  },
  mounted: function() {
    // eslint-disable-next-line no-unused-vars
    var menuRef = new MetisMenu("#side-menu");
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
        parent.classList.add("mm-active");
        const parent2 = parent.parentElement.closest("ul");
        if (parent2 && parent2.id !== "side-menu") {
          parent2.classList.add("mm-show");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("mm-active");
            var childAnchor = parent3.querySelector(".has-arrow");
            var childDropdown = parent3.querySelector(".has-dropdown");
            if (childAnchor) childAnchor.classList.add("mm-active");
            if (childDropdown) childDropdown.classList.add("mm-active");
            const parent4 = parent3.parentElement;
            if (parent4) parent4.classList.add("mm-show");
            const parent5 = parent4.parentElement;
            if (parent5) parent5.classList.add("active");
          }
        } else {
          parent.classList.add("mm-active");
        }
      }
    }
  },
  methods: {
    ...layoutMethods,
    changeLayout(layout) {
      this.changeLayoutType({ layoutType: layout });
    },
    compactSidebar() {
      document.body.setAttribute("data-sidebar-size", "small");
      document.body.classList.remove("vertical-collpsed");
      document.body.removeAttribute("data-keep-enlarged", "true");
      document.body.removeAttribute("data-layout-size", "boxed");
    },
    iconSidebar() {
      document.body.classList.add("vertical-collpsed");
      document.body.setAttribute("data-keep-enlarged", "true");
      document.body.removeAttribute("data-sidebar-size", "small");
      document.body.removeAttribute("data-layout-size", "boxed");
    },
    boxedLayout() {
      document.body.setAttribute("data-layout-size", "boxed");
      document.body.classList.add("vertical-collpsed");
      document.body.setAttribute("data-keep-enlarged", "true");
    }
  }
};
</script>

<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="vertical-menu">
    <simplebar class="h-100">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="menu-title">Main</li>

          <li>
            <router-link tag="a" to="/" class="side-nav-link">
              <i class="ti-home"></i>
              <span class="badge badge-pill badge-primary float-right">2</span>
              <span>Dashboard</span>
            </router-link>
          </li>

          <li>
            <router-link tag="a" to="/calendar" class="side-nav-link">
              <i class="ti-calendar"></i>
              <span>Calendar</span>
            </router-link>
          </li>

          <li>
            <a href="javascript: void(0);" class="has-arrow">
              <i class="ti-email"></i>
              <span>Email</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li>
                <router-link to="/email/inbox" class="side-nav-link">Inbox</router-link>
              </li>
              <li>
                <router-link to="/email/read-email" class="side-nav-link">Email Read</router-link>
              </li>
              <li>
                <router-link to="/email/compose" class="side-nav-link">Email Compose</router-link>
              </li>
            </ul>
          </li>

          <li class="menu-title">Components</li>

          <li>
            <a href="javascript: void(0);" class="has-arrow">
              <i class="ti-package"></i>
              <span>UI Elements</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li>
                <router-link to="/ui/alerts" class="side-nav-link">Alerts</router-link>
              </li>
              <li>
                <router-link to="/ui/buttons" class="side-nav-link">Buttons</router-link>
              </li>
              <li>
                <router-link to="/ui/cards" class="side-nav-link">Cards</router-link>
              </li>
              <li>
                <router-link to="/ui/carousel" class="side-nav-link">Carousel</router-link>
              </li>
              <li>
                <router-link to="/ui/dropdowns" class="side-nav-link">Dropdowns</router-link>
              </li>
              <li>
                <router-link to="/ui/grid" class="side-nav-link">Grid</router-link>
              </li>
              <li>
                <router-link to="/ui/images" class="side-nav-link">Images</router-link>
              </li>
              <li>
                <router-link to="/ui/modals" class="side-nav-link">Modals</router-link>
              </li>
              <li>
                <router-link to="/ui/rangeslider" class="side-nav-link">Range Slider</router-link>
              </li>
              <li>
                <router-link to="/ui/progressbar" class="side-nav-link">Progress Bars</router-link>
              </li>
              <li>
                <router-link to="/ui/sweetalert" class="side-nav-link">Sweet-Alert</router-link>
              </li>
              <li>
                <router-link to="/ui/tabs" class="side-nav-link">Tabs &amp; Accordions</router-link>
              </li>
              <li>
                <router-link to="/ui/typography" class="side-nav-link">Typography</router-link>
              </li>
              <li>
                <router-link to="/ui/video" class="side-nav-link">Video</router-link>
              </li>
              <li>
                <router-link to="/ui/general" class="side-nav-link">General</router-link>
              </li>
              <li>
                <router-link to="/ui/colors" class="side-nav-link">Colors</router-link>
              </li>
              <li>
                <router-link to="/ui/rating" class="side-nav-link">Rating</router-link>
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);" class="has-dropdown">
              <i class="ti-receipt"></i>
              <span class="badge badge-pill badge-success float-right">6</span>
              <span>Forms</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li>
                <router-link tag="a" to="/form/elements" class="side-nav-link">Form Elements</router-link>
              </li>
              <li>
                <router-link tag="a" to="/form/validation" class="side-nav-link">Form Validation</router-link>
              </li>
              <li>
                <router-link tag="a" to="/form/advanced" class="side-nav-link">Form Advanced</router-link>
              </li>
              <li>
                <router-link tag="a" to="/form/editor" class="side-nav-link">Form Editors</router-link>
              </li>
              <li>
                <router-link tag="a" to="/form/uploads" class="side-nav-link">Form File Upload</router-link>
              </li>
              <li>
                <router-link tag="a" to="/form/repeater" class="side-nav-link">Form Repeater</router-link>
              </li>
              <li>
                <router-link tag="a" to="/form/wizard" class="side-nav-link">Form Wizard</router-link>
              </li>
              <li>
                <router-link tag="a" to="/form/mask" class="side-nav-link">Form Mask</router-link>
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);" class="has-arrow">
              <i class="ti-pie-chart"></i>
              <span>Charts</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li>
                <router-link tag="a" to="/charts/chartist" class="side-nav-link">Chartist Chart</router-link>
              </li>
              <li>
                <router-link tag="a" to="/charts/chartjs" class="side-nav-link">Chartjs Chart</router-link>
              </li>
              <li>
                <router-link tag="a" to="/charts/apex" class="side-nav-link">Apex Chart</router-link>
              </li>
              <li>
                <router-link tag="a" to="/charts/echart" class="side-nav-link">E - Chart</router-link>
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);" class="has-arrow">
              <i class="ti-view-grid"></i>
              <span>Tables</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li>
                <router-link tag="a" to="/tables/basic" class="side-nav-link">Basic Tables</router-link>
              </li>
              <li>
                <router-link tag="a" to="/tables/advancedtable" class="side-nav-link">Advanced Table</router-link>
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);" class="has-arrow">
              <i class="ti-face-smile"></i>
              <span>Icons</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li>
                <router-link tag="a" to="/icons/material" class="side-nav-link">Material Design</router-link>
              </li>
              <li>
                <router-link tag="a" to="/icons/fontawesome" class="side-nav-link">Font Awesome</router-link>
              </li>
              <li>
                <router-link tag="a" to="/icons/ion" class="side-nav-link">Ion Icons</router-link>
              </li>
              <li>
                <router-link tag="a" to="/icons/themify" class="side-nav-link">Themify Icons</router-link>
              </li>
              <li>
                <router-link tag="a" to="/icons/dripicons" class="side-nav-link">Dripicons</router-link>
              </li>
              <li>
                <router-link tag="a" to="/icons/typicons" class="side-nav-link">Typicons Icons</router-link>
              </li>
            </ul>
          </li>

          <li>
            <router-link tag="a" to="/maps/google" class="side-nav-link">
              <i class="ti-location-pin"></i>
              <span class="badge badge-pill badge-danger float-right">2</span>
              <span>Google Map</span>
            </router-link>
          </li>

          <li class="menu-title">Extras</li>

          <li>
            <a href="javascript: void(0);" class="has-arrow">
              <i class="ti-layout"></i>
              <span>Layouts</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li>
                <a href="javascript:void(0);" @click="changeLayout('horizontal')">Horizontal</a>
              </li>
              <li>
                <a href="javascript:void(0);" @click="compactSidebar()">Compact Sidebar</a>
              </li>
              <li>
                <a href="javascript:void(0);" @click="iconSidebar()">Icon Sidebar</a>
              </li>
              <li>
                <a href="javascript:void(0);" @click="boxedLayout()">Boxed Layout</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript: void(0);" class="has-arrow">
              <i class="ti-archive"></i>
              <span>Authentication</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li>
                <router-link tag="a" to="/pages/login-1">Login 1</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/login-2">Login 2</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/register-1">Register 1</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/register-2">Register 2</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/recoverpwd-1">Recover Password 1</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/recoverpwd-2">Recover Password 2</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/lock-screen1">Lock Screen 1</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/lock-screen2">Lock Screen 2</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript: void(0);" class="has-arrow">
              <i class="ti-support"></i>
              <span>Extra Pages</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li>
                <router-link tag="a" to="/pages/timeline" class="side-nav-link">Timeline</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/invoice" class="side-nav-link">Invoice</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/directory" class="side-nav-link">Directory</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/blank-page" class="side-nav-link">Blank Page</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/404" class="side-nav-link">Error 404</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/500" class="side-nav-link">Error 500</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/pricing" class="side-nav-link">Pricing</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/maintenance" class="side-nav-link">Maintenance</router-link>
              </li>
              <li>
                <router-link tag="a" to="/pages/faqs" class="side-nav-link">FAQs</router-link>
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);" class="has-arrow">
              <i class="ti-bookmark-alt"></i>
              <span>Email Templates</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li>
                <router-link
                  tag="a"
                  to="/email-template/basic"
                  class="side-nav-link"
                >Basic Action Email</router-link>
              </li>
              <li>
                <router-link tag="a" to="/email-template/alert" class="side-nav-link">Alert Email</router-link>
              </li>
              <li>
                <router-link
                  tag="a"
                  to="/email-template/billing"
                  class="side-nav-link"
                >Billing Email</router-link>
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);" class="has-arrow">
              <i class="ti-more"></i>
              <span>Multi Level</span>
            </a>
            <ul class="sub-menu" aria-expanded="true">
              <li>
                <a href="javascript: void(0);">Level 1.1</a>
              </li>
              <li>
                <a href="javascript: void(0);" class="has-arrow">Level 1.2</a>
                <ul class="sub-menu" aria-expanded="true">
                  <li>
                    <a href="javascript: void(0);">Level 2.1</a>
                  </li>
                  <li>
                    <a href="javascript: void(0);">Level 2.2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Sidebar -->
    </simplebar>
  </div>
  <!-- Left Sidebar End -->
</template>