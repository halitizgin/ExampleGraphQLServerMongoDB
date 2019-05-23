module.exports = {
    addDirector: async (parent, args, { Director }) => {
        const director = await new Director({
            ...args
        }).save();
        return director;
    }
}