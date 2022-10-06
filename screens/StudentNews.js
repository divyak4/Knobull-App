import React from "react";
import { Image, StyleSheet, TouchableOpacity, FlatList, View, Linking } from "react-native";
import CustomText from "../components/CustomText";
import CONSTANTS from '../Constants';

const ARTICLES = [
  {title: 'Art', link: 'http://www.articlegeek.com/arts/index.htm'}, 
  {title: 'Business', link: 'http://www.articlegeek.com/business/index.htm'}, 
  {title: 'Computers', link: 'http://www.articlegeek.com/computers/index.htm'}, 
  {title: 'Finance', link: 'http://www.articlegeek.com/finance/index.htm'}, 
  {title: 'Games', link: 'http://www.articlegeek.com/games/index.htm'}, 
  {title: 'Health', link: 'http://www.articlegeek.com/health/index.htm'}, 
  {title: 'Home Life', link: 'http://www.articlegeek.com/home/index.htm'}, 
  {title: 'Internet', link: 'http://www.articlegeek.com/internet/index.htm'}, 
  {title: 'Law', link: 'http://www.articlegeek.com/law/index.htm'}, 
  {title: 'News', link: 'http://www.articlegeek.com/news/index.htm'}, 
  {title: 'Recreation', link: 'http://www.articlegeek.com/recreation/index.htm'}, 
  {title: 'References', link: 'http://www.articlegeek.com/reference/education_articles.htm'}, 
  {title: 'Self Improvement', link: 'http://www.articlegeek.com/self-improvement/index.htm'}, 
  {title: 'Society', link: 'http://www.articlegeek.com/society/index.htm'}, 
  {title: 'Sports', link: 'http://www.articlegeek.com/sports/index.htm'}, 
  {title: '', link: ''}
]

const TWITTER_LINK = 'https://mobile.twitter.com/knobullit';

function flatListHeaderComponent() {
  return (
    <View style={styles.viewHeader}>
      <CustomText style={styles.textStudentNews}>Student News</CustomText>
      <TouchableOpacity 
        style={styles.buttonTwitter}
        onPress={async() => {
          await Linking.canOpenURL(TWITTER_LINK)
          .then(function() {
            Linking.openURL(TWITTER_LINK);
          })
          .catch(function(error) {
            console.log(error);
          })
        }}
      >
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
      data={ARTICLES}
      renderItem={({item}) => {
        return (
          <TouchableOpacity 
            style={styles.buttonArticleItem}
            onPress={async() => {
              await Linking.canOpenURL(item.link)
              .then(function() {
                Linking.openURL(item.link);
              })
              .catch(function(error) {
                console.log(error);
              });
            }}
          >
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
