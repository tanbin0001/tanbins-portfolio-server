
import { TProject } from "./project.interface";
import { ProjectModel } from "./project.model";






const addProjectIntoDB = async (payload: TProject) => {
  console.log(payload);
  const result = await ProjectModel.create(payload)
  return result;
};


// const getAllProductsFromDb = async (filters: TFilterOptions) => {



//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const filterCriteria: any = {};
//   if (filters.sportType) {
//     filterCriteria.sportType = filters.sportType;
//   }

//   if (filters.brand) {
//     filterCriteria.brand = { $regex: new RegExp(filters.brand, 'i') };
//   }

//   if (filters.size) {
//     filterCriteria.size = filters.size;
//   }

//   if (filters.minPrice && filters.maxPrice) {
//     filterCriteria.price = { $gte: filters.minPrice, $lte: filters.maxPrice };
//   }


//   if (filters.material) {
//     filterCriteria.material = filters.material;
//   }

//   if (filters.color) {
//     filterCriteria.color = filters.color;
//   }

//   if (filters.condition) {
//     filterCriteria.condition = filters.condition;
//   }

//   const result = await SportsItemModel.find(filterCriteria);
//   //  isCheckedToDelete property based on quantity
//   const updatedResult = result.map(item => ({
//     ...item.toObject(),
//     isCheckedToDelete: item.quantity === 0,
//   }));


//   const filteredResult = updatedResult.filter(item => !item.isCheckedToDelete);

//   return filteredResult;
// };

// const updateProductIntoDB = async (
//   _id: string,
//   payload: Partial<TSportsItem>,
// ) => {
//   const result = await SportsItemModel.findOneAndUpdate({ _id }, payload, {
//     new: true,
//   })

//   return result;
// }


// const deleteSingleItemFromDB = async (id: string) => {
//   const result = await SportsItemModel.deleteOne({ _id: id });
//   return result;
// }
// const deleteMultipleItemsFromDB = async (ids: string[]) => {
//   const result = await SportsItemModel.deleteMany({ _id: { $in: ids } });
//   return result;
// }

export const ProjectServices = {
  addProjectIntoDB,

}

