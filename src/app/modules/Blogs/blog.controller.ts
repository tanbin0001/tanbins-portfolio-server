import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { BlogServices } from "./blog.service";








const addBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.addBlogIntoDB(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Blog Added Successfully',
        data: result
    })
}

);


const getAllBlogs = catchAsync(async (req, res) => {
    const result = await BlogServices.getAllBlogs();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'All blogs retrieved successfully!',
        data: result
    })
}

);
// const updateProduct = catchAsync(async (req, res) => {
//     const { _id } = req.params;

//     const result = await ProductServices.updateProductIntoDB(_id, req.body);
//     sendResponse(res, {
//         statusCode: 201,
//         success: true,
//         message: 'Product updated successfully!',
//         data: result
//     })
// });

// const deleteProduct = catchAsync(async (req, res) => {
//     const { id } = req.params;

//     const result = await ProductServices.deleteSingleItemFromDB(id);
//     sendResponse(res, {
//         statusCode: 200,
//         success: true,
//         message: 'Product deleted successfully!',
//         data: result
//     })
// });
// const deleteMultipleProducts = catchAsync(async (req, res) => {
//     const { ids } = req.body;
//     const result = await ProductServices.deleteMultipleItemsFromDB(ids);
//     sendResponse(res, {
//         statusCode: 200,
//         success: true,
//         message: 'Products deleted successfully!',
//         data: result
//     });
// });


export const BlogController = {
    addBlog,
    getAllBlogs
}