import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Meal from "../data/models/meal";

type Props = Partial<Meal> & {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

function MealDetail({
  duration,
  affordability,
  complexity,
  style,
  textStyle,
}: Props) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity?.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability?.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
