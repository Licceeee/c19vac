import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

// returns data from contenful ** filter optional
const getContentfulData = (filter) => {
    try {
        return client.getEntries(
            filter && {
                content_type: filter
            }
        ).then(response =>  response.items);
    } catch (error) {
        console.log(`määh - could not connect: ${error}`);
    }
}


const getApiData = (url) => {
    try {
        return fetch(url).then(response => response.json())
    } catch (error) {
        console.log(error);
    } 
}


export { getContentfulData, getApiData };
