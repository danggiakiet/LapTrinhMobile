import React from 'react';
import { View, ScrollView, StyleSheet, FlatList, } from 'react-native';
import { Card, Button, Text } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons'
import CurrencyInput from 'react-native-currency-input';
import { useSelector, useDispatch } from 'react-redux';

const DetailScreen = (props) => {
  const { productId } = props.route.params;
  const availableProducts = useSelector((state) => state.products ) 
  const data = availableProducts.filter(item => item.productId === productId);
  const dispatch = useDispatch()
  
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.productId}
      renderItem={({ item }) =>
        <ScrollView>
          <View style={styles.container}>
            <Card containerStyle={styles.cardStyle}>
              <View style={styles.flexImage}>
                <ScrollView horizontal={true}>
                  <Card.Image
                    resizeMode='contain'
                    style={styles.image}
                    source={{ uri: item.avatar1 }}
                  />
                  <Card.Image
                    resizeMode='contain'
                    style={styles.image}
                    source={{ uri: item.avatar2 }}
                  />
                  <Card.Image
                    resizeMode='contain'
                    style={styles.image}
                    source={{ uri: item.avatar3 }}
                  />
                  <Card.Image
                    resizeMode='contain'
                    style={styles.image}
                    source={{ uri: item.avatar4 }}
                  />
                </ScrollView>
              </View>
              <Card.Divider />
              <Card.Title style={styles.titleCardStyle}>{item.name}</Card.Title>
              <Card.Divider />
              <CurrencyInput
                value={item.price}
                delimiter="."
                precision={0}
                style={styles.priceText}
              />
              <Card.Divider />
              <Text style={styles.desText}>{item.description}</Text>
              <Card.Divider />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button
                  buttonStyle={styles.buttonStyle}
                  title="Thêm vào giỏ hàng"
                  titleStyle={styles.titleButtonStyle}
                  onPress={() => dispatch({type:'addCartScreen', productId: productId})}
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
                  onPress={() => dispatch({type:'addFavScreen', productId: productId})}
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
    fontSize: 25,
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
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desText: {
    fontSize: 20,
    marginBottom: 5,
  },
});
export default DetailScreen;