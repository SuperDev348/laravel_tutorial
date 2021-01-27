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
                <router-link tag="a" to="/tutorials" class="side-nav-link">
                  <i class="ti-home"></i>
                  <span>Dashboard</span>
                </router-link>
              </li>
              <li>
                <router-link tag="a" to="/tutorials/all" class="side-nav-link">
                  <i class="ti-video-clapper"></i>
                  <span>All Courses</span>
                </router-link>
              </li>
              <li>
                <router-link tag="a" to="/tutorials/all" class="side-nav-link">
                  <i class="ti-video-clapper"></i>
                  <span>Free Courses</span>
                </router-link>
              </li>
              <li>
                <router-link tag="a" to="/tutorials/all" class="side-nav-link">
                  <i class="ti-star"></i>
                  <span>Popular</span>
                </router-link>
              </li>
              <li>
                <router-link tag="a" to="/tutorials/all" class="side-nav-link">
                  <i class="ti-heart"></i>
                  <span>Genres</span>
                </router-link>
              </li>
              <li>
                <router-link tag="a" to="/tutorials/all" class="side-nav-link">
                  <i class="ti-tag"></i>
                  <span>Courses Types</span>
                </router-link>
              </li>
              <li>
                <router-link tag="a" to="/tutorials/all" class="side-nav-link">
                  <i class="ti-crown"></i>
                  <span>Tutors</span>
                </router-link>
              </li>
              <li>
                <router-link tag="a" to="/tutorials/all" class="side-nav-link">
                  <i class="ti-heart"></i>
                  <span>Software / DAW</span>
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
            </ul>
          </div>
          <!-- Sidebar -->
        </simplebar>
      </div>
      <!-- Left Sidebar End -->
    </template>