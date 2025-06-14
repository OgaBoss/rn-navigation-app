import { Text, StyleSheet, View } from "react-native";

function List({ data }: { data: string[] }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: "#f17a30",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
