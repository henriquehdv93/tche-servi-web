<template>
  <div class="bg-green-900 w-screen h-screen">
    <div class="pt-16 flex align-center flex-col px-3">
      <AtomsLogo class="text-center inline-block" />
      <button
        @click="handleShowAuthentication"
        class="rounded-md bg-red-700 mt-20 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 transition-all duration-300"
      >
        Login
      </button>
      <button
        @click="handleShowSignUp"
        class="rounded-md bg-red-500 mt-5 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 transition-all duration-300"
      >
        Cadastre-se
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
<script setup>
function handleShowAuthentication() {
  this.$router.push({
    name: "login",
  });
}
function handleShowAuthentication() {
  this.$router.push({
    name: "cadastro",
  });
}
</script>
