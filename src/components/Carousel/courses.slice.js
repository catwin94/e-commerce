import { createSlice } from "@reduxjs/toolkit";

// Slice para manejar los cursos

export const courseSlice = createSlice({
  name: "courses",
  initialState: {
    list: [
      {
        id: 1,
        category: "Cocina",
        tile: "Titulo descriptivo 1",
        shortDescription: "2021 short description",
        description: "description product",
        price: 1500,
        quantity: 1,
      },
      {
        id: 2,
        category: "Cocina",
        tile: "Titulo descriptivo 2",
        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 3,
        category: "Cocina",
        tile: "Titulo descriptivo 2",
        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 4,
        category: "Musica",
        tile: "Titulo descriptivo 2",
        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 5,
        category: "Musica",
        tile: "Titulo descriptivo 2",
        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
    ],
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = courseSlice.actions;

export default courseSlice.reducer;
