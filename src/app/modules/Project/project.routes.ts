
import express from 'express';
import { ProjectController } from './project.controller';

// import auth from '../../middleWares/auth';






const router = express.Router();


router.post('/add-project', ProjectController.addProduct);
// router.get('/all-products', auth('user', 'superAdmin', 'manager', 'seller'), ProductController.getAllProducts);
// router.patch('/update-product/:_id', auth('superAdmin', 'manager'), ProductController.updateProduct);
// router.delete('/delete-product/:id', auth('superAdmin', 'manager'), ProductController.deleteProduct);
// router.post('/delete-multiple-products', auth('superAdmin', 'manager'), ProductController.deleteMultipleProducts);



export const ProjectRoutes = router;
