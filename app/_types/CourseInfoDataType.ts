import { CoursesDataType } from "./CoursesDataType";

export type CourseInfoDataType = {
    metadata: {
        generated: string;
    },
    courses: CoursesDataType[]
}