import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Favourite } from "./screens/Favourite";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "./types/navigation";
import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#431a02" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={Favourite}
        options={{
          title: "All Favourite",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavoritesContextProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#431a02" },
                headerTintColor: "white",
                contentStyle: { backgroundColor: "#3f2f25" },
              }}
            >
              <Stack.Screen
                name="MealsCategories"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MealsOverview"
                component={MealsOverview}
                // options={({ route, navigation }) => {
                //   const categoryId = route.params?.categoryId;
                //   return {
                //     title: categoryId,
                //   };
                // }}
              />
              <Stack.Screen
                name="MealDetails"
                component={MealDetails}
                options={{
                  headerRight: () => {
                    return <Button title="Tap Me" />;
                  },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </FavoritesContextProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {},
// });
