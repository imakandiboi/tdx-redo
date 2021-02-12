<template>
  <div>
    <form action="">
      <div>
        <label for="">Email:</label>
        <input type="text" placeholder="Enter Email" />
      </div>
      <div>
        <label for="">Password:</label>
        <input type="text" placeholder="Enter Password" />
      </div>
      <div>
        <label for="">First Name:</label>
        <input type="text" placeholder="Enter First name" />
      </div>
      <div>
        <label for="">Last Name:</label>
        <input type="text" placeholder="Enter Last name" />
      </div>
      <div>
        <label for="">Phone Number:</label>
        <input type="text" placeholder="Enter Phone Number (digits only)" />
      </div>
      <div>
        <label class="inline-flex items-center mt-3">
          <input
            type="checkbox"
            class="form-checkbox h-5 w-5 text-gray-800"
          /><span class="ml-2 text-gray-700">Terms & Conditions</span>
        </label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>