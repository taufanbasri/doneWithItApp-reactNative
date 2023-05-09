import React, { useState } from 'react'
import { FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import ListItemDelete from '../components/ListItemDelete'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/profile.png')
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempora iste voluptatibus autem, qui sint ullam nihil doloremque. Accusamus deleniti eius rerum tempore illo voluptatum vero aliquid perferendis sit at quia quasi voluptatibus, ipsa debitis, impedit ipsum, eaque atque voluptatem! Eveniet laudantium, deserunt id dolorum fugit molestiae impedit dignissimos odit!',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempora iste voluptatibus autem, qui sint ullam nihil doloremque. Accusamus deleniti eius rerum tempore illo voluptatum vero aliquid perferendis sit at quia quasi voluptatibus, ipsa debitis, impedit ipsum, eaque atque voluptatem! Eveniet laudantium, deserunt id dolorum fugit molestiae impedit dignissimos odit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempora iste voluptatibus autem, qui sint ullam nihil doloremque. Accusamus deleniti eius rerum tempore illo voluptatum vero aliquid perferendis sit at quia quasi voluptatibus, ipsa debitis, impedit ipsum, eaque atque voluptatem! Eveniet laudantium, deserunt id dolorum fugit molestiae impedit dignissimos odit!',
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
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id))
  }

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
            renderRightActions={() => <ListItemDelete onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={<ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: 'T3',
              description: 'D3',
              image: require('../assets/profile.png')
            },
          ])
        }}
      />
    </Screen>
  )
}

export default MessagesScreen