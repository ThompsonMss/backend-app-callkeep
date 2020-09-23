const sendMessageSilent = require("../remote/firebaseRemote");

function routes(route) {
  route.post("/call", (req, res) => {
    const data = req.body;

    try {
      if (!data.token) {
        return res.status(400).json({ error: "O token é obrigatório." });
      }

      sendMessageSilent(data.token);
      return res.status(200).json({ sucesso: "Chamada enviada." });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  });
}

module.exports = routes;
