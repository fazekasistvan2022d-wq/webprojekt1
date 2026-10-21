import pool from "../config/db.js";

const UserModel = {
    async getAll(){
        const [rows] = await pool.query('SELECT * from users')
        return rows
    },
    async getById(id){
        const [rows] = await pool.query('SELECT * from users WHERE id = ?',[id])
        return rows[0]
    },

    async create(user){
        const {email, password, name, phone, profileimage} = user;
        const [result] = await pool.query('INSERT INTO users (email, password, name, phone, profileimage) VALUES(?,?,?,?,?)',[email, password, name, phone, profileimage])
        return {id: result.insertId, ...user}
    },
    async getByEmail(email){
        const [rows] = await pool.query('SELECT * from users WHERE email = ?',[email])
        return rows[0]
    }
}
export default UserModel