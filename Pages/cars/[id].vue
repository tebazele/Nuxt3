<script setup>
import { carsService } from "~/Services/CarsService"

const {id} = useRoute().params
const uri = `https://bcw-sandbox.herokuapp.com/api/cars/${id}`

// fetch

const {data: car} = await useFetch(uri, {
  method: "get"
})

async function deleteCar() {
  try {
    await carsService.deleteCar(id)
    navigateTo({path: "/cars"})
  } catch (error) {
    console.error('[DELETING CAR]', error)
  }
}

</script>

<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-2 mt-2">
        <NuxtLink to="/cars"><button class="btn">Go Back</button></NuxtLink>
      </div>
      <div class="col-12 mt-2">
        <button @click="deleteCar" class="btn">Delete Car</button>
      </div>
      <div class="col-12">
        <h1>{{ car.make }} {{ car.model }}</h1>
      </div>
      <div class="col-4">
        <img class="carImage" :src="car.imgUrl" alt="">
      </div>
    </div>
    <div class="col-12 mt-2">
      <p class="fs-1">Car Description</p>
    </div>
    <div class="col-12">
      <p class="fs-3">{{ car.description }}</p>
    </div>
    <div class="col-12">
      <p class="fs-1">Price: ${{ car.price }}</p>
    </div>
  </div>

</template>

<style scoped>

.carImage{
  height: 45dvh;
  width: 100%;
}

img {
object-fit: contain;
}

</style>