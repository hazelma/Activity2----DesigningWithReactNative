import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import StoryItem from './StoryItem';

function Stories() {
  const storyList = [
    {
      imgSource: require('../assets/images/avatar-1.jpg'),
      username: '',
      isOwn: true,
      isHasStory: false
    },
    {
      imgSource: require('../assets/images/avatar-2.jpg'),
      username: 'nadine',
      isOwn: false,
      isHasStory: true
    },
    {
      imgSource: require('../assets/images/avatar-3.jpg'),
      username: 'celestinegonz...',
      isOwn: false,
      isHasStory: true
    },
    {
      imgSource: require('../assets/images/avatar-4.jpg'),
      username: 'francinesdiaz',
      isOwn: false,
      isHasStory: true
    }
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {
        storyList.map((v, i) => {
          return (
            <StoryItem key={i} item={v}/>
          )
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})

export default Stories;