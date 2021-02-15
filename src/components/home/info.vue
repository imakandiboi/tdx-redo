<template>
  <div class="grid grid-cols-4 w-11/12">
    <div class="col-span-3 m-2">
      <agile class="main">
        <div
          class="slide"
          v-for="(slide, index) in slides"
          :key="index"
          :class="`slide--${index}`"
        >
          <img :src="slide" />
        </div>
      </agile>
    </div>
    <div class="col-span-1 m-2 p-2 bg-yellow-500 text-center text-white">
      <span class="block font-bold text-xl leading-none"
        >Got something to sell?</span
      >
      <button
        class="mx-auto b-post-advert-banner__button w-1/2 bg-white shadow-md focus:outline-none rounded-full relative my-2"
      >
        <div class="b-post-advert-banner__button_inner"></div>
      </button>
      <span class="block font-bold text-lg">Post and advert for free!</span>
    </div>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  components: {
    agile: VueAgile,
  },

  data() {
    return {
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
};
</script>

<style scoped>
.b-post-advert-banner__button {
  cursor: pointer;
  transition: box-shadow 0.2s;
  will-change: box-shadow;
  display: flex;
  justify-content: center;
  align-items: center;
}

.b-post-advert-banner__button:before {
  content: "";
  display: table;
  padding-top: 100%;
}

.b-post-advert-banner__button_inner {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}

.b-post-advert-banner__button_inner:before {
  width: 7%;
  height: 60%;
}
.b-post-advert-banner__button_inner:after {
  width: 60%;
  height: 7%;
}

.b-post-advert-banner__button_inner:after,
.b-post-advert-banner__button_inner:before {
  content: "";
  background-color: #ffa010;
  position: absolute;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

.agile__slide img {
  object-fit: cover;
}

.agile {
  width: 100%;
}
.agile__actions {
  margin-top: 20px;
}
.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}

.agile__nav-button:hover {
  color: white;
}

.slide {
  align-items: center;
  color: #fff;
  display: flex;
  height: 210px;
  justify-content: center;
}

.main >>> .agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
  color: #fff;
}

.main >>> .agile__nav-button:hover {
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
}

.main >>> .agile__nav-button {
  background-color: rgba(0, 0, 0, 0.4);

  width: 40px;
  height: 80px;
}

.main >>> .agile__nav-button--prev {
  left: 0px;
  border-radius: 0 8px 8px 0;
}

.main >>> .agile__nav-button--next {
  right: 0;
  border-radius: 8px 0px 0px 8px;
}

/* .main >>> .agile__list {
  height: 100%;
} */
</style>