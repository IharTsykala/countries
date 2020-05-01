const axios = require("axios")

export default class ServiceRequest {
  static getInfoAboutAllCountries = async () => {
    try {
      const request = await axios.get("https://restcountries.eu/rest/v2/all")
      return request.data
    } catch (e) {
      console.log(e)
    }
  }

  static getInfoCountryByShortName = async (name: string) => {
    try {
      const request = await axios.get(
        `https://restcountries.eu/rest/v2/name/${name}`
      )
      return request.data
    } catch (e) {
      console.log(e)
    }
  }

  static getInfoCountryByFullName = async (name: string) => {
    try {
      const request = await axios.get(
        `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
      )
      return request.data
    } catch (e) {
      console.log(e)
    }
  }

  // static getInfoCountryBySomeCodes = async (code: string) => {
  //   try {
  //     // Need make logic these or oi sagas
  //     const request = await axios.get(
  //       `https://restcountries.eu/rest/v2/alpha?codes=${code};${code};${code}`
  //     )
  //     return request.data
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  static getInfoCountryByCode = async (code: string) => {
    try {
      const request = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${code}`
      )
      return request.data
    } catch (e) {
      console.log(e)
    }
  }

  static getInfoCountryByCurrency = async (currency: string) => {
    try {
      const request = await axios.get(
        `https://restcountries.eu/rest/v2/currency/${currency}`
      )
      return request.data
    } catch (e) {
      console.log(e)
    }
  }
}
