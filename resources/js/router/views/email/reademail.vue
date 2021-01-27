<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Read-email component
 */
export default {
  page: {
    title: "Email Read",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Email Read",
      items: [
        {
          text: "Veltrix",
          href: "/"
        },
        {
          text: "Email",
          href: "/"
        },
        {
          text: "Email Read",
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
        <!-- Left sidebar -->
        <div class="email-leftbar card">
          <router-link
            tag="a"
            to="/email/compose"
            class="btn btn-danger rounded btn-custom btn-block"
          >Compose</router-link>

          <div class="mail-list mt-4">
            <a href="javascript: void(0);" class="active">
              Inbox
              <span class="ml-1">(18)</span>
            </a>
            <a href="javascript: void(0);">Starred</a>
            <a href="javascript: void(0);">Important</a>
            <a href="javascript: void(0);">Draft</a>
            <a href="javascript: void(0);">Sent Mail</a>
            <a href="javascript: void(0);">Trash</a>
          </div>

          <h5 class="mt-4">Labels</h5>

          <div class="mail-list mt-4">
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-info float-right"></span>Theme Support
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-warning float-right"></span>Freelance
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-primary float-right"></span>Social
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>Friends
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-success float-right"></span>Family
            </a>
          </div>

          <h5 class="mt-4">Chat</h5>

          <div class="mt-4">
            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/user-2.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">Scott Median</p>
                <p class="text-muted">Hello</p>
              </div>
            </a>

            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/user-3.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">Julian Rosa</p>
                <p class="text-muted">What about our next..</p>
              </div>
            </a>

            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/user-4.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">David Medina</p>
                <p class="text-muted">Yeah everything is fine</p>
              </div>
            </a>

            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/user-6.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">Jay Baker</p>
                <p class="text-muted">Wow that's great</p>
              </div>
            </a>
          </div>
        </div>
        <!-- End Left sidebar -->

        <!-- Right Sidebar -->
        <div class="email-rightbar mb-3">
          <div class="card">
            <div class="btn-toolbar p-3">
              <div class="btn-group">
                <button type="button" class="btn btn-primary">
                  <i class="fa fa-inbox"></i>
                </button>
                <button type="button" class="btn btn-primary">
                  <i class="fa fa-exclamation-circle"></i>
                </button>
                <button type="button" class="btn btn-primary">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
              <b-dropdown class="btn-group ml-1 mo-mb-2" variant="primary">
                <template slot="button-content">
                  <i class="fa fa-folder"></i>
                  <i class="mdi mdi-chevron-down ml-1"></i>
                </template>
                <a class="dropdown-item" href="javascript: void(0);">Updates</a>
                <a class="dropdown-item" href="javascript: void(0);">Social</a>
                <a class="dropdown-item" href="javascript: void(0);">Team Manage</a>
              </b-dropdown>
              <b-dropdown class="btn-group ml-1 mo-mb-2" variant="primary">
                <template slot="button-content">
                  <i class="fa fa-tag"></i>
                  <i class="mdi mdi-chevron-down ml-1"></i>
                </template>
                <a class="dropdown-item" href="javascript: void(0);">Updates</a>
                <a class="dropdown-item" href="javascript: void(0);">Social</a>
                <a class="dropdown-item" href="javascript: void(0);">Team Manage</a>
              </b-dropdown>

              <b-dropdown class="btn-group ml-1 mo-mb-2" variant="primary">
                <template slot="button-content">
                  More
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item href="javascript: void(0);">Mark as Unread</b-dropdown-item>
                <b-dropdown-item href="javascript: void(0);">Mark as Important</b-dropdown-item>
                <b-dropdown-item href="javascript: void(0);">Add to Tasks</b-dropdown-item>
                <b-dropdown-item href="javascript: void(0);">Add Star</b-dropdown-item>
                <b-dropdown-item href="javascript: void(0);">Mute</b-dropdown-item>
              </b-dropdown>
            </div>

            <div class="card-body">
              <div class="media mb-4">
                <img
                  class="d-flex mr-3 rounded-circle avatar-sm"
                  src="@/assets/images/users/user-1.jpg"
                  alt="Generic placeholder image"
                />
                <div class="media-body">
                  <h4 class="font-size-15 m-0">Humberto D. Champion</h4>
                  <small class="text-muted">support@domain.com</small>
                </div>
              </div>

              <h4 class="mt-0 font-size-16">This Week's Top Stories</h4>

              <p>Dear Lorem Ipsum,</p>
              <p>
                Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus
                convallis.
              </p>
              <p>
                Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia
                lacus, vel tincidunt mi nibh sit amet lorem.
              </p>
              <p>Sincerly,</p>
              <hr />

              <div class="row">
                <div class="col-xl-2 col-6">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src="@/assets/images/small/img-3.jpg"
                      alt="Card image cap"
                    />
                    <div class="py-2 text-center">
                      <a href class="font-weight-medium">Download</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-6">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src="@/assets/images/small/img-4.jpg"
                      alt="Card image cap"
                    />
                    <div class="py-2 text-center">
                      <a href class="font-weight-medium">Download</a>
                    </div>
                  </div>
                </div>
              </div>

              <router-link tag="a" to="/email/compose" class="btn btn-secondary mt-4">
                <i class="mdi mdi-reply"></i> Reply
              </router-link>
            </div>
          </div>
        </div>
        <!-- End Right Sidebar -->
      </div>
    </div>
  </Layout>
</template>