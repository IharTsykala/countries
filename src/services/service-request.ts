import Cookies from "js-cookie"
const axios = require("axios")

export default class ServiceRequest {
  static getInfoAboutAllCountries = async () => {
    try {
      if (localStorage.getItem("https://restcountries.eu/rest/v2/all"))
        return JSON.parse(
          localStorage.getItem("https://restcountries.eu/rest/v2/all") || "[]"
        )
      else {
        const request = await axios.get("https://restcountries.eu/rest/v2/all")
        localStorage.setItem(
          "https://restcountries.eu/rest/v2/all",
          JSON.stringify(request.data)
        )
        return request.data
      }
    } catch (e) {
      console.log(e)
      throw e.response.data.message
    }
  }

  static getInfoCountryByShortName = async (name: string) => {
    try {
      if (localStorage.getItem(`https://restcountries.eu/rest/v2/name/${name}`))
        return JSON.parse(
          localStorage.getItem(
            `https://restcountries.eu/rest/v2/name/${name}`
          ) || "[]"
        )
      else {
        const request = await axios.get(
          `https://restcountries.eu/rest/v2/name/${name}`
        )
        localStorage.setItem(
          `https://restcountries.eu/rest/v2/name/${name}`,
          JSON.stringify(request.data)
        )
        console.log(request)
        return request.data
      }
    } catch (e) {
      console.log(e)
      throw e.response.data.message
    }
  }

  static getInfoCountryByFullName = async (name: string) => {
    try {
      if (
        localStorage.getItem(
          `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
        )
      )
        return JSON.parse(
          localStorage.getItem(
            `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
          ) || "[]"
        )
      else {
        const request = await axios.get(
          `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
        )
        localStorage.setItem(
          `https://restcountries.eu/rest/v2/name/${name}?fullText=true`,
          JSON.stringify(request.data)
        )
        return request.data
      }
    } catch (e) {
      console.log(e)
      throw e.response.data.message
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
      if (
        localStorage.getItem(`https://restcountries.eu/rest/v2/alpha/${code}`)
      )
        return JSON.parse(
          localStorage.getItem(
            `https://restcountries.eu/rest/v2/alpha/${code}`
          ) || "[]"
        )
      else {
        const request = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${code}`
        )
        localStorage.setItem(
          `https://restcountries.eu/rest/v2/alpha/${code}`,
          JSON.stringify(request.data)
        )
        return request.data
      }
    } catch (e) {
      console.log(e)
      throw e.response.data.message
    }
  }

  static getInfoCountryByCurrency = async (currency: string) => {
    try {
      if (
        localStorage.getItem(
          `https://restcountries.eu/rest/v2/currency/${currency}`
        )
      )
        return JSON.parse(
          localStorage.getItem(
            `https://restcountries.eu/rest/v2/currency/${currency}`
          ) || "[]"
        )
      else {
        const request = await axios.get(
          `https://restcountries.eu/rest/v2/currency/${currency}`
        )
        localStorage.setItem(
          `https://restcountries.eu/rest/v2/currency/${currency}`,
          JSON.stringify(request.data)
        )
        return request.data
      }
    } catch (e) {
      console.log(e)
      throw e.response.data.message
    }
  }
}
