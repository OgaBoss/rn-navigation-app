// import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealList/MealsList";
import { useSelector } from "react-redux";

export function Favourite() {
  // const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state: any) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.ids.includes(meal.id),
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={style.rootContainer}>
        <Text style={style.text}>No Favourite Meals</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
