/*
Import the internal libraries:
- PostController
*/
import PostController from '../controller/post.controller';
const postController = new PostController();

const initializeEndpoints = (parentRouter) => {
    parentRouter.get('/posts', postController.index);
    parentRouter.get('/posts/create', postController.create);
    parentRouter.get('/posts/:id', postController.show);
    parentRouter.post('/posts/:id', postController.store);
    parentRouter.get('/posts/:id/edit', postController.edit);
    parentRouter.put('/posts/:id', postController.update);
    parentRouter.delete('/posts/:id', postController.destroy);
}
export default initializeEndpoints;