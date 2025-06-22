import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { ScreenProps } from "../types/navigation";
import MealsList from "../components/MealList/MealsList";

// Define the props specific to this screen
type Props = ScreenProps<"MealsOverview">;

function MealsOverview({ route, navigation }: Props) {
  const categoryId = route.params?.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId),
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId,
    )?.title;

    navigation.setOptions({ title: categoryTitle });
  }, [navigation, categoryId]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverview;
