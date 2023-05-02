<script setup>
import { housesService, state } from "~/Services/HousesService";
import { House } from "~/models/House";

const houses = await housesService.getHouses()
const test = computed(() => state.houses.value.map(h => House(h)))
// async function getHouses() {
//   try {
//     await housesService.getHouses()
//     console.log('HOUSES PAGE', houses)
//   } catch (error) {
//     console.log('[GETTING HOUSES]', error);
//   }
// }


</script>

<template>

<NavBar/>
<HouseDeletor />

<div class="container-fluid">
  <div v-if="houses" class="row">
    <div v-for="h in houses" :key="h.id" class="col-5 col-md-3 houseCard">
      <div class="row">
        <div class="col-12">
          <NuxtLink :to="`/homes/${h.id}`">
          <img class="cardSize" :src="h.imgUrl" alt="">
        </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="row text-center">
    <div class="col-12">
      <h1>Loading...</h1>
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

.houseCard:hover{
  box-shadow: 0px 0px 8px black;
  cursor: pointer;
}

.houseCard {
  padding: 0;
  border: 1px rgba(0, 0, 0, 0.185) solid;
}

img{
  object-fit: cover;
}

</style>