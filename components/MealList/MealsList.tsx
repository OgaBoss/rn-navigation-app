import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import Meal from "../../data/models/meal";
import MealItem from "../MealItem";

interface Props {
  items: Meal[];
}

function MealsList({ items }: Props) {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
