const getApiData = (url) => {
    try {
        return fetch(url).then(response => response.json())
    } catch (error) {
        console.log(error);
    } 
}

export {getApiData };