const Query = {
    movie: (parent, { id }, { Movie }) => Movie.findById(id),
    director: (parent, { id }, { Director }) => Director.findById(id),
    allMovies: (parent, args, { Movie }) => Movie.find({}),
    allDirectors: (parent, args, { Director }) => Director.find({}),
}

module.exports = Query;