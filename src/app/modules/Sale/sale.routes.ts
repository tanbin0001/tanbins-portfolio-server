
import express from 'express';
import { SaleController } from './sale.controller';
import auth from '../../middleWares/auth';
 

 
 
 

const router = express.Router();
 

router.post('/sale-product', auth('superAdmin','manager','seller'), SaleController.saleProduct );
router.get('/all-sales', auth('superAdmin','manager','seller'), SaleController.getAllSales);
router.get('/:filter', auth('superAdmin','manager','seller'), SaleController.getSalesHistory);
 
 
 
export const SaleRoutes = router;
