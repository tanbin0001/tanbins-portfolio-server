
import express from 'express';
import { BlogController } from './blog.controller';






const router = express.Router();


router.post('/add-blog', BlogController.addBlog);
router.get('/all-blogs', BlogController.getAllBlogs);
// router.patch('/update-product/:_id' , auth( 'superAdmin','manager'), ProductController.updateProduct);
// router.delete('/delete-product/:id' , auth( 'superAdmin','manager'), ProductController.deleteProduct);
// router.post('/delete-multiple-products',  auth( 'superAdmin','manager'),ProductController.deleteMultipleProducts);



export const BlogRoutes = router;
