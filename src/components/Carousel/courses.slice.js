import { createSlice } from "@reduxjs/toolkit";

// Slice para manejar los cursos

export const courseSlice = createSlice({
  name: "courses",
  initialState: {
    list: [
      {
        id: 1,
        promotion: false,
        category: "Cocina",
        title: "Baking and Pastry School",
        pictureLink:
          "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1500,
        quantity: 1,
      },
      {
        id: 2,
        promotion: true,
        category: "Cocina",
        title: "Italian Standard Course",
        pictureLink:
          "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 3,
        promotion: false,
        category: "Cocina",
        title: "French Baking",
        pictureLink:
          "https://images.pexels.com/photos/6747/food-dessert-sweet-color.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 4,
        promotion: false,
        category: "Cocina",
        title: "Cooking at Home",
        pictureLink:
          "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1500,
        quantity: 1,
      },
      {
        id: 5,
        promotion: false,
        category: "Cocina",
        title: "Healthy Cooking with Vegetables",
        pictureLink:
          "https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 6,
        promotion: false,
        category: "Cocina",
        title: "Professional Cooking Course",
        pictureLink:
          "https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 7,
        promotion: true,
        category: "Musica",
        title: "Learn to Play Guitar",
        pictureLink:
          "https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        shortDescription: "Chords, Scales, and Solos ",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 8,
        promotion: false,
        category: "Musica",
        title: "Titulo descriptivo 2",
        pictureLink:
          "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 9,
        promotion: true,
        category: "Musica",
        title: "Titulo descriptivo 2",
        pictureLink:
          "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 10,
        promotion: false,
        category: "Musica",
        title: "Titulo descriptivo 2",
        pictureLink:
          "https://images.pexels.com/photos/9010052/pexels-photo-9010052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 11,
        promotion: false,
        category: "Musica",
        title: "Titulo descriptivo 2",
        pictureLink:
          "https://images.pexels.com/photos/191240/pexels-photo-191240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 12,
        promotion: false,
        category: "Musica",
        title: "Titulo descriptivo 2",
        pictureLink:
          "https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 13,
        promotion: false,
        category: "Programacion",
        title: "Angular for beginners",
        pictureLink:
          "https://www.ajnnews.com/wp-content/uploads/2019/01/The-Angular-Course-Is-Making-Waves-in-the-Industry.jpeg",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1500,
        quantity: 1,
      },
      {
        id: 14,
        promotion: false,
        category: "Programacion",
        title: "HTML and CSS course",
        pictureLink:
          "https://www.freecodecamp.org/news/content/images/2019/07/Want_to_learn_to_build_websites__Try_our_free_HTML__-CSS_crash_course.jpg",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 15,
        promotion: true,
        category: "Programacion",
        title: "C++ for beginners",
        pictureLink:
          "https://dc722jrlp2zu8.cloudfront.net/media/cache/09/2d/092dda2e838ce0905434cb2d4fddb121.webp",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 16,
        promotion: false,
        category: "Programacion",
        title: "Learn React",
        pictureLink:
          "https://dejanvasic.files.wordpress.com/2020/06/react-img.jpg",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1500,
        quantity: 1,
      },
      {
        id: 17,
        category: "Programacion",
        title: "JavaScript course",
        pictureLink:
          "https://www.arsys.es/blog/file/uploads/2019/09/javascript.jpg",

        shortDescription: "2021 short description",
        description: "description product",
        price: 1600,
        quantity: 1,
      },
      {
        id: 18,
        category: "Programacion",
        title: "Python advanced course",
        pictureLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7yKor27ZCBP85cY8I3hsGx9eM91pEmUgD0jqA6WjEgE4_GNoZ7EGwFaWXBQ7uzjcCj0&usqp=CAU",

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
