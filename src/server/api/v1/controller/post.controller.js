class PostController {
    constructor() {

    }

    index = (req, res, next) => {
        return res.json({
            'message': 'Greetings 2 Earthlings!'
        });
    }
}
export default PostController;