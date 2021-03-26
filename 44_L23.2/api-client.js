var api_key = 'f4ef9cdb3ad0d16149d1ac993dc35a3e';

async function getData() {
    try {
        const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=f4ef9cdb3ad0d16149d1ac993dc35a3e';
        var res = await fetch(apiUrl)
    .then(response => response.json())
    console.log(res) 
    } catch (err) {
    console.log(err)
}
};



