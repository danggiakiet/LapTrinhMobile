import { React, useState } from 'react';
import { View, ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import { Card, Image } from '@rneui/themed';
import CurrencyInput from 'react-native-currency-input';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Button } from '@rneui/base';

const CartScreen = (props) => {
  const dispatch = useDispatch()
  const handlePayment = () => {
    // Gửi action để xóa toàn bộ sản phẩm trong giỏ hàng
    dispatch({ type: 'CLEAR_CART' });

    // Hiển thị thông báo thanh toán thành công
    alert('Thanh toán thành công!');
  };
  const CartProducts = useSelector((state) => state.CartProducts)
  let total = 0;
  const totalPrices = CartProducts.map((item, index) => {
    total = total + item.price;
    return total;
  });
  if (CartProducts.length == 0) {
    return (
      <Text style={styles.noFavTitle}>Không có sản phẩm nào trong giỏ hàng !!!</Text>
    )
  }
  else {
    return (
      <View style={styles.container}>
        <FlatList
          data={CartProducts}
          keyExtractor={item => item.productId}
          renderItem={({ item }) =>
            <View style={styles.listStyle}>
              <ScrollView>
                <View style={styles.flex}>
                  <View style={styles.imageInFlex}>
                    <Image
                      resizeMode='contain'
                      style={styles.image}
                      source={{ uri: item.avatar1 }}
                    />
                  </View>
                  <View style={styles.nameInFlex}>
                    <Text style={styles.nameText}>{item.name}</Text>
                  </View>
                  <View style={styles.iconInFlex}>
                    <Ionicons name='trash-outline' size={30} color={'gray'} style={{ alignSelf: 'flex-start' }}
                      onPress={() => dispatch({ type: 'addCartScreen', productId: item.productId })}
                    />
                  </View>
                </View>
                <CurrencyInput
                  value={item.price}
                  delimiter="."
                  precision={0}
                  style={styles.priceText}
                />
              </ScrollView>
            </View>
          }
        />
        <View style={styles.footerStyle}>
          <Text style={styles.totalPrices}>Tổng cộng: {total.toLocaleString('vi-VN')}</Text>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Thanh toán"
            onPress={() => props.navigation.navigate('Thanh Toán')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  listStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
  },
  noFavTitle: {
    fontSize: 40,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageInFlex: {
    justifyContent: 'center',
  },
  nameInFlex: {
    justifyContent: 'flex-start',
    width: 250,
  },
  iconInFlex: {
    justifyContent: 'flex-end',
    marginLeft: 20,
    alignSelf: 'flex-start'
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
  nameText: {
    fontSize: 20,
    margin: 5,
  },
  priceText: {
    fontSize: 20,
    margin: 5,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  footerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  totalPrices: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonStyle: {
    borderRadius: 10,
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'flex-end',
    marginBottom: 5,
    marginRight: 5,
    backgroundColor: 'red',
  },
});

export default CartScreen;
