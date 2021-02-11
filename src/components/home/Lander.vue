<template>
  <b-container fluid class="bg-custom">
    <b-row class="text-center justify-content-md-center">
      <b-col sm="8" class="text-white">
        <div class="header">
          <div class="mb-4">
            Find Anything in 
            <b-button type="submit" style="padding: 0px 6px" variant="secondary"
              >All Nigeria</b-button
            >
          </div>
          <b-form inline class="justify-content-md-center">
            <!-- <label class="sr-only" for="inline-form-input-username"
            >Username</label
          > -->
            <b-input-group class="mb-2 mb-sm-0 search-form">
              <b-input
                class="border-none"
                style="width: 80%; height: inherit; outline: none"
                id="inline-form-input-username"
                placeholder="Type your search here"
              ></b-input>
              <b-button
                class="border-none"
                style="width: 20%"
                type="submit"
                variant="warning"
                ><svg
                  stroke-width="0"
                  class="search"
                  style="
                    width: 20px;
                    height: 20px;
                    max-width: 20px;
                    max-height: 20px;
                    fill: rgb(255, 255, 255);
                    stroke: inherit;
                  "
                >
                  <use xlink:href="#search">
                    <svg id="search" viewBox="0 0 20 20">
                      <g clip-path="url(#clip0)">
                        <path
                          d="M19.1572 18.4394L14.5897 14.0849C15.9655 12.5884 16.807 10.5923 16.807 8.40319C16.807 3.7696 13.0374 0 8.40384 0C3.7696 0 0 3.7696 0 8.40319C0 13.0368 3.7696 16.8064 8.40384 16.8064C10.1953 16.8064 11.8579 16.2426 13.2228 15.283L17.9077 19.7505C18.0822 19.9179 18.3067 20.0006 18.5312 20.0006C18.7704 20.0006 19.009 19.9064 19.1867 19.7197C19.5318 19.3573 19.5183 18.7845 19.1572 18.4394ZM1.62984 8.40319C1.62984 4.66759 4.66887 1.62984 8.40448 1.62984C12.1388 1.62984 15.1778 4.66823 15.1778 8.40319C15.1778 12.1388 12.1388 15.1765 8.40448 15.1765C4.66887 15.1765 1.62984 12.1382 1.62984 8.40319Z"
                          fill="inherit"
                        ></path>
                      </g>
                    </svg>
                  </use></svg
              ></b-button>
            </b-input-group>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  margin: 80px auto;
}

.justify-content-md-center {
  justify-content: center !important;
}

.bg-custom {
  background: #35a84f;
}

.search-form {
  width: 100%;
  min-height: 55px;
}

.border-none {
  border: 0;
  border-radius: 0;
}

.border-none:focus {
  outline: none !important;
  box-shadow: none !important;
}
</style>