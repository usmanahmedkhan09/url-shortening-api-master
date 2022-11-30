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
    <MenuIcon class="MenuIcon" />
    <div class="mobileSidebar">
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <hr />
      <div class="buttons">
        <button>Login</button>
        <button class="active">Sign Up</button>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LogoIcon from "@/components/icons/logo.vue";
import MenuIcon from "@/components/icons/menu.vue";

export default defineComponent({
  components: { LogoIcon, MenuIcon },
  setup() {
    return {};
  },
});
</script>
