
import express from 'express';
import { ProjectController } from './project.controller';

// import auth from '../../middleWares/auth';






const router = express.Router();


router.post('/add-project', ProjectController.addProduct);
router.get('/all-projects', ProjectController.getAllProjects);
router.patch('/update-project/:_id', ProjectController.updateProject);
// router.delete('/delete-product/:id', auth('superAdmin', 'manager'), ProductController.deleteProduct);
// router.post('/delete-multiple-products', auth('superAdmin', 'manager'), ProductController.deleteMultipleProducts);



export const ProjectRoutes = router;
