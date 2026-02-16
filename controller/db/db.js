// blue09876_db_user
// mongodb+srv://Bidhan:Bidhan%40123@cluster0.kza0okf.mongodb.net/

const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://Bidhan:Bidhan%40123@cluster0.kza0okf.mongodb.net/"
const connectToDataBase = async () => {
    try {
        await mongoose.connect(DB_URL, {});
        console.log('Database connected successfully');
    } catch (error) {
console.log(`Database connection error is ${error}`)        
    }


}



module.exports = {
    connectToDataBase,
    
}