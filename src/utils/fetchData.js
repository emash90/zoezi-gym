
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9734ac6af6msh9455f8fb345cb4ep196436jsnd0f52ae4f90d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const youtubeOptions ={
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9734ac6af6msh9455f8fb345cb4ep196436jsnd0f52ae4f90d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async(url, option) => {
    const response = await fetch(url, option)
    const data = await response.json()
    return data
}