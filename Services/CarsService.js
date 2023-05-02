class CarsService {

  async getCars() {
    const res = await useFetch('https://bcw-sandbox.herokuapp.com/api/cars')
    console.log(res.data)
  }

  // async getById(carId) {
  //   const res = await useFetch(`https://bcw-sandbox.herokuapp.com/api/cars/${carId}`, {
  //     method: 'get'
  //   })
  // } 

  async deleteCar(carId) {
    const {data: result, pending, error, refresh} = await useFetch(`https://bcw-sandbox.herokuapp.com/api/cars/${carId}`, {
      method: "delete"
    })
    if(error){
      refresh()
    }

    console.log("Results:", result, "PENDING", pending, "ERROR", error, "REFRESH", refresh)
    window.alert(result)
  }

}

export const carsService = new CarsService()