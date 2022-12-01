<template>
  <main class="content">
    <div class="section--one">
      <div class="des">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>
      <div class="image_wrapper">
        <WorkingIcon />
      </div>
    </div>
    <div class="section--two">
      <UrlShortenInput />
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import WorkingIcon from "@/components/icons/illustration-working.vue";
import UrlShortenInput from "@/components/urlshortencomponent.vue";

export default defineComponent({
  components: { WorkingIcon, UrlShortenInput },
  setup() {
    return {};
  },
});
</script>
