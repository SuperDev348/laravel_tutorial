<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Blank page component
 */
export default {
  page: {
    title: "Blank Page",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Blank",
      items: [
        {
          text: "Veltrix",
          href: "/"
        },
        {
          text: "Extra Pages",
          href: "/"
        },
        {
          text: "Blank",
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
  </Layout>
</template>