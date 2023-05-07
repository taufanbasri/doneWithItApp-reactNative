import React from 'react'
import { FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import ListItemDelete from '../components/ListItemDelete'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

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
          <ListItemDelete>
            <ListItem
              onPress={() => console.log('Message selected', item)}
              title={item.title}
              subTitle={item.description}
              image={item.image}
            />
          </ListItemDelete>
        )}
        ItemSeparatorComponent={<ListItemSeparator />}
      />
    </Screen>
  )
}

export default MessagesScreen