import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

// returns data from contenful ** filter optional
export const getData = (filter) => {
    return client.getEntries(
        filter && {
            content_type: filter
        }
    ).then(response =>  response.items);
}

