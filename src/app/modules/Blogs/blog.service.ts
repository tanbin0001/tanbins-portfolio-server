import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";





const addBlogIntoDB = async (payload: TBlog) => {
  const result = await BlogModel.create(payload)
  return result;
};


const getAllBlogs = async () => {

  const result = BlogModel.find();
  return result;
};

// const updateProductIntoDB = async (
//    _id: string,
//    payload: Partial<TSportsItem>,
// ) => {
//    const result = await SportsItemModel.findOneAndUpdate({_id  }, payload, {
//       new : true, 
//   })

//   return result;
// }


// const deleteSingleItemFromDB = async (  id: string) => {
//    const result = await SportsItemModel.deleteOne({_id : id});
//    return result;
// }
// const deleteMultipleItemsFromDB = async (ids: string[]) => {
//   const result = await SportsItemModel.deleteMany({ _id: { $in: ids } });
//   return result;
// }

export const BlogServices = {
  addBlogIntoDB,
  getAllBlogs
}

