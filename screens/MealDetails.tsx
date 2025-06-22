import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { ScreenProps } from "../types/navigation";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import { useCallback, useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

type Props = ScreenProps<"MealDetails">;

function MealDetails({ route, navigation }: Props) {
  const favoriteMealContext = useContext(FavoritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealContext.ids.includes(mealId);

  const changeFavoriteStatusHandler = useCallback(() => {
    if (mealIsFavorite) {
      favoriteMealContext.removeFavorite(mealId);
      return;
    }

    favoriteMealContext.addFavorite(mealId);
  }, [favoriteMealContext, mealId, mealIsFavorite]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="#fff"
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler, mealIsFavorite]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetail {...selectedMeal} textStyle={styles.detailText} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal?.ingredients ?? []} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal?.steps ?? []} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  details: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
