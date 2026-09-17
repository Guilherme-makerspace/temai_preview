const UserService = require('../../services/UserService');

class UserController
{
    constructor()
    {
        this.userService = new UserService();
    }

    index(req, res)
    {
        res.render('User/View');
    }

    async getAllUsers(req, res)
    {
        const users = await this.userService.getAllUsers();
        res.json(users);
    }

    userCreate(req, res)
    {
        res.render('User/Forms/Create');
    }

    async userPostAsync(req, res)
    {
        try
        {
            const user = await this.userService.createUser(
                req.body.email,
                req.body.password,
                req.body.name,
                req.body.phone,
                req.body.acceptsNotifications
            );

            res.status(201).json({ user: user });
        }
        catch (error)
        {
            res.status(400).json({ error: error.message });
        }
    }

    async userDeleteAsync(req, res)
    {
        const affectedRows = await this.userService.deleteUser(req.params.id);
        res.json({ affectedRows: affectedRows });
    }

    async userPutAsync(req, res)
    {
        const affectedRows = await this.userService.updateUser(
            req.params.id,
            req.body.email,
            req.body.password,
            req.body.name,
            req.body.phone,
            req.body.acceptsNotifications
        );

        res.json({ affectedRows: affectedRows });
    }

    async userGetByIdView(req, res){
        const user = await this.userService.getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json(user);
    }

}

module.exports = new UserController();