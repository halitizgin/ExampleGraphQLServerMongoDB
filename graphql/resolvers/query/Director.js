const Director = {
    movies: (parent, args, { Movie }) => Movie.find({ directorId: parent.id })
};

module.exports = Director;