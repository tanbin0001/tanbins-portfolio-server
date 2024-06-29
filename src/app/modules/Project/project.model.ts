import { Schema, model } from "mongoose";
import { TProject } from "./project.interface";




const projectSchema = new Schema<TProject>({

    projectName: { type: String, required: true },
    imageLink: { type: String, required: true },
    usedTechnologies: { type: String, required: true },
    liveLink: { type: String, required: true },
    githubCodeLink: { type: String, required: true },
    description: { type: String, required: true },

})

export const ProjectModel = model<TProject>('SportsItem', projectSchema);
