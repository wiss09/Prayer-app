import axios from "axios";

console.log(axios);
axios.get('http://api.aladhan.com/v1/calendarByCity', {
    params: {
      country: 'TN',
      city:'TN-12'
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  