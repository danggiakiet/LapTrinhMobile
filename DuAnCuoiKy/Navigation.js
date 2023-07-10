//#region import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './views/HomeScreen';
import ProductsScreen from './views/ProductsScreen';
import DetailScreen from './views/DetailScreen';
import FavoritesScreen from './views/FavoritesScreen';
import FilterScreen from './views/FilterScreen';
import CartScreen from './views/CartScreen';
import PayScreen from './views/PayScreen';
import Ionicons from '@expo/vector-icons/Ionicons'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
//#endregion
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Màn hình chính" component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: 'orange' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="Thể Loại" component={ProductsScreen}
        options={{
          headerTitle: 'Sản phẩm',
          headerStyle: { backgroundColor: 'orange' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="Chi tiết sản phẩm" component={DetailScreen}
        options={{
          headerStyle: { backgroundColor: 'orange' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  )
}
const FavStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sản phẩm yêu thích" component={FavoritesScreen}
        options={{
          headerStyle: { backgroundColor: 'orange' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  )
}
const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Giỏ Hàng" component={CartScreen}
        options={{
          headerStyle: { backgroundColor: 'orange' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="Thanh Toán" component={PayScreen}
        options={{
          headerStyle: { backgroundColor: 'orange' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  )
}
const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainStack}
        options={{
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="FilterScreen" component={FilterStack}
        options={{
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarLabel: 'Lọc',
          tabBarIcon: () => (
            <Ionicons name='search-circle-outline' size={30} color={'black'}/>
          ),
        }}
      />
      <Tab.Screen name="Favorites" component={FavStack}
        options={{
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarLabel: 'Yêu thích',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={'red'} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Cart" component={CartStack}
        options={{
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarLabel: 'Giỏ hàng',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={'black'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
const FilterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Filter" component={FilterScreen}
        options={{
          headerStyle: { backgroundColor: 'orange' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  )
}
function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Trang chủ" component={MainTab}
          options={{
            headerShown: false
          }}
        />
        <Drawer.Screen name="Tìm kiếm" component={FilterStack}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;