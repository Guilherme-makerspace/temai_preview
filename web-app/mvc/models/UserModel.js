class User
{

    #id
    #email
    #password
    #name

    constructor(email, password, name)
    {
        this.#validateEmail(email);
        
        this.#email = email;
        this.#password = password;
        this.#name = name;
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
    
}

module.exports = User;