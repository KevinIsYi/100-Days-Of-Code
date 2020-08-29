const getImage = async() => {
    const apiKey = "13M15GKHJr7trbxyuxJ0GpXbR22gSlkn"; 
    const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await response.json();
    const {url} = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
}

getImage();
// const apiKey = "13M15GKHJr7trbxyuxJ0GpXbR22gSlkn";

// const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// httpCall
//     .then(resp => resp.json())
//     .then(({data}) => {
//         const {url} = data.images.original;
//         const img = document.createElement("img");
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(console.warn)

