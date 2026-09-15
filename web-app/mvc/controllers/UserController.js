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
        res.render('User/FullList', { users });
    }

    userCreate(req, res)
    {
        res.render('User/Forms/Create');
    }

    async userPostAsync(req, res)
    {
        const affectedRows = await this.userService.createUser(
            req.body.email,
            req.body.password,
            req.body.name
        );

        res.json({ user: user });
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
            req.body.name
        );
    
        res.json({ affectedRows: affectedRows });
    }

    async userGetByIdView(req, res){
        const users = await this.userService.getUserById(req.params.id);
        res.render('User/UserView', { users: users });
    }

}

module.exports = new UserController();