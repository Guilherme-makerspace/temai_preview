const User = require('../mvc/models/UserModel');
const UserSchema = require('../schemas/UserSchema');

class UserService
{

    #userSchema

    constructor()
    {
        this.#userSchema = UserSchema;
    }

    async getUserById(id)
    {
        const data = await this.#userSchema.findOne({
             where: { id } 
        });

        if (!data) {
            return null;
        }

        const user = new User(
            data.email,
            data.password,
            data.name
        )

        user.id = data.id;
        
        return user;

    }

    async getAllUsers()
    {
        const users = [];
        const data = await this.#userSchema.findAll();
        
        for(const user of data)
        {
            const u = new User(
                user.email,
                user.password,
                user.name
            );

            u.id = user.id;

            users.push(u);
        }

        return users;
    }

    async createUser(email, password, name)
    {
        const user = new User(email, password, name);

        const u = await this.#userSchema.create(
            {
            email: user.email,
            password: user.password,
            name: user.name
            }
        );

        return u;

    }

    async updateUser(id, email, password, name)
    {
        let rows = 0;

        const user = await this.getUserById(id);

        if(user)
        {
            const model = new User(
                email || user.email,
                password || user.password,
                name || user.name
            )

            const affectedRows = await this.#userSchema.update(
                {
                    email: model.email,
                    password: model.password,
                    name: model.name
                },
                {
                    where: { id }
                }
            );

            rows = affectedRows
        }

        return rows;
    }

    async deleteUser(id)
    {
        const user = await this.#userSchema.findOne({
            where: { id }
        });

        const affectedRows = await user.destroy();
        return affectedRows;

    }

}

module.exports = UserService;