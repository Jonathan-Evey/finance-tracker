const axios = require('axios');

axios.get('https://api.sec.gov/cik/lookup?q=IBM')
  .then(response => {
    let cik = response.data.Cik;
    // Make a request for Form 4 filings using the CIK
  })
  .catch(error => {
    console.log(error);
  });

axios.get(`https://api.sec.gov/form4?company=${cik}`)
  .then(response => {
    // Parse the response and get the data you need
  })
  .catch(error => {
    console.log(error);
  });

axios.get(`https://api.sec.gov/form4?company=${cik}`)
  .then(response => {
    let form4Data = response.data.results;
    // Use the form4Data to get the data you need
  })
  .catch(error => {
    console.log(error);
  });
