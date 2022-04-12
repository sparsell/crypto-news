import axios from 'axios';
// creates an instance of the axios client that can be customized 

export const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
    },
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': '176800dfd3msh3af75817d22f472p1e9a6cjsn7be99f53cf95'
    }
  };
  
  export const getData = (options) => {
      axios.request(options).then(function (response) {
      let coinData = response.data.data.coins
      console.log(coinData)
  }).catch(function (error) {
      console.error(error);
  })

}
  
