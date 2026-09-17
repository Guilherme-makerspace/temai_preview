class User
{

    #id
    #email
    #password
    #name
    #phone
    #acceptsNotifications
    constructor(email, password, name, phone, acceptsNotifications)
    {
        this.#validateEmail(email);

        this.#email = email;
        this.#password = password;
        this.#name = name;
        this.#phone = phone;
        this.#acceptsNotifications = acceptsNotifications;
    }

    get id()
    {
        return this.#id;
    }

    get email()
    {
        return this.#email;
    }

    get password()
    {
        return this.#password;
    }

    get name()
    {
        return this.#name;
    }

    get phone()
    {
        return this.#phone;
    }

    get acceptsNotifications()
    {
        return this.#acceptsNotifications;
    }

    set email(value)
    {
        this.#email = value;
    }

    set id(value)
    {
        this.#id = value;
    }

    #validateEmail(email)
    {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!pattern.test(email)) {
            throw new Error('Email inválido');
        }

    }
    
    toJSON()
    {
        return {
            id: this.#id,
            email: this.#email,
            name: this.#name,
            phone: this.#phone,
            acceptsNotifications: this.#acceptsNotifications
        };
    }

}

module.exports = User;