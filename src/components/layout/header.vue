<template>
  <header class="header">
    <ul class="logo_wrapper">
      <li><LogoIcon /></li>
      <li>Features</li>
      <li>Pricing</li>
      <li>Resources</li>
    </ul>
    <div class="buttons">
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LogoIcon from "@/components/icons/logo.vue";

export default defineComponent({
  components: { LogoIcon },
  setup() {
    return {};
  },
});
</script>
