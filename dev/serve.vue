<!--
 * @Author: 时不待我 790002517@qq.com
 * @Date: 2022-12-17 22:18:59
 * @LastEditors: 时不待我 790002517@qq.com
 * @LastEditTime: 2022-12-18 13:16:53
-->
<script lang="ts">
import Vue from "vue";
import VuePokemonCardsCss from "@/components/card.vue";


let cards = require("@/assets/data.json");
cards = cards.map((card) => {
  return {
    ...card,
    rarity: card.rarity.toLowerCase(),
    supertype: card.supertype.toLowerCase(),
    subtypes: Array.isArray(card.subtypes)
      ? card.subtypes.join(" ").toLowerCase()
      : card.subtypes.toLowerCase(),
    gallery: card.number.startsWith("TG"),
  };
});
export default Vue.extend({
  name: "ServeDev",
  components: {
    VuePokemonCardsCss,
  },
  data() {
    return {
      active: null,
      slices:
        // basics
        cards.slice(0, 6),
    };
  },
});
</script>

<template>
  <div class="showcase" @click="active = null">
    <div>
      <div class="slice">
        <vue-pokemon-cards-css
          v-for="card of slices"
          @click.native.stop="active = active === card ? null : card"
          :key="card.id"
          :name="card.name"
          :img="card.images.large"
          :number="card.number"
          :supertype="card.supertype"
          :subtypes="card.subtypes"
          :rarity="card.rarity"
          :gallery="card.gallery"
          :active="active === card"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.showcase {
  padding: 4rem;
}

.slice {
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
}

hr {
  opacity: 0.35;
  border-bottom: 1px solid #000;
  margin-bottom: 3rem;
}
</style>