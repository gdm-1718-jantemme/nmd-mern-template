/*
Import the internal libraries:
- posts.mock.js
- errorHandler
*/
import * as mockPosts from '../mocks/posts.mock';
import { handleAPIError } from '../utilities/errorHandler';

let posts = mockPosts.posts;

class PostController {
    constructor() {

    }

    index = (req, res, next) => {
        return res.json(posts);
    }

    show  = (req, res, next) => {
        const id = req.params.id;
        const item = posts.find((obj) => {
            return obj.id === id;
        });
        if(item === undefined || item === null) {
            handleAPIError(404, `Post with id: ${id} not found!`, next)
        }
        return res.json(item);
    }
}
export default PostController;