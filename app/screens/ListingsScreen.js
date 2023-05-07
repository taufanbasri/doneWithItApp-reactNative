import React from 'react'
import Screen from '../components/Screen'
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card'
import colors from '../config/colors'

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 3,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
]

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        }
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})

export default ListingsScreen