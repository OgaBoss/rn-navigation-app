import {
  View,
  Pressable,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import Category from "../data/models/category";

interface CategoryGridTileProps extends Partial<Category> {
  onPress?: (event: GestureResponderEvent) => void;
}

function CategoryGridTile({ color, title, onPress }: CategoryGridTileProps) {
  return (
    <View style={styles.gridItem} testID="category-grid-item">
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
        testID="category-pressable"
      >
        <View
          style={[styles.innerContainer, { backgroundColor: color }]}
          testID="inner-container"
        >
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
