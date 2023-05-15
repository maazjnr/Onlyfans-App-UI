import { View, Text, Image } from 'react-native'
import React from 'react'

const Post = ({post}) => {
  return (
    <View>
      <Text>Post</Text>
      <Image source={{uri: post.image}} style={{width: '100%', aspectRatio: 1}} />
    </View>
  )
}

export default Post