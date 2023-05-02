<script setup>
import { state } from "~/Services/HousesService";
import { housesService } from "~/Services/HousesService";

const {id} = useRoute().params

const house = computed(() => state.house)


async function getHouse() {
  try {
  await housesService.getHouse(id)
  } catch (error) {
    console.error('[GETTING HOUSE BY ID]', error)
  }
}

// watchEffect(id, getHouse())

onMounted(() => {
  getHouse()
})
</script>

<template>

  <NavBar />

  <div class="container-fluid">
    <div class="row">
      <div v-if="house" class="col-6">
        <p>Bedrooms:</p>
       {{ house }}
      </div>
      <div v-else class="col-6">
        <h1>Loading...</h1>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>