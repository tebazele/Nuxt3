class CarsService {

  async getCars() {
    const res = await useFetch('https://bcw-sandbox.herokuapp.com/api/cars')
    console.log(res.data)
  }

}

export const carsService = new CarsService()