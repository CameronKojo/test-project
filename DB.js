import mongoose from 'mongoose';
const DB_URL = 'mongodb+srv://userIvan:user@cluster0.6bbbifd.mongodb.net/?retryWrites=true&w=majority'

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(DB_URL);
}