// https://medium.com/@shahbishwa21/introduction-to-the-safe-assignment-operator-in-javascript-ddc35e87d37c
// https://medium.com/@pranshiksharma/say-goodbye-to-try-catch-mastering-the-new-operator-in-javascript-b4ffd589da94
// async function fetchData() {
//   try {
//     const response = await fetch("https://api.example.com/data");
//     try {
//       const data = await response.json();
//       return data;
//     } catch (parseError) {
//       console.error('Failed to parse JSON:', parseError);
//     }
//   } catch (networkError) {
//     console.error('Network request failed:', networkError);
//   }
// }

//  async function fetchData() {
//   const [error, data] ?= await fetch("https://api.example.com/data").json()?=;

//   if (error) {
//     console.error('Error occurred:', error);
//   } else {
//     console.log('Data fetched successfully:', data);
//   }
//  }
// fetchData();
