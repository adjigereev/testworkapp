const postModel = require('../model/index');

class PostController {
    async createPost(req, res) {
        const {title,description} = req.body;
        const fileName = req.file.filename;
        try {
            await  postModel.create({
                title:title,
                description:description,
                img:fileName
            });
            res.sendStatus(200)
        }catch (e) {
            res.json(e.message).status(500)
        }
    }
    async getPost(req,res){

        const postAll = await postModel.find({}).limit(req.query.limit).skip(req.query.skip)
        res.json(postAll).status(200)
    }

}

module.exports = new PostController()