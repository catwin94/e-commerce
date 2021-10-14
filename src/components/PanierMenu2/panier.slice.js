import { createSlice } from "@reduxjs/toolkit";

// Slice para manejar los cursos

export const panierSlice = createSlice({
  name: "panier",
  initialState: {
    list: [],
  },
  reducers: {
    addCourse: (state, action) => {
      state.list.push(action.payload);
    },

    deleteCourse: (state, action) => {
      const courseId = action.payload; //Es la info que le paso a la funcion
      const newList = state.list.filter((course) => course.id !== courseId);
      state.list = newList;
    },

    incrementQty: (state, action) => {
      const courseId = action.payload; //info que recibe mi funcion
      //Creo el nuevo arreglo con la cantidad modificada
      const newList = state.list.map((course) => {
        if (course.id === courseId) {
          course.quantity++;
          return course;
        } else {
          return course;
        }
      });
      //Actualizo la lista
      state.list = newList;
    },

    decrementQty: (state, action) => {
      const courseId = action.payload; //info que recibe mi funcion
      //Creo el nuevo arreglo con la cantidad modificada
      const newList = state.list.map((course) => {
        if (course.id === courseId) {
          course.quantity--;
          return course;
        } else {
          return course;
        }
      });
      //Actualizo la lista
      state.list = newList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCourse, deleteCourse, incrementQty, decrementQty } =
  panierSlice.actions;

export default panierSlice.reducer;
