const homeController = {
    index: (req, res) => {
        return res.status(200).json({message: 'Olá minha imagem', status: res.statusCode})
    }
};

module.exports = homeController;