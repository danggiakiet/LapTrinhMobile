import React from 'react';
import { View, ScrollView, StyleSheet, FlatList, } from 'react-native';
import { Card, Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import Categories from '../data/categories';
function HomeScreen(props) {
  return (
    <FlatList
      data={Categories}
      keyExtractor={item => item.CategoryId}
      renderItem={({ item }) =>
        <ScrollView>
          <View style={styles.container}>
            <Card containerStyle={styles.cardStyle}>
              <Card.Title style={styles.titleCardStyle}>{item.name}</Card.Title>
              <Card.Divider />
              <ScrollView horizontal={true}>
                <View style={styles.flexImage}>
                  <Button buttonStyle={styles.flexButtonStyle} onPress={() => props.navigation.navigate('Thể Loại', { categoryId: item.CategoryId })}>
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
                  </Button>
                </View>
              </ScrollView>
              <Button
                buttonStyle={styles.buttonStyle}
                title="Xem Ngay"
                titleStyle={styles.titleButtonStyle}
                onPress={() => props.navigation.navigate('Thể Loại', { categoryId: item.CategoryId })}
                ViewComponent={LinearGradient} // Don't forget this!
                linearGradientProps={{
                  colors: ['#FF9900', '#FF3300'],
                  start: { x: 0, y: 0.5 },
                  end: { x: 1, y: 0.5 },
                }}
              />
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
    fontSize: 40,
  },
  image: {
    width: 200,
    height: 250,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  flexImage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  flexButtonStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  buttonStyle: {
    borderRadius: 10,
    margin: 5,
  },
  titleButtonStyle: {
    fontSize: 30,
  }
});
export default HomeScreen;