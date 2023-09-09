import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import PostItem from './PostItem';

function Posts() {
  const postList = [
    {
      imgSource: require('../assets/images/post-1.jpg'),
      caption: 'after party',
      user: {
        imgSource: require('../assets/images/avatar-2.jpg'),
        username: 'nadine',
        isOwn: false,
        isHasStory: true
      }
    }
  ]
  return (
    <View style={styles.container}>
      {
        postList.map((v, i) => {
          return(
            <PostItem key={i} item={v}/>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})

export default Posts;