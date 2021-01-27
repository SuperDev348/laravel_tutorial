<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { emailData } from "./data-inbox";

/**
 * Email-inbox component
 */
export default {
  page: {
    title: "Inbox",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      emailData: emailData,
      paginatedEmailData: emailData,
      title: "Inbox",
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
          text: "Inbox",
          active: true
        }
      ],
      // page number
      currentPage: 1,
      // default page size
      perPage: 15,

      // start and end index
      startIndex: 1,
      endIndex: 15
    };
  },
  computed: {
    /**
     * Return emaildata length
     */
    rows() {
      return this.emailData.length;
    }
  },
  created() {
    this.startIndex = 0;
    this.endIndex = this.perPage;

    this.paginatedEmailData = this.emailData.slice(
      this.startIndex,
      this.endIndex
    );
  },
  methods: {
    /**
     * Pagination page change method
     */
    onPageChange() {
      this.startIndex = (this.currentPage - 1) * this.perPage;
      this.endIndex = (this.currentPage - 1) * this.perPage + this.perPage;

      this.paginatedEmailData = this.emailData.slice(
        this.startIndex,
        this.endIndex
      );
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <!-- Right Sidebar -->
      <div class="col-12">
        <!-- Left sidebar -->
        <div class="email-leftbar card">
          <router-link tag="a" to="/email/compose" class="btn btn-danger btn-block">Compose</router-link>
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
            <div>
              <ul class="message-list">
                <li
                  v-for="(email,index) in paginatedEmailData"
                  :key="index"
                  :class="{ 'unread': `${email.unread}` === 'true' }"
                >
                  <div class="col-mail col-mail-1">
                    <div class="checkbox-wrapper-mail">
                      <input :id="`chk-${index}`" type="checkbox" />
                      <label :for="`chk-${index}`"></label>
                    </div>
                    <span class="star-toggle far fa-star"></span>
                    <a class="title">{{email.title}}</a>
                  </div>
                  <div class="col-mail col-mail-2">
                    <a class="subject">{{email.subject}}</a>
                    <div class="date">{{email.date}}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-7">Showing {{startIndex}} - {{endIndex}} of {{rows}}</div>
            <div class="col-5">
              <div class="btn-group float-right">
                <!-- Pagination -->
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  @input="onPageChange"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
        <!-- End Right Sidebar -->
      </div>
    </div>
  </Layout>
</template>