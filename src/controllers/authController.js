const authController = {
    login: (req, res) => {
        const { email, password } = req.body;

        const user = {email, password};

        return res.status(200).json(user);
    }
};

module.exports = authController;