
export const getGif = async(category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=i68htkWKc1m4H2I4amDAk0w5b3vGp392&q=${category}&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
        
        return gifs
}