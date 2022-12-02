<template>
  <footer class="footer">
    <div class="headSection">
      <h2>Boost your links today</h2>
      <button class="">Get Started</button>
    </div>
    <div class="body">
      <LogoVue />
      <ul>
        <li>Features</li>
        <li>Link Shortening</li>
        <li>Brand links</li>
        <li>Analytics</li>
      </ul>
      <ul>
        <li>Resources</li>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <ul>
        <li>Company</li>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      <div class="icons_wrapper">
        <div class="icons_wrapper" v-for="(icon, index) in icons" :key="index">
          <img :src="getImageUrl(icon)" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import LogoVue from "../icons/logo.vue";

export default defineComponent({
  components: { LogoVue },
  setup() {
    const icons = ref([
      "icon-facebook",
      "icon-twitter",
      "icon-pinterest",
      "icon-instagram",
    ]);
    const getImageUrl = (name: any) => {
      return new URL(`../../assets/images/${name}.svg`, import.meta.url).href;
    };
    return { icons, getImageUrl };
  },
});
</script>
