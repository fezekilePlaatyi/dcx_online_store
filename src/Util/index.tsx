class Util {
  constructor() { }

  storeBasketProductDataToLocalStorage = (basketProductData: any) => {
    localStorage.setItem('basketProductData', JSON.stringify(basketProductData))
  }

  retrieveBasketProductDataFromLocalStorage = () => {
    let basketProductData: any = localStorage.getItem('basketProductData')
    let data = basketProductData ?
      JSON.parse(basketProductData)
      :
      []
    return data
  }

  resetBasketProductDataFromLocalStorage = () => {
    localStorage.removeItem('basketProductData')
  }
}

export default Util;


