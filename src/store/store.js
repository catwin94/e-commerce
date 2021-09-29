import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../components/Carousel/courses.slice.js";
import panierReducer from "../components/PanierMenu/panier.slice.js";

export default configureStore({
  reducer: {
    courses: courseReducer,
    panier: panierReducer,
  },
});
