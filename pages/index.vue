<script setup>
import { ref, onMounted } from "vue";
const splashScreenVisible = ref(true);
setTimeout(() => {
  splashScreenVisible.value = false;
}, 8000);
</script>

<template>
  <div>
    <AtomsSplashScreen v-if="splashScreenVisible" />
    <OrganismsLogin v-else />
  </div>
</template>
