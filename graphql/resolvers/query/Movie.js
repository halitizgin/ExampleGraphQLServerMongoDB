const Movie = {
    director: (parent, args, { Director }) => Director.findById(parent.directorId),
};

module.exports = Movie;