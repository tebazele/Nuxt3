<script setup>
let test = ref(Math.floor(Math.random() * 1000000))

  function randomizeNumber() {
   test.value = Math.floor(Math.random() * 1000000)
  }
</script>

<template>

<div class="container-fluid viewHeight">
  <div class="row align-items-start">
    <div class="col-12 text-center">
      <h1>Hello from the Home Page!</h1>
    </div>
  </div>
  <div class="row justify-content-center align-items-center">
    <div class="col-12 text-center">
      <ClientOnly><p class="fs-1">Hello, here is a random number {{test}}.</p></ClientOnly>
    </div>
    <div v-if="test > 900000" class="col-12 text-center">
      <h3>You're strong in the force.</h3>
    </div>
    <ClientOnly><button @click="randomizeNumber" class="col-5 btn btn-outline">Randomizer</button></ClientOnly>
  </div>
</div>
</template>

<style scoped>

.viewHeight {
height: 100dvh;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
}

</style>