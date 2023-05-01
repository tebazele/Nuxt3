<script setup>

const {data : cars} = await useFetch('https://bcw-sandbox.herokuapp.com/api/cars')
console.log(cars)
</script>

<template>

<div class="container-fluid">
  <nav>
    <div class="row p-2">
      <div class="col-1">
        <NuxtLink to="/"><button class="btn">Home</button></NuxtLink>
      </div>
      <div class="col-1"> <NuxtLink to="/cars"><button class="btn">Cars</button></NuxtLink></div>
      <div class="col-1"> <NuxtLink to="/homes"><button class="btn">Homes</button></NuxtLink></div>
      <div class="col-1"> <NuxtLink to="/jobs"><button class="btn">Jobs</button></NuxtLink></div>
    </div>
  </nav>
<div class="row justify-content-center">
 
  <div v-for="c in cars" :key="c.id" class="col-2 mt-3 mx-3 rounded carCard">
    <NuxtLink :to="`/cars/${c.id}`"><img class="cardSize" :src="c.imgUrl" alt=""></NuxtLink>
    <p class="fs-5 px-2 border-top">
      {{ c.make }} {{ c.model }}
    </p>
    <p class="px-2">Price: ${{ c.price }}</p>
  </div>

</div>
</div>

</template>

<style scoped>

.cardSize {
  width: 100%;
  height: 23dvh;
  border-top-left-radius: 2%;
  border-top-right-radius: 2%;
}

p{
  margin: 0;
  padding: 0;
}

.carCard:hover{
  box-shadow: 0px 0px 8px black;
  cursor: pointer;
}

.carCard {
  padding: 0;
  border: 1px rgba(0, 0, 0, 0.185) solid;
}

img{
  object-fit: cover;
}

</style>