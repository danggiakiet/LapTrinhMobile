import React from 'react';
import { View, ScrollView, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { Card, Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux';

const ProductsScreen = (props) => {
  const dispatch = useDispatch()
  const { categoryId } = props.route.params;
  //Những sp đang có sẵn (sau khi lọc)
  const availableProducts = useSelector((state) => state.products)

  const data = availableProducts.filter(item => item.categoryID === categoryId);
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.productId}
      renderItem={({ item }) =>
        <ScrollView>
          <View style={styles.container}>
            <Card containerStyle={styles.cardStyle}>
              <Card.Title style={styles.titleCardStyle}>
                {item.name}
              </Card.Title>
              <Card.Divider />
              <View style={styles.flexImage}>
                <Button buttonStyle={styles.flexButtonStyle} onPress={() => props.navigation.navigate('Chi tiết sản phẩm', { productId: item.productId })}>
                  <Card.Image
                    resizeMode='contain'
                    style={styles.image}
                    source={{ uri: item.avatar1 }}
                  />
                </Button>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button
                  buttonStyle={styles.buttonStyle}
                  title="Xem Ngay"
                  titleStyle={styles.titleButtonStyle}
                  onPress={() => props.navigation.navigate('Chi tiết sản phẩm', { productId: item.productId })}
                  ViewComponent={LinearGradient} // Don't forget this!
                  linearGradientProps={{
                    colors: ['#FF9900', '#FF3300'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                  }}
                />
                <Button
                  buttonStyle={styles.buttonFavStyle}
                  icon={<Ionicons name='heart' size={30} color={'red'}/>}
                  titleStyle={styles.titleButtonStyle}
                  onPress={() => dispatch({type:'addFavScreen', productId: item.productId})}
                />
              </View>
            </Card>
          </View>
        </ScrollView>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333533',
  },
  cardStyle: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  titleCardStyle: {
    fontSize: 20,
  },
  image: {
    width: 250,
    height: 300,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  flexImage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  flexButtonStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
  },
  buttonStyle: {
    borderRadius: 10,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonFavStyle: {
    borderRadius: 10,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#FFFFFF'
  },
  titleButtonStyle: {
    fontSize: 20,
  }
});
export default ProductsScreen;