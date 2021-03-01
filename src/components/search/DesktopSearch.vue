<template>
  <div>
    <div class="px-36 py-8 lg:mx-auto">
      <div class="grid grid-cols-7 gap-4">
        <div class="col-span-2">
          <div class="shadow-lg mb-4">
            <div
              style="color: #fff"
              class="grid text-lg bg-gradient-to-b from-explorerGreen-300 to-explorerGreen-300 p-2 font-bold rounded-t-md"
            >
              Search in categories
            </div>
            <div style="padding: 12px" class="grid bg-white">
              <div class="text-gray-600">
                Shoes | <span class="text-gray-400">1000</span>
              </div>
              <div class="text-gray-600">
                Shoes | <span class="text-gray-400">1000</span>
              </div>
              <div class="text-gray-600">
                Shoes | <span class="text-gray-400">1000</span>
              </div>
              <div class="text-gray-600">
                Shoes | <span class="text-gray-400">1000</span>
              </div>
              <div class="text-gray-600">
                Shoes | <span class="text-gray-400">1000</span>
              </div>
            </div>
          </div>

          <div
            class="shadow-lg mb-4 rounded-md bg-white flex justify-between items-center"
          >
            <div class="grid text-md p-2 text-gray-600">
              Location
              <div class="text-gray-400">All Nigeria</div>
            </div>
            <div style="padding: 12px" class="grid">
              <div class="text-gray-400">
                <svg
                  stroke-width="0"
                  class="arrow-right"
                  style="
                    width: 6px;
                    height: 10px;
                    max-width: 6px;
                    max-height: 10px;
                    fill: rgb(153, 178, 191);
                    stroke: inherit;
                  "
                >
                  <use xlink:href="#arrow-right">
                    <svg id="arrow-right" viewBox="0 0 176.2 309.1">
                      <path
                        fill="inherit"
                        d="M174,149.3L26.9,2.2c-2.9-2.9-7.7-2.9-10.6,0L2.2,16.3C0.8,17.7,0,19.7,0,21.6s0.8,3.9,2.2,5.3l127.6,127.6L2.2,282.2
	c-1.4,1.4-2.2,3.3-2.2,5.3s0.8,3.9,2.2,5.3l14.1,14.1c1.5,1.5,3.4,2.2,5.3,2.2s3.8-0.7,5.3-2.2L174,159.9
	C176.9,156.9,176.9,152.2,174,149.3z"
                      ></path>
                    </svg>
                  </use>
                </svg>
              </div>
            </div>
          </div>

          <div class="shadow-lg mb-4 bg-white">
            <div class="grid text-md p-2 text-gray-600">Price</div>
            <div style="padding: 12px" class="grid bg-white">
              <div class="flex justify-between text-gray-600 items-center">
                <div class="border-gray-400 border w-2/5 p-t-2 p-1 rounded-md">
                  <label for="min" class="text-xs"> min </label>
                  <input
                    name="min"
                    type="text"
                    class="border-0 bg-transparent focus:border-0 p-0 m-0 w-full focus:ring-0"
                  />
                </div>
                <div class="hidden md:block">-</div>
                <div class="border-gray-400 border w-2/5 p-t-2 p-1 rounded-md">
                  <label for="max" class="text-xs"> max </label>
                  <input
                    name="max"
                    type="text"
                    class="border-0 bg-transparent focus:border-0 p-0 m-0 w-full focus:ring-0"
                  />
                </div>
              </div>

              <div class="mt-2 grid bg-white">
                <div class="text-gray-600">
                  <input type="radio" name="price-range" />
                  <label class="ml-2" for="">
                    Under 3k <span class="text-gray-400">• 1000</span>
                  </label>
                </div>
                <div class="text-gray-600">
                  <input type="radio" name="price-range" />
                  <label class="ml-2" for="">
                    Under 3k <span class="text-gray-400">• 1000</span>
                  </label>
                </div>
                <div class="text-gray-600">
                  <input type="radio" name="price-range" />
                  <label class="ml-2" for="">
                    Under 3k <span class="text-gray-400">• 1000</span>
                  </label>
                </div>
                <div class="text-gray-600">
                  <input type="radio" name="price-range" />
                  <label class="ml-2" for="">
                    Under 3k <span class="text-gray-400">• 1000</span>
                  </label>
                </div>
                <div class="text-gray-600">
                  <input type="radio" name="price-range" />
                  <label class="ml-2" for="">
                    Under 3k <span class="text-gray-400">• 1000</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="shadow-lg mb-4 bg-white">
            <div class="grid text-md p-2 text-gray-600">Condition</div>
            <div style="padding: 12px" class="grid bg-white">
              <div class="grid bg-white">
                <div class="text-gray-600">
                  <input type="radio" name="price-range" id="price-1" />
                  <label class="ml-2" for="price-1">
                    Under 3k <span class="text-gray-400">• 1000</span>
                  </label>
                </div>
                <div class="text-gray-600">
                  <input type="radio" name="price-range" />
                  <label class="ml-2" for="">
                    Under 3k <span class="text-gray-400">• 1000</span>
                  </label>
                </div>
                <div class="text-gray-600">
                  <input type="radio" name="price-range" />
                  <label class="ml-2" for="">
                    Under 3k <span class="text-gray-400">• 1000</span>
                  </label>
                </div>
                <div class="text-gray-600">
                  <input type="radio" name="price-range" />
                  <label class="ml-2" for="">
                    Under 3k <span class="text-gray-400">• 1000</span>
                  </label>
                </div>
                <div class="text-gray-600">
                  <input type="radio" name="price-range" />
                  <label class="ml-2" for="">
                    Under 3k <span class="text-gray-400">• 1000</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-5">
          <p class="text-3xl font-semibold text-gray-500 my-2">
            Cars in Nigeria
          </p>
          <div class="text-gray-500 py-5 mb-5 h-20">
            <div class="float-right">
              Sort by:
              <span class="inline-block">
                <svg
                  stroke-width="0"
                  class="inline-block mr-2"
                  style="
                    width: 20px;
                    height: 15px;
                    max-width: 20px;
                    max-height: 15px;
                    fill: rgb(61, 184, 58);
                    stroke: inherit;
                  "
                >
                  <use xlink:href="#sort">
                    <svg id="sort" viewBox="0 0 16 12">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.08773 3.80392L12.0124 0.167367C12.2556 -0.0557899 12.6498 -0.0557899 12.893 0.167367L15.8177 3.80392C16.0608 4.02707 16.0608 4.38888 15.8177 4.61204C15.5745 4.8352 15.1803 4.8352 14.9371 4.61204L13.0753 2.31727L13.0753 12L11.8301 12L11.8301 2.31727L9.96827 4.61204C9.72511 4.8352 9.33088 4.8352 9.08773 4.61204C8.84458 4.38888 8.84458 4.02707 9.08773 3.80392Z"
                        fill="inherit"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.9123 8.19608L3.98761 11.8326C3.74445 12.0558 3.35022 12.0558 3.10707 11.8326L0.182375 8.19608C-0.060779 7.97293 -0.060779 7.61112 0.182375 7.38796C0.425529 7.1648 0.819758 7.1648 1.06291 7.38796L2.9247 9.68273L2.9247 -1.67285e-07L4.16997 -1.17329e-07L4.16997 9.68273L6.03176 7.38796C6.27492 7.1648 6.66915 7.1648 6.9123 7.38796C7.15545 7.61112 7.15545 7.97293 6.9123 8.19608Z"
                        fill="inherit"
                      ></path>
                    </svg>
                  </use>
                </svg>
                <select name="time">
                  <option value="1">Recommended First</option>
                  <option value="1">Newest First</option>
                  <option value="1">Lowest Price First</option>
                  <option value="1">Highest Price First</option>
                </select>
              </span>
              <span class="inline-block">
                <svg
                  stroke-width="0"
                  class="inline-block mx-2"
                  style="
                    width: 20px;
                    height: 15px;
                    max-width: 20px;
                    max-height: 15px;
                    fill: rgb(61, 184, 58);
                    stroke: inherit;
                  "
                >
                  <use xlink:href="#clock">
                    <svg id="clock" viewBox="0 0 378.311 378.311">
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="inherit"
                          d="M189.156,0C84.858,0,0.001,84.858,0.001,189.155c0,104.298,84.857,189.155,189.155,189.155    c104.304,0,189.154-84.857,189.154-189.155C378.31,84.858,293.46,0,189.156,0z M189.156,347.144    c-87.117,0-157.988-70.87-157.988-157.988c0-87.115,70.871-157.988,157.988-157.988c87.117,0,157.986,70.873,157.986,157.988    C347.142,276.273,276.272,347.144,189.156,347.144z"
                        ></path>
                        <path
                          fill="inherit"
                          d="M204.739,182.963V75.841c0-8.606-6.977-15.584-15.583-15.584c-8.605,0-15.582,6.978-15.582,15.584v113.314    c0,4.839,2.25,9.101,5.703,11.962c0.146,0.176,0.245,0.373,0.397,0.546l58.438,66.354c3.082,3.49,7.381,5.279,11.701,5.279    c3.652,0,7.33-1.276,10.289-3.888c6.461-5.692,7.084-15.537,1.398-21.998L204.739,182.963z"
                        ></path>
                      </g>
                    </svg>
                  </use>
                </svg>
                <select name="time">
                  <option value="1">Today</option>
                  <option value="1">Yesterday</option>
                  <option value="1">Beginning</option>
                  <option value="1">End</option>
                </select>
              </span>
            </div>
          </div>
          <ProductListing />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductListing from "@/components/search/ProductListing";
export default {
  components: { ProductListing },
};
</script>

<style scoped>

</style>