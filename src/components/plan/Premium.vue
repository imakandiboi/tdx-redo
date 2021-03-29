<template>
  <div
    class="w-full h-full landing bg-gradient-to-b from-explorerGreen-300 to-explorerGreen-500"
  >
    <div class="pt-10">
      <div class="bg-white w-1/2 sm:w-full mx-auto justify-center premium-box">
        <div class="premium-box-title text-center">
          <span>
            <svg id="gem" viewBox="0 0 23 20">
              <path
                d="M5.34315 0.33679L6.72989 1.83478L0.821477 7.01886L-0.113678 6.08013L-0.12654 5.41496L5.34315 0.33679Z"
                fill="#C4FEFF"
              ></path>
              <path
                d="M6.72938 1.83473L3.31935 7.57863L0.820964 7.01882L6.72938 1.83473Z"
                fill="#7DEAFF"
              ></path>
              <path
                d="M6.51518 8.05321L3.31929 7.57883L6.72932 1.83493L6.51518 8.05321Z"
                fill="#C2FFFF"
              ></path>
              <path
                d="M10.6415 8.16606L6.72949 1.83472L6.51535 8.05299L10.6415 8.16606Z"
                fill="#79D2FF"
              ></path>
              <path
                d="M0.015625 6.23633L0.821104 7.01894L3.31949 7.57875L11.5751 20.0282L0.015625 6.23633Z"
                fill="#5094EE"
              ></path>
              <path
                d="M10.6415 8.16624L11.5751 20.0282L6.51533 8.05317L10.6415 8.16624Z"
                fill="#85CBFF"
              ></path>
              <path
                d="M15.0842 8.1245L10.6419 8.16611L11.5754 20.0281L15.0842 8.1245Z"
                fill="#30A3FE"
              ></path>
              <path
                d="M3.31961 7.57856L6.5155 8.05294L11.5753 20.028L3.31961 7.57856Z"
                fill="#AEEEFF"
              ></path>
              <path
                d="M10.6425 8.16652L15.033 1.7788L15.0848 8.12491L14.371 8.15435L10.6425 8.16652Z"
                fill="#4899E0"
              ></path>
              <path
                d="M6.73039 1.83466L15.033 1.77828L10.6424 8.166L6.73039 1.83466Z"
                fill="#53ADFB"
              ></path>
              <path
                d="M18.0518 0.444279L12.1039 -0.344326L5.34337 0.336806L6.73011 1.83479L15.0327 1.77841L18.0518 0.444279Z"
                fill="#90D5FF"
              ></path>
              <path
                d="M20.7193 7.42469L22.6027 6.57365L11.5751 20.0282L20.7193 7.42469Z"
                fill="#3A8AD1"
              ></path>
              <path
                d="M18.0527 0.444092L23.2564 5.71085L22.6043 6.57342L18.0527 0.444092Z"
                fill="#2B83E3"
              ></path>
              <path
                d="M15.033 1.77812L22.6036 6.57331L18.052 0.443982L15.033 1.77812Z"
                fill="#66BDFE"
              ></path>
              <path
                d="M15.083 8.12443L18.113 7.61419L15.0312 1.77832L15.083 8.12443Z"
                fill="#6DC7FF"
              ></path>
              <path
                d="M20.7184 7.42456L15.0312 1.77832L18.113 7.61419L20.7184 7.42456Z"
                fill="#6BECFF"
              ></path>
              <path
                d="M22.6019 6.57352L20.7184 7.42456L15.0312 1.77832L22.6019 6.57352Z"
                fill="#6CD6FF"
              ></path>
              <path
                d="M18.1134 7.61457L20.7189 7.42494L11.5747 20.0284L18.1134 7.61457Z"
                fill="#94D5FF"
              ></path>
              <path
                d="M15.0835 8.12457L11.5747 20.0282L18.1134 7.61433L15.0835 8.12457Z"
                fill="#5DAFFE"
              ></path>
            </svg>
          </span>
          <span class="title-text">
            <h4>Premium Service</h4>
          </span>
        </div>
        <div class="premium-box-aside text-center sm:h-32">
          <h5 class="inner-text sm:h-20">
            Premium services are the promotion tools for getting more clients
            and selling the goods faster. Choose an appropriate category for you
            and make money easier.
          </h5>
        </div>
      </div>
      <myCategory />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import myCategory from "@/components/plan/myCategory.vue";
export default {
  name: "Premium",
  components: {
    myCategory,
  },
};
</script>

<style lang="css" scoped>
.landing {
  height: 90vh;
}
.premium-box {
  width: 30%;
  height: 200px;
  justify-content: center;
  align-items: center;

  padding: 30px 0;
  background-color: rgb(255, 255, 255);
  border-radius: 6px;
}
.premium-box-title {
  width: auto;
  border-bottom: 1px solid #cacab7;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
}
.title-text {
  font-weight: 500;
  font-size: 25px;
  color: #4f4f4f;
}
.premium-box-aside {
  font-weight: 200;
  font-size: 15px;
  height: 50px;
  color: #4f4f4f;
}
.inner-text {
  width: auto;
  height: auto;
  font-size: 12px;
  margin: 0px 30px;
}
@media screen and (max-width: 900px) {
  .premium-box {
    width: 330px;
    height: 30%;
    justify-content: center;
    align-items: center;

    background-color: rgb(255, 255, 255);
    border-radius: 6px;
  }
}
@media screen and (max-width: 600px) {
  .inner-text h5 {
    font-size: 12px;
  }
}
</style>