import React from 'react'
import { FlatList, View } from 'react-native'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/profile.png')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/profile.png')
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/profile.png')
  },
]

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log('Message selected', item)}
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={<ListItemSeparator />}
      />
    </Screen>
  )
}

export default MessagesScreen