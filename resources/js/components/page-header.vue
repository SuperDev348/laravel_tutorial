<script>
/**
 * Page-header component
 */
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<template>
  <!-- start page title -->
  <div class="row align-items-center">
    <div class="col-sm-6">
      <div class="page-title-box">
        <h4 class="font-size-18">{{ title }}</h4>
        <div class="page-title-right">
          <b-breadcrumb :items="items" class="m-0"></b-breadcrumb>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="float-right d-none d-md-block">
        <b-dropdown right variant="primary">
          <template v-slot:button-content>
            <i class="mdi mdi-settings mr-2"></i> Settings
          </template>
          <a class="dropdown-item" href="javascript: void(0);">Action</a>
          <a class="dropdown-item" href="javascript: void(0);">Another action</a>
          <a class="dropdown-item" href="javascript: void(0);">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="javascript: void(0);">Separated link</a>
        </b-dropdown>
      </div>
    </div>
  </div>
  <!-- end page title -->
</template>
