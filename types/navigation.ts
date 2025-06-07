import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define the RootStackParamList as usual
export type RootStackParamList = {
  MealsOverview: {
    categoryId: string;
  };
  MealDetails: {
    mealId: string;
  };
  MealsCategories: object;
};

// Define a generic type for screen props
export type ScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
