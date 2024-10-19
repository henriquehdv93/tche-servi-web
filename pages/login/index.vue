<template>
  <div class="bg-green-900 w-screen h-screen">
    <div class="pt-16 flex align-center flex-col px-3">
      <AtomsLogo class="text-center inline-block" />
      <form ref="formLogin">
        <div>
          <label for="email">Seu e-mail</label>
          <input type="text" id="email" placeholder="Digite seu email" />
        </div>
        <div>
          <label for="password">Senha</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            placeholder="Digite sua senha"
          />
          <span @click="handleShowPassword">eye</span>
        </div>
      </form>
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
import { ref } from "vue";
const showPassword = ref(false);
function handleShowPassword() {
  showPassword.value = !!showPassword.value ? false : true;
}
function handleSubmitAuthentication() {
  this.$router.push({
    name: "login",
  });
}
</script>
