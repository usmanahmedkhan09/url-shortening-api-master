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
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import WorkingIcon from "@/components/icons/illustration-working.vue";

export default defineComponent({
  components: { WorkingIcon },
  setup() {
    return {};
  },
});
</script>
