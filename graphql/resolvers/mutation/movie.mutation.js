module.exports = {
    addMovie: async (parent, args, { Movie, Director, pubsub }) => {
        const director = await Director.findById(args.directorId);
        if (!director){
            throw new Error("Bu id numarasında bir yönetmen bulunmamaktadır.");
        }
        const movie = await new Movie({
            ...args
        }).save();
        pubsub.publish('movieAdded', {
            movieAdded: movie
        });
        return movie;
    }
}