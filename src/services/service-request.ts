const axios = require("axios")

export default class ServiceRequest {
  static solutionLocalStorage = async (link: string) => {
    try {
      if (localStorage.getItem(link))
        return JSON.parse(localStorage.getItem(link) || "[]")
      else {
        const response = await axios.get(link)
        localStorage.setItem(link, JSON.stringify(response.data))
        return response.data
      }
    } catch (e) {
      console.log(e)
      throw e.response.data.message
    }
  }

  static getInfoAboutAllCountries = async () => {
    try {
      // @ts-ignore
      return await this.solutionLocalStorage(
        "https://restcountries.eu/rest/v2/all"
      )
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  static getInfoCountryByShortName = async (name: string) => {
    try {
      // @ts-ignore
      return await this.solutionLocalStorage(
        `https://restcountries.eu/rest/v2/name/${name}`
      )
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  static getInfoCountryByFullName = async (name: string) => {
    try {
      // @ts-ignore
      return await this.solutionLocalStorage(
        `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
      )
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  static getInfoCountryByCode = async (code: string) => {
    try {
      // @ts-ignore
      return await this.solutionLocalStorage(
        `https://restcountries.eu/rest/v2/alpha/${code}`
      )
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  static getInfoCountryByCurrency = async (currency: string) => {
    try {
      // @ts-ignore
      return await this.solutionLocalStorage(
        `https://restcountries.eu/rest/v2/currency/${currency}`
      )
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
