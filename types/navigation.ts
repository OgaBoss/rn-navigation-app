import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import MealDetails from "../screens/MealDetails";

// Define the RootStackParamList as usual
type RootStackParamList = {
  MealsOverview: {
    categoryId: string;
  };
  MealDetails: {
    mealId: string;
  };
};

// Define a generic type for screen props
export type ScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
