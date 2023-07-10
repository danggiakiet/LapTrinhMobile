import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, FlatList, Text, TouchableOpacity, Switch } from 'react-native';
import { Card, Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons'
import { useDispatch } from 'react-redux';
const FilterScreen = (props) => {

  const [isSale, setIsSale] = useState(false);
  const [isBestSeller, setIsBestSeller] = useState(false);

  const dispatch = useDispatch()

  const filters = {
    isSale: isSale, 
    isBestSeller: isBestSeller
  }

  useEffect(() => props.navigation.setOptions({
    headerRight: () =>
      <TouchableOpacity
        onPress={() => alert("Hiện tại nhóm em chưa làm được")}
      >
        <Ionicons name='save' size={30} color={'black'} />
      </TouchableOpacity>
  }), [props.navigation], isSale, isBestSeller)

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Lọc sản phẩm</Text>
      <View style={styles.flex}>
        <Text style={styles.text}>Sản đang giảm giá</Text>
        <Switch
          style={styles.switch}
          value={isSale}
          onValueChange={(newVaule) => setIsSale(newVaule)}
        />
      </View>
      <View style={styles.flex}>
        <Text style={styles.text}>Sản bán chạy</Text>
        <Switch
          value={isBestSeller}
          onValueChange={(newVaule) => setIsBestSeller(newVaule)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  },
  textTitle:{
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  flex:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  switch:{
    
  },
  text:{
    fontSize: 25,
  },
})

export default FilterScreen;