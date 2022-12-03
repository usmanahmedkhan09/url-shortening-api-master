<template>
  <header class="header">
    <div class="logo_wrapper">
      <ul>
        <li><LogoIcon /></li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <div class="buttons">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
      <MenuIcon class="MenuIcon" @click="show = !show" />
    </div>
    <div class="mobileSidebar" v-if="show">
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
import { defineComponent, ref } from "vue";
import LogoIcon from "@/components/icons/logo.vue";
import MenuIcon from "@/components/icons/menu.vue";

export default defineComponent({
  components: { LogoIcon, MenuIcon },
  setup() {
    const show = ref(false);
    return {
      show,
    };
  },
});
</script>
