import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

import ImageCarousal from './ImageCarousal'

const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<ImageCarousal item={item.image_carousal}/>
<Text style={styles.art_caption}>{item.art_caption}</Text>
<Text style={styles.art_description}>{item.art_description}</Text>
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'art_caption': {
        'color': '#8129f5ff',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'fontFamily': 'Roboto'
    },
    'art_description': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'fontFamily': 'Roboto',
        'color': '#2c0207ff'
    }
});