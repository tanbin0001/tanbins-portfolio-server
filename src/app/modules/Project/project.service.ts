
import { TProject } from "./project.interface";
import { ProjectModel } from "./project.model";






const addProjectIntoDB = async (payload: TProject) => {
  const result = await ProjectModel.create(payload)
  return result;
};


const getAllProjectsFromDB = async () => {
  const result = await ProjectModel.find()
  return result


};

const updateProject = async (_id: string, payload: Partial<TProject>) => {
  console.log('******************************');
  console.log('Updating project with ID:', _id);
  console.log('Payload:', payload);
  console.log('******************************');

  try {
    const result = await ProjectModel.findOneAndUpdate(
      { _id },
      payload,
      { new: true }
    );

    if (!result) {
      console.error('No document found with that ID');
      return null;
    }

    console.log('Update result:', result);
    return result;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};


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
  getAllProjectsFromDB,
  updateProject

}

