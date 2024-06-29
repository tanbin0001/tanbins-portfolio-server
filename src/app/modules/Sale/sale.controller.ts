import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { SaleServices } from "./sale.service";






const saleProduct = catchAsync(async(req, res) => {
   
    const result =  await  SaleServices.saleProductSaveInDB(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Product Added Successfully',
        data: result
    })
});
const getSalesHistory = catchAsync(async(req, res) => {
    const role = req.user.role; 
 
    const sellerId = req.user.role === 'seller' ? req.user._id : null;
    const filter = req.params.filter;
    const query = req.query;
    const result =  await  SaleServices.getSalesHistoryFromDb(filter,query,role,sellerId);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: `${filter} history retrieved Successfully`,
        data: result
    })
});


const getAllSales = catchAsync(async(req, res) => {
 
    const result =  await  SaleServices.getAllSalesFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `All Sales retrieved Successfully`,
        data: result
    })
});



export const  SaleController = {
    saleProduct,
    getSalesHistory,
    getAllSales
 
    }










