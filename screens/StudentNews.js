import React from "react";
import { Image, StyleSheet, TouchableOpacity, FlatList, View } from "react-native";
import CustomText from "../components/CustomText";
import CONSTANTS from '../Constants';

const DATA = [
  {title: 'Art'}, {title: 'Business'}, {title: 'Computers'}, {title: 'Finance'}, 
  {title: 'Games'}, {title: 'Health'}, {title: 'Home Life'}, {title: 'Internet'}, 
  {title: 'Law'}, {title: 'News'}, {title: 'Recreation'}, {title: 'References'}, 
  {title: 'Society'}, {title: 'Sports'}, {title: 'Self Improvement'}, {title: ''}
]

function flatListHeaderComponent() {
  return (
    <View style={styles.viewHeader}>
      <CustomText style={styles.textStudentNews}>Student News</CustomText>
      <TouchableOpacity style={styles.buttonTwitter}>
        <CustomText style={styles.textButton}>Check student news on our Twitter!</CustomText>
        <Image
          source={require('./images/twitter.png')}
          style={styles.imageTwitter}
        />
      </TouchableOpacity>
      <CustomText style={styles.textArticles}>Articles</CustomText>
    </View>
  );
}

function flatListFooterComponent() {
  //bottom spacer
  return (
    <View style={{alignSelf: 'stretch', height: 50}} />
  );
}

function StudentNews() {
  return (
    <FlatList
      style={styles.flatList}
      ListHeaderComponent={flatListHeaderComponent}
      ListFooterComponent={flatListFooterComponent}
      numColumns={2}
      data={DATA}
      renderItem={({item}) => {
        return (
          <TouchableOpacity style={styles.buttonArticleItem}>
            <CustomText style={styles.textArticleItem}>{item.title}</CustomText>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.title}
    />
  );
}

const styles = StyleSheet.create({
  buttonArticleItem: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 25,
  },
  buttonTwitter: {
    backgroundColor: 'rgba(85, 173, 238, 1)',
    alignSelf: 'stretch',
    marginHorizontal: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageTwitter: {
    width: 40,
    height: 40,
  },
  textArticles: {
    fontSize: CONSTANTS.TITLE_2_FONT_SIZE,
    marginVertical: 40,
  },
  textArticleItem: {
    //is text
    fontSize: 20,
    color: 'rgba(85, 173, 238, 1)',
    textAlign: 'center',
  },
  textButton: {
    color: 'white',
    width: '60%',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
  textStudentNews: {
    fontSize: CONSTANTS.TITLE_1_FONT_SIZE,
    marginVertical: 30,
  },
  viewHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})

export default StudentNews;
