import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../config/colors'

const menuItems = [
  {
    title: 'My Listing',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    }
  },
]

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Taufan Prasetyo'
          subTitle='taufancoder@gmail.com'
          image={require('../assets/profile.png')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menu => menu.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
            />
          }
        />
      </View>

      <ListItem
        title='Log Out'
        IconComponent={
          <Icon name='logout' backgroundColor='#ffe66d' />
        } />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  }
})

export default AccountScreen