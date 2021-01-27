<script>
import { layoutComputed } from "@/state/helpers";

import Vertical from "@/router/layouts/vertical";
import Horizontal from "@/router/layouts/horizontal";

export default {
  components: { Vertical, Horizontal },
  computed: {
    ...layoutComputed
  }
};
</script>

<template>
  <div>
    <vertical v-if="layoutType === 'vertical'" :layout="layoutType">
      <slot />
    </vertical>

    <Horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
      <slot />
    </Horizontal>
  </div>
</template>