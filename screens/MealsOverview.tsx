import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Meal from "../data/models/meal";
import { useLayoutEffect } from "react";
import { ScreenProps } from "../types/navigation";

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

  function renderMealItems(itemData: ListRenderItemInfo<Meal>) {
    return (
      <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
}

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
