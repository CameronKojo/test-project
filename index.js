import express from 'express'
// import mongoose from 'mongoose'
// import Post from './post.js'


const PORT = 5000
// const DB_URL = 'mongodb+srv://userIvan:user@cluster0.6bbbifd.mongodb.net/?retryWrites=true&w=majority'

const app = express()

 app.use(express.json())

app.post('/', async (req, res) => {
    // const {author, title, content, picture} = req.body
    // const Post = await Post.create({author, title, content, picture})
    console.log(req.body)
    res.status(200).json('Server Working')
})

async function startApp() {
    try{
        // await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch(e) {
        console.log(e)
    }
}

startApp()