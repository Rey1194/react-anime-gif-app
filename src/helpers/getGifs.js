
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zTyjUHeyoHY4qMe6X9OUh43OOE9foBR2&q=${category}&limit=15`;
    const response = await fetch(url);
    const {data} = await response.json(); // data from the API

    const gifs = data.map (
        img => (
            {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        )
    );
    return gifs
}
