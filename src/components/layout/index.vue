<template>
  <HeaderVue />
  <ContentVue />
  <FooterVue />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderVue from "./header.vue";
import ContentVue from "./content.vue";
import FooterVue from "./footer.vue";

export default defineComponent({
  components: { HeaderVue, ContentVue, FooterVue },
  setup() {
    return {};
  },
});
</script>
