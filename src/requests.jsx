const API_KEY = "ea7479c21e9be3689145860fe7650bf2";

const requests= {
    fetchTrending : `/discover/movie?api_key=${API_KEY}&with_network=213`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    searchAPI : `/search/movie?&api_key=${API_KEY}&query=`,
    fetchTvShows : `/discover/tv?api_key=${API_KEY}&language=en-US&page=5`
}


export default requests;

