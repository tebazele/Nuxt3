import { House } from "~/models/House"

export const state = () =>({
    houses: null,
    house: null
})




class HousesService {


async getHouses() {
  const {data: houses} = await useFetch('https://bcw-sandbox.herokuapp.com/api/houses', {
    method: "get"
  })
  state.houses = houses
  state.houses.value = state.houses.value.map(h => new House(h))
 return houses
}

async getHouse(id) {
  console.log('HOUSE ID', id);
const {data : house} = await useFetch(`https://bcw-sandbox.herokuapp.com/api/houses/${id}`, {
  method: "get"
})
console.log('ONE HOUSE', house.value)
state.house = new House(house.value)
console.log('GETTING ONE HOUSE', state.house)
}
}

export const housesService = new HousesService()