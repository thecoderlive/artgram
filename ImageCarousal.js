import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const imageCarousalItem = ({ item }) => (
<View style={styles.image_carousal_item}>
<Image
    style={styles.art_image}
    source={{uri: item.art_image}}
    />
</View>
  );

const ImageCarousal = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.image_carousal}
    data={item}
    renderItem={imageCarousalItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default ImageCarousal;

const styles = StyleSheet.create({
    'art_image': {
        'width': '50vw',
        'height': '75vw',
        'marginTop': 5,
        'backgroundColor': '#f5f8ffff'
    }
});