function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Make an API request here
    // You can use any library or method to make the request

    // Simulating an API response after a delay of 1 second
    setTimeout(() => {
      const response = { data: 'API response data' };
      // Resolve the promise with the response data
      resolve(response);
      // Or reject the promise with an error message
      // reject('Error: Failed to fetch data from API');
    }, 1000);
  });
}
