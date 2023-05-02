<template>

<div v-if="houses">
  <button @click="testRemove">Remove a 🏠</button>
</div>

</template>

<script setup>
import { state } from "~/Services/HousesService";

const houses = computed(() => state.houses)

async function testRemove(){
  state.houses.value.shift()
} 
</script>

<style> 



</style>