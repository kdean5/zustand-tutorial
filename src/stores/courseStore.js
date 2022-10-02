import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseStore = (set, get) => ({
    courses: [],
    addCourse: (course) => {
        // const state = get();  //get all state/methods access from get() method
        set((state) => {
            return {
                courses: [course, ...state.courses],
            }
        })
    },
    removeCourse: (courseId) => {
        set(state => ({
            courses: state.courses.filter(c => c.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId) => {
        set(state => ({
            courses: state.courses.map(c => c.id === courseId ?
                { ...c, completed: !c.completed } : c
            )
        }))
    },
    // for async request 👇
    // fetchCourse: async () => {
    //     const response = await fetch('')
    //     .then(res => res.json())
    //     .then(data => {
    //         set({ courses: data })
    //     })
    // }

})

const useCourseStore = create(courseStore);
//OR

//use 👇 for persist state in localstorage
// const useCourseStore = create(
//     devtools(
//         persist(courseStore, {
//             name: 'courses',
//         })
//     )
// );

export default useCourseStore;