<template>
  <div>
    <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
      <div
        class="slide"
        v-for="(slide, index) in slides"
        :key="index"
        :class="`slide--${index}`"
      >
        <img :src="slide" />
      </div>
    </agile>
    <agile
      class="thumbnails"
      ref="thumbnails"
      :options="options2"
      :as-nav-for="asNavFor2"
    >
      <div
        style="margin: 2px;"
        class="slide slide--thumbniail"
        v-for="(slide, index) in slides"
        :key="index"
        :class="`slide--${index}`"
        @click="$refs.thumbnails.goTo(index)"
      >
        <img style="object-fit: cover; height: 100px" :src="slide" />
      </div>
      <!-- <template slot="prevButton">&lt;</template>
      <template slot="nextButton">&gt;</template> -->
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  components: {
    agile: VueAgile,
  },

  props: {
    // slides: Array,
  },

  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: true,
      },

      options2: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
            },
          },

          {
            breakpoint: 1000,
            settings: {
              navButtons: false,
            },
          },
        ],
      },

      slides: [
        "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      ],
    };
  },

  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  },
};
</script>

<style>
.slide.slide--thumbniail img {
  width: 100% !important;
}
.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}

.slide--thumbniail {
  cursor: pointer;
  height: 100px;
  transition: opacity 1s;
}

.agile__slide {
  object-fit: cover;
}

.main .agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
}

.main .agile__nav-button:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.main .agile__nav-button {
  background-color: rgba(0, 0, 0, 0.4);
  width: 40px;
  height: 80px;
}

.main .agile__nav-button--prev {
  left: 0px;
  border-radius: 0 8px 8px 0;
}

.main .agile__nav-button--next {
  right: 0;
  border-radius: 8px 0px 0px 8px;
}

.slide--thumbniail:hover {
  opacity: 0.75;
}
</style>