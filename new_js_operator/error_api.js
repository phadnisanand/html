// https://dev.to/eidorianavi/async-and-await-in-javascript-3l7e
// https://www.youtube.com/watch?v=NwoAZF66_Go
// https://www.youtube.com/watch?v=lbPX_mBxt0M
// https://www.meticulous.ai/blog/javascript-typeerrors-and-techniques-to-prevent-them
const fetchAPI = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if(response.status != 200) {
          throw new Error('Api call failed due to server issue');
        }
        let data = await response.json();

        console.log(data);
    } catch(e) {
        console.error(e);
    }
    finally {
      console.log('cleanup');
    }
     console.log('coming after api call');
}
fetchAPI();

// Second way
// fetch('https://jonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error =>  console.error('error ', error));
// console.log('coming after api call');

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then( response => {
//         return response.json()
//       })
//       .then(json => {
//         console.log(json)
//       })
//       .catch(error => {
//         console.error('error ', error)
//       });
// console.log('coming after api call');
