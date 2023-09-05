import express from 'express'
import ("./DB.js")
import Post from "./post.js"

const PORT = 5000

const app = express()

 app.use(express.json())

app.post('/', async (req, res) => {
    try {
        const {author, title, content, picture} = req.body
        console.log(author, title, content, picture)
        const post = await Post.create({author, title, content, picture})
        res.status(200).json(post)
    } catch (e) {
        res.status(500).json(e)
    }
})

//  async function startApp() {
//     try{
//         await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true })
//         app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
//     } catch(e) {
//         console.log(e)
//     }
// }
//
// startApp()
app.listen(PORT, () => {
    console.log('Running on  port ' + PORT)
})