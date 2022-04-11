import axios from 'axios';
// creates an instance of the axios client that can be customized 

export const options = {
    method: 'GET',
    // url: 'https://coinranking1.p.rapidapi.com/coins',
    // params: {
    //   referenceCurrencyUuid: 'yhjMzLPhuIDl',
    //   timePeriod: '24h',
    // },
    // headers: {
    //   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    //   'X-RapidAPI-Key': '176800dfd3msh3af75817d22f472p1e9a6cjsn7be99f53cf95'
    url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      limit: '50',
      offset: '0',
      orderBy: '24hVolume',
      orderDirection: 'desc'
    },
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': '176800dfd3msh3af75817d22f472p1e9a6cjsn7be99f53cf95'
    }

    //   url: 'https://coinranking1.p.rapidapi.com/search-suggestions',
    //   params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'},
    //   headers: {
    //     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    //     'X-RapidAPI-Key': '176800dfd3msh3af75817d22f472p1e9a6cjsn7be99f53cf95'
    // }
  };
  
  export const getData = (options) => {
      axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  })
}

// console.log(getData(options))
  
