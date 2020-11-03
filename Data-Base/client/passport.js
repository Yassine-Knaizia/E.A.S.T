const bcrypt = require("bcryptjs");
const { connection } = require("../database")

const findOne = (req, callback) => {
    console.log('foundd')
    var userData = null;
    var query = `SELECT * from Clients where Email="${req.Email}"`;
    connection.query(query, (error, results, fields) => {
        if (results.length) {
            userData = results[0];
            console.log("test", userData)
            callback({ error: null, userData })
        }
    })
}

const findOneByProvider = (provider, providerId, Email, callback) => {
    let query = `select * from Clients where provider='${provider}' || providerId='${providerId}' || Email='${Email}'`;
    connection.query(query, (err, results) => {
        if (results) {
            callback({ err: null, results });
        } else {
            callback({ err: err, results: null });
        }
    })
}

const findById = (id, callback) => {
    var userData = null;
    var query = `SELECT * from Clients where id="${id}"`;
    connection.query(query, (error, results) => {
        if (results.length) {
            userData = results[0];
            console.log("test", userData)
            callback(error, { userData })
        }
    })
}

const validPassword = async function (password) {
    try {
        if (await bcrypt.compare(password, this.password)) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
};
// const User = mongoose.model("User", UserSchema);
const save = async ({ username, email, password }) => {
    try {
        existUsername = await findOne({ username }).exec();
        existEmail = await findOne({ email }).exec();
        if (!!existUsername) {
            return { err: "User with this username already exist" };
        } else if (!!existEmail) {
            return { err: "User with this email already exist" };
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = (Email, hashedPassword) => {
                let query = `INSERT INTO Clients (Email, password) values ("${Email}","${password}")`
                connection.query(query, (err, results) => {
                    if (results) {
                        return results;
                    } else {
                        return err;
                    }
                })
            }
            const newUser = await save();
            delete newUser.password;
            return newUser;
        }
    } catch (err) {
        return { errNew: err };
    }
};
const login = async ({ email, password }) => {
    try {
        user = await findOne({
            $or: [{ email: email }, { username: email }],
        }).exec();
        if (!user) {
            return { err: "Username or Email not exist." };
        } else {
            let validPassword = await validPassword(password);
            if (!validPassword) {
                return { err: "Incorrect password." };
            }
            return { id: user.id, email: user.email };
        }
    } catch (err) {
        return { errNew: err };
    }
};
const getUserById = (id) => findById(id);
const getUserByEmail = (email) =>
    findOne({ $or: [{ Email: Email }, { username: email }] }).exec();
const findOrCreate = async ({ provider, providerId, Email }) => {
    try {
        let user = await findOneByProvider({ provider, providerId, Email })
        if (!user) {
            const create = (provider,providerId, Email) => {
                let query = `INSERT INTO Clients (provider, providerId, Email) values ("${provider}","${providerId}","${Email}")`
                connection.query(query, (err, results) => {
                    if (results) {
                        return results;
                    } else {
                        return err;
                    }
                })
            }
            user = await create.save();
        }
        return user
    } catch (err) {
        return false
    }
}
module.exports = {
    save,
    login,
    getUserById,
    getUserByEmail,
    findOrCreate,
    findOne,
    findById,
    validPassword
};
