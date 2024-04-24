const gamesRouter = require("express").Router();
const {sendAllGames, sendUpdateGames} = require("../controllers/games");
const {
    getAllGames,
    checkIsTitleInArray,
    updateGamesArray,
    updateGamesFile,
    findGameById,
    deleteGame
} = require("../middlewares/games");

gamesRouter.get("/games", getAllGames, sendAllGames)
gamesRouter.post("/games", getAllGames, checkIsTitleInArray, updateGamesArray, updateGamesFile, sendUpdateGames);
gamesRouter.delete("/games/:id", getAllGames, findGameById, deleteGame, updateGamesFile, sendUpdateGames);

module.exports = gamesRouter;