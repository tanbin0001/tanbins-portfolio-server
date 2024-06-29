
import express from 'express';
import { ProductController } from './product.controller';
import auth from '../../middleWares/auth';
 

 
 
 

const router = express.Router();
 

router.post('/add-product', auth( 'superAdmin','manager'), ProductController.addProduct );
router.get('/all-products', auth('user','superAdmin','manager','seller'), ProductController.getAllProducts);
router.patch('/update-product/:_id' , auth( 'superAdmin','manager'), ProductController.updateProduct);
router.delete('/delete-product/:id' , auth( 'superAdmin','manager'), ProductController.deleteProduct);
router.post('/delete-multiple-products',  auth( 'superAdmin','manager'),ProductController.deleteMultipleProducts);


 
export const ProductRoutes = router;
