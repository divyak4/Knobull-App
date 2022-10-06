import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Linking } from "react-native";
import CustomText from "../components/CustomText";
import CONSTANTS from "../Constants";

const URL1 = 'http://www.articlegeek.com/health/disease_articles/8955-diabeticfatspir.htm'
const URL2 = 'http://www.articlegeek.com/finance/credit_card_debt_articles/get-credit-card-tips.htm';
const URL3 = 'http://www.articlegeek.com/home/family_articles/66-anniversarypart.htm';
const URLSearched = 'http://refseek.com/search?q='

const openLink = async (url) => {
  await Linking.canOpenURL(url);
  Linking.openURL(url);
}


function Home() {
  const [query, setQuery] = useState("");

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} scrollEnabled={false}>
        <View style={styles.viewWelcome}>
          <CustomText style={styles.textWelcome}>Welcome!</CustomText>
          <View style={styles.searchBox}>
            <TextInput 
              style={styles.textInput}
              onChangeText={setQuery}
              value={query}
              placeholder={'search here...'}
            />
            <TouchableOpacity
              onPress={() => {
                if (query) {
                  openLink(URLSearched + query)
                }
              }}
            >
              <Image
                source={require('./images/search.png')}
                style={styles.imageSearch}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewNews}>
          <CustomText style={styles.textNews}>News</CustomText>
          <View style={styles.containerNews}>
            {/* item 1 */}
            <TouchableOpacity 
              style={styles.itemNews}
              onPress={() => {
                openLink(URL1);
              }}  
            >
              <View style={styles.containerImage}>
                <Image
                  source={require('./images/HomePage1.png')}
                  style={styles.imageNews}
                />
              </View>
              <View style={styles.descriptionNews}>
                <CustomText style={styles.textNewsItem1}>Health</CustomText>
                <CustomText style={styles.textNewsItem2}>The Diabetic Fat Spiral</CustomText>
              </View>
            </TouchableOpacity>
            {/* item 2 */}
            <TouchableOpacity 
              style={styles.itemNews}
              onPress={() => {
                openLink(URL2);
              }}   
            >
              <View style={styles.containerImage}>
                <Image
                  source={require('./images/HomePage2.png')}
                  style={styles.imageNews}
                />
              </View>
              <View style={styles.descriptionNews}>
                <CustomText style={styles.textNewsItem1}>Finance</CustomText>
                <CustomText style={styles.textNewsItem2}>Essential Tips On How To Get A Credit Card</CustomText>
              </View>
            </TouchableOpacity>
            {/* item 3 */}
            <TouchableOpacity 
              style={styles.itemNews}
              onPress={() => {
                openLink(URL3);
              }}   
            >
              <View style={styles.containerImage}>
                <Image
                  source={require('./images/HomePage3.png')}
                  style={styles.imageNews}
                />
              </View>
              <View style={styles.descriptionNews}>
                <CustomText style={styles.textNewsItem1}>Home {'&'} Family</CustomText>
                <CustomText style={styles.textNewsItem2}>Anniversary Party Planning</CustomText>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonMore}>
            <CustomText style={styles.textMore}>More...</CustomText>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonMore: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CONSTANTS.GRAY,
    marginVertical: 15,
    width: 90,
    height: 30,
    borderRadius: 10,
  },
  containerImage: {
    flex: 1,
  },
  containerNews: {
    flex: 1,
    alignSelf: 'stretch',
  },
  descriptionNews: {
    flex: 2.5,
    marginHorizontal: 15,
    marginVertical: 5,
    height: 50,
  },
  imageNews: {
    height: '100%',
  },
  imageSearch: {
    width: 25,
    height: 25,
  },
  itemNews: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: CONSTANTS.GRAY,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CONSTANTS.GRAY,
    alignSelf: 'stretch',
    marginHorizontal: 50,
    marginVertical: 20,
    borderRadius: 25,
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  textInput: {
    flex: 1,
  },
  textMore: {
    fontSize: CONSTANTS.TITLE_3_FONT_SIZE,
  },
  textNews: {
    fontSize: CONSTANTS.TITLE_2_FONT_SIZE,
    marginVertical: 20,
  },
  textNewsItem1: {
    fontSize: CONSTANTS.TITLE_4_FONT_SIZE,
    color: 'orange',
  },
  textNewsItem2: {
    fontSize: CONSTANTS.TITLE_3_FONT_SIZE,
  },
  textWelcome: {
    fontSize: CONSTANTS.TITLE_1_FONT_SIZE,
  },
  viewNews: {
    flex: 1.8,
    backgroundColor: CONSTANTS.LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewWelcome: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home;
