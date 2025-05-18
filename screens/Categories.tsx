import {FlatList} from "react-native";

import {CATEGORIES} from "../data/dummy-data";
import Category from "../data/models/category";

function renderCategoryItem(item: Category) {
  return
}

function Categories() {
  return <FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={} />
}

export default Categories;
