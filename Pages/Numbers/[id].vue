<script setup>
let test = ref(Math.floor(Math.random() * 1000000))

  function randomizeNumber() {
   test.value = Math.floor(Math.random() * 1000000)
  }
  let {id:id} = useRoute().params
  onMounted(() => console.log(id))
</script>

<template>

<div class="container">
  <div class="row">
   <div class="col-1">
    <NuxtLink to="/"><span class="fs-1"><i class="mdi mdi-home"></i>Home</span></NuxtLink>
   </div>
  </div>
</div>

<div class="container-fluid viewHeight align-items-center">
  <div class="row">
    <div class="col-12 text-center">
      <h1>You're on Number: {{ id }} Page.</h1>
    </div>
  </div>
<div class="row justify-content-center">
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