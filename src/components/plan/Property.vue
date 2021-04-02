<template>
  <div>
    <div class="Align-center">
      <div class="property bg-white lg:block hidden">
        <div class="pt-5">
          <div class="text-gray-600 text-center">
            <div class="mt-4">
              <h1 class="text-2xl font-thin uppercase">
                here is our premium plan for property:
              </h1>
            </div>
          </div>
          <div
            class="py-16 justify-center flex lg:flex-row gap-4 lg:mx-auto sm:mx-2 lg:w-1/2 sm:w-full"
          >
            <button
              class="w-48 h-16 px-4 bg-blue-300 rounded-md shadow-lg hover:bg-blue-500 focus:outline-none"
              @click="showYearly = !showYearly"
            >
              <p class="w-18 text-white font-bold">Bill Yearly</p>
            </button>
            <button
              class="w-48 h-16 px-4 bg-gray-600 rounded-md shadow-lg hover:bg-gray-300 focus:outline-none"
              @click="showMonthly = !showMonthly"
            >
              <p class="w-18 text-white font-bold">Bill Monthly</p>
            </button>
          </div>
          <div class="w-2/3 h-2/3 mx-auto">
            <div class="w-full h-auto">
              <div
                v-bind="year"
                class="grid grid-cols-3 justify-center gap-4 text-center yearlyplan"
                v-if="showYearly"
                style="hidden"
              >
                <div
                  class="w-full h-auto px-4 py-8 border-2 rounded-xl shadow-lg transform hover:scale-110 motion-reduce:transform-none duration-1000"
                >
                  <div class="flex flex-row gap-4 justify-around">
                    <div
                      class="w-16 h-16 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center justify-center"
                    >
                      circle
                    </div>
                    <div class="flex flex-col block px-2 py-2 w-1/2 text-left">
                      <span class="font-bold text-2xl text-gray-600 mb-4"
                        >Basic Plan</span
                      >
                      <span class="text-base font-bold text-green-600"
                        >Yearly</span
                      >
                    </div>
                  </div>
                  <div class="w-full py-4 px-4">
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        x
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        x
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        x
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        x
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-auto px-4 py-8 border-2 rounded-xl shadow-lg transform hover:scale-110 motion-reduce:transform-none duration-1000"
                >
                  <div class="flex flex-row gap-4 justify-around">
                    <div
                      class="w-16 h-16 rounded-full flex bg-yellow-300 font-bold text-white shadow-lg items-center justify-center"
                    >
                      circle
                    </div>
                    <div class="flex flex-col block px-2 py-2 w-1/2 text-left">
                      <span class="font-bold text-2xl text-gray-600 mb-4"
                        >Basic Plan</span
                      >
                      <span class="text-base font-bold text-green-600"
                        >Yearly</span
                      >
                    </div>
                  </div>
                  <div class="w-full py-4 px-4">
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        c
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        c
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        c
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        c
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-auto px-4 py-8 border-2 rounded-xl shadow-lg transform hover:scale-110 motion-reduce:transform-none duration-1000"
                >
                  <div class="flex flex-row gap-4 justify-around">
                    <div
                      class="w-16 h-16 rounded-full flex bg-red-300 font-bold text-white shadow-lg items-center justify-center"
                    >
                      circle
                    </div>
                    <div class="flex flex-col block px-2 py-2 w-1/2 text-left">
                      <span class="font-bold text-2xl text-gray-600 mb-4"
                        >Basic Plan</span
                      >
                      <span class="text-base font-bold text-green-600"
                        >Yearly</span
                      >
                    </div>
                  </div>
                  <div class="w-full py-4 px-4">
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        I
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        I
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        I
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        I
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-bind="month"
                class="grid grid-cols-3 justify-center gap-4 text-center monthlyplan"
                v-if="showMonthly"
                style="hidden"
              >
                <div
                  class="w-full h-auto px-4 py-8 border-2 rounded-xl shadow-lg transform hover:scale-110 motion-reduce:transform-none duration-1000"
                >
                  <div class="flex flex-row gap-4 justify-around">
                    <div
                      class="w-16 h-16 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center justify-center"
                    >
                      circle
                    </div>
                    <div class="flex flex-col block px-2 py-2 w-1/2 text-left">
                      <span class="font-bold text-2xl text-gray-600 mb-4"
                        >Basic Plan</span
                      >
                      <span class="text-base font-bold text-green-600"
                        >Monthly</span
                      >
                    </div>
                  </div>
                  <div class="w-full py-4 px-4">
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        x
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        x
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        x
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        x
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-auto px-4 py-8 border-2 rounded-xl shadow-lg transform hover:scale-110 motion-reduce:transform-none duration-1000"
                >
                  <div class="flex flex-row gap-4 justify-around">
                    <div
                      class="w-16 h-16 rounded-full flex bg-yellow-300 font-bold text-white shadow-lg items-center justify-center"
                    >
                      circle
                    </div>
                    <div class="flex flex-col block px-2 py-2 w-1/2 text-left">
                      <span class="font-bold text-2xl text-gray-600 mb-4"
                        >Basic Plan</span
                      >
                      <span class="text-base font-bold text-green-600"
                        >Monthly</span
                      >
                    </div>
                  </div>
                  <div class="w-full py-4 px-4">
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        c
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        c
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        c
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        c
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-auto px-4 py-8 border-2 rounded-xl shadow-lg transform hover:scale-110 motion-reduce:transform-none duration-1000"
                >
                  <div class="flex flex-row gap-4 justify-around">
                    <div
                      class="w-16 h-16 rounded-full flex bg-red-300 font-bold text-white shadow-lg items-center justify-center"
                    >
                      circle
                    </div>
                    <div class="flex flex-col block px-2 py-2 w-1/2 text-left">
                      <span class="font-bold text-2xl text-gray-600 mb-4"
                        >Basic Plan</span
                      >
                      <span class="text-base font-bold text-green-600"
                        >Monthly</span
                      >
                    </div>
                  </div>
                  <div class="w-full py-4 px-4">
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        I
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        I
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        I
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-around py-4">
                      <div
                        class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                      >
                        I
                      </div>
                      <div class="px-2 py-2 w-1/2 text-left">
                        <span class="font-bold text-base text-gray-600 mb-4">
                          Plan</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="property bg-white lg:hidden block">
        <div class="pt-20">
          <h1
            class="pt-2 capitalize text-center font-normal text-xl w-2/3 mx-auto pb-8"
          >
            here is our premium plan for property:
          </h1>
        </div>
        <div class="flex flex-col items-center w-2/3 mx-auto py-5 space-y-4">
          <button
            class="w-48 h-16 px-4 bg-blue-300 rounded-md shadow-lg hover:bg-blue-500 focus:outline-none"
          >
            <p class="w-18 text-white font-bold">Bill Yearly</p>
          </button>
          <button
            class="w-48 h-16 px-4 bg-gray-600 rounded-md shadow-lg hover:bg-gray-300 focus:outline-none"
          >
            &nbsp;
            <p class="w-18 text-white font-bold">Bill Monthly</p>
          </button>
        </div>
        <div class="flex flex-col w-full px-8 pt-10 space-y-4">
          <div class="w-full h-auto px-4 py-8 border-2 rounded-xl shadow-lg">
            <div class="flex flex-row gap-4 justify-around">
              <div
                class="w-16 h-16 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center justify-center"
              >
                circle
              </div>
              <div class="flex flex-col block px-2 py-2 w-1/2 text-left">
                <span class="font-bold text-2xl text-gray-600 mb-4"
                  >Basic Plan</span
                >
                <span class="text-base font-bold text-green-600">Free</span>
              </div>
            </div>
            <div class="w-full py-4 px-4">
              <div class="flex flex-row gap-4 justify-around py-4">
                <div
                  class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                >
                  x
                </div>
                <div class="px-2 py-2 w-1/2 text-left">
                  <span class="font-bold text-base text-gray-600 mb-4"
                    >Basic Plan</span
                  >
                </div>
              </div>
              <div class="flex flex-row gap-4 justify-around py-4">
                <div
                  class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                >
                  x
                </div>
                <div class="px-2 py-2 w-1/2 text-left">
                  <span class="font-bold text-base text-gray-600 mb-4"
                    >Basic Plan</span
                  >
                </div>
              </div>
              <div class="flex flex-row gap-4 justify-around py-4">
                <div
                  class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                >
                  x
                </div>
                <div class="px-2 py-2 w-1/2 text-left">
                  <span class="font-bold text-base text-gray-600 mb-4"
                    >Basic Plan</span
                  >
                </div>
              </div>
              <div class="flex flex-row gap-4 justify-around py-4">
                <div
                  class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                >
                  x
                </div>
                <div class="px-2 py-2 w-1/2 text-left">
                  <span class="font-bold text-base text-gray-600 mb-4"
                    >Basic Plan</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="w-full h-auto px-4 py-8 border-2 rounded-xl shadow-lg">
            <div class="flex flex-row gap-4 justify-around">
              <div
                class="w-16 h-16 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center justify-center"
              >
                circle
              </div>
              <div class="flex flex-col block px-2 py-2 w-1/2 text-left">
                <span class="font-bold text-2xl text-gray-600 mb-4"
                  >Basic Plan</span
                >
                <span class="text-base font-bold text-green-600">Free</span>
              </div>
            </div>
            <div class="w-full py-4 px-4">
              <div class="flex flex-row gap-4 justify-around py-4">
                <div
                  class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                >
                  x
                </div>
                <div class="px-2 py-2 w-1/2 text-left">
                  <span class="font-bold text-base text-gray-600 mb-4"
                    >Basic Plan</span
                  >
                </div>
              </div>
              <div class="flex flex-row gap-4 justify-around py-4">
                <div
                  class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                >
                  x
                </div>
                <div class="px-2 py-2 w-1/2 text-left">
                  <span class="font-bold text-base text-gray-600 mb-4"
                    >Basic Plan</span
                  >
                </div>
              </div>
              <div class="flex flex-row gap-4 justify-around py-4">
                <div
                  class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                >
                  x
                </div>
                <div class="px-2 py-2 w-1/2 text-left">
                  <span class="font-bold text-base text-gray-600 mb-4"
                    >Basic Plan</span
                  >
                </div>
              </div>
              <div class="flex flex-row gap-4 justify-around py-4">
                <div
                  class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                >
                  x
                </div>
                <div class="px-2 py-2 w-1/2 text-left">
                  <span class="font-bold text-base text-gray-600 mb-4"
                    >Basic Plan</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="w-full h-auto px-4 py-8 border-2 rounded-xl shadow-lg">
            <div class="flex flex-row gap-4 justify-around">
              <div
                class="w-16 h-16 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center justify-center"
              >
                circle
              </div>
              <div class="flex flex-col block px-2 py-2 w-1/2 text-left">
                <span class="font-bold text-2xl text-gray-600 mb-4"
                  >Basic Plan</span
                >
                <span class="text-base font-bold text-green-600">Free</span>
              </div>
            </div>
            <div class="w-full py-4 px-4">
              <div class="flex flex-row gap-4 justify-around py-4">
                <div
                  class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                >
                  x
                </div>
                <div class="px-2 py-2 w-1/2 text-left">
                  <span class="font-bold text-base text-gray-600 mb-4"
                    >Basic Plan</span
                  >
                </div>
              </div>
              <div class="flex flex-row gap-4 justify-around py-4">
                <div
                  class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                >
                  x
                </div>
                <div class="px-2 py-2 w-1/2 text-left">
                  <span class="font-bold text-base text-gray-600 mb-4"
                    >Basic Plan</span
                  >
                </div>
              </div>
              <div class="flex flex-row gap-4 justify-around py-4">
                <div
                  class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                >
                  x
                </div>
                <div class="px-2 py-2 w-1/2 text-left">
                  <span class="font-bold text-base text-gray-600 mb-4"
                    >Basic Plan</span
                  >
                </div>
              </div>
              <div class="flex flex-row gap-4 justify-around py-4">
                <div
                  class="w-6 h-6 rounded-full flex bg-green-300 font-bold text-white shadow-lg items-center mt-2 justify-center"
                >
                  x
                </div>
                <div class="px-2 py-2 w-1/2 text-left">
                  <span class="font-bold text-base text-gray-600 mb-4"
                    >Basic Plan</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Property",
  data: () => {
    return {
      showYearly: true,
      showMonthly: true,
    };
  },
  /*methods() {
   switchPlan(){
      if (this.showYearly.display=="none"){
        this.showYearly.display="none";
        this.showMonthly.display="block";
      }
    };
  }, */
};
</script>

<style lang="css" scoped>
.property {
  height: 800px;
}
</style>
