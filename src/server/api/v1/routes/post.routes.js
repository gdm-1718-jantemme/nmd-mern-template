/*
Import the internal libraries:
- PostController
*/
import PostController from '../controller/post.controller';
const postController = new PostController();

const initializeEndpoints = (parentRouter) => {
    parentRouter.get('/posts', postController.index);
}
export default initializeEndpoints;