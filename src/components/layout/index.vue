<template>
  <HeaderVue />
  <!-- <ContentVue /> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderVue from "./header.vue";
import ContentVue from "./content.vue";

export default defineComponent({
  components: { HeaderVue, ContentVue },
  setup() {
    return {};
  },
});
</script>
