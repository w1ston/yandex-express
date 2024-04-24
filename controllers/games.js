const sendUpdateGames = async (req, res) => {
    res.send({
        games: req.games,
        updated: req.updatedObject
    });
}

const sendAllGames = async (req, res) => {
    res.send(req.games);
};


module.exports = {
    sendUpdateGames,
    sendAllGames
}