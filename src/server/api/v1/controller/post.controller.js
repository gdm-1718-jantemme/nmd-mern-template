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

    create = (req, res, next) => {
        return res.json(posts);
    }

    store = (req, res, next) => {
        return res.json(posts);
    }

    edit = (req, res, next) => {
        return res.json(posts);
    }

    update = (req, res, next) => {
        return res.json(posts);
    }

    destroy = (req, res, next) => {
        return res.json(posts);
    }

    
}
export default PostController;