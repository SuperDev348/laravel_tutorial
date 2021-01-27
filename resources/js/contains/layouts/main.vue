<script>
import { mapGetters } from 'vuex';
import Vertical from "./vertical";
import Horizontal from "./horizontal";

export default {
  components: { Vertical, Horizontal },
  computed: {
    ...mapGetters([
      'getLayoutType'
    ])
  }
};
</script>

<template>
  <div>
    <vertical v-if="getLayoutType === 'vertical'" :layout="getLayoutType">
      <slot />
    </vertical>

    <Horizontal v-if="getLayoutType === 'horizontal'" :layout="getLayoutType">
      <slot />
    </Horizontal>
  </div>
</template>