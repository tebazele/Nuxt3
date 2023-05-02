<script setup>

const { data: cars } = await useFetch('https://bcw-sandbox.herokuapp.com/api/cars', {
  method: "get"
})
console.log(cars)
</script>

<template>
  <div>

    <NavBar />

    <div class="container-fluid">
      <div class="row justify-content-center">

        <div v-for="c in cars" :key="c.id" class="col-5 col-md-2 mt-3 mx-3 rounded carCard">
          <NuxtLink :to="`/cars/${c.id}`"><img class="cardSize" :src="c.imgUrl" alt=""></NuxtLink>
          <p class="fs-5 px-2 border-top">
            {{ c.make }} {{ c.model }}
          </p>
          <p class="px-2">Price: ${{ c.price }}</p>
        </div>

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

p {
  margin: 0;
  padding: 0;
}

.carCard:hover {
  box-shadow: 0px 0px 8px black;
  cursor: pointer;
}

.carCard {
  padding: 0;
  border: 1px rgba(0, 0, 0, 0.185) solid;
}

img {
  object-fit: cover;
}
</style>