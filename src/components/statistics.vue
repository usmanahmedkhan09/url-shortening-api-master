<template>
  <div class="statistics">
    <div class="des">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
    </div>
    <div class="card_container">
      <div
        class="card"
        v-for="(card, index) in statistics"
        :key="index"
        :tite="card.title"
        :class="card.title"
      >
        <div class="icon_wrapper">
          <img :src="getImageUrl(card.pic)" alt="" />
        </div>
        <h3>{{ card.title }}</h3>
        <p>{{ card.detail }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const statistics = ref([
      {
        title: "Brand Recognition",
        pic: "icon-brand-recognition",
        detail:
          "Boost your brand recognition with each click.Generice links don;t mean a thing.Branded links help inistil confidence in your content",
      },
      {
        title: "Details Records",
        pic: "icon-detailed-records",
        detail:
          "Gain insights into who is clicking your links.Knowning when and where people engage with you content helps inform better decisions",
      },
      {
        title: "Fully Customizable",
        pic: "icon-fully-customizable",
        detail:
          "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
      },
    ]);

    const getImageUrl = (name: any) => {
      return new URL(`../assets/images/${name}.svg`, import.meta.url).href;
    };
    return { statistics, getImageUrl };
  },
});
</script>
