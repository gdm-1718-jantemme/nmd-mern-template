/*
Import the internal libraries:
- PostController
*/
import PostController from '../controller/post.controller';
const postController = new PostController();

const initializeEndpoints = (parentRouter) => {
    parentRouter.get('/posts', postController.index);
    parentRouter.get('/posts/:id', postController.show);
}
export default initializeEndpoints;