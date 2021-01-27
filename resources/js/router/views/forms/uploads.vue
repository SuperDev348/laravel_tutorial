<script>
import vue2Dropzone from "vue2-dropzone";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * File Upload component
 */
export default {
  page: {
    title: "File Upload",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { vueDropzone: vue2Dropzone, Layout, PageHeader },
  data() {
    return {
      title: "File Upload",
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
          text: "File Upload",
          active: true
        }
      ],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
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
            <h4 class="card-title">Dropzone</h4>
            <p
              class="card-title-desc"
            >DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.</p>
            <div class="mb-5">
              <!-- file upload -->
              <vue-dropzone id="dropzone" ref="myVueDropzone" :options="dropzoneOptions"></vue-dropzone>
            </div>
            <div class="text-center mt-3">
              <button type="button" class="btn btn-primary">Send Files</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>