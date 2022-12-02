<template>
  <div class="urlInput">
    <div class="inputContainer">
      <div class="input_wrapper">
        <input
          @paste="setToInitialState()"
          v-model="data.url"
          type="text"
          placeholder="Shorten a link here..."
          :class="data.error ? 'error' : ''"
        />
        <p>
          {{ data.errorMessage }}
        </p>
      </div>
      <button
        :disabled="isDisable"
        class="button"
        @click.stop="shortenApiUrl()"
      >
        Shorten it!
      </button>
    </div>
    <div class="urlContainer" v-for="(link, index) in shortLinks" :key="index">
      <p class="longurl">{{ link.original_link }}</p>
      <p class="shorturl" @click="moveToLink(link.code)">
        {{ link.full_short_link }}
      </p>
      <button
        @click="copyToClipboard(link.original_link, $event)"
        :class="link && link.isCopied ? 'isCopied' : ''"
      >
        {{ link && link.isCopied ? "Copied!" : "Copy" }}
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useApiShorten } from "@/composables/composables";
export default defineComponent({
  setup() {
    const {
      data,
      shortenApiUrl,
      shortLinks,
      moveToLink,
      copyToClipboard,
      isDisable,
    } = useApiShorten();

    const setToInitialState = () => {
      data.value.error = false;
      data.value.errorMessage = "";
    };
    return {
      data,
      isDisable,
      shortLinks,
      shortenApiUrl,
      moveToLink,
      copyToClipboard,
      setToInitialState,
    };
  },
});
</script>
