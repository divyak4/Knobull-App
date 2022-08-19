import React, { useState } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from '../components/CustomText';
import CONSTANTS from '../Constants';

const STRING_RESEARCH_WEBSITES =
  "• LOC.gov lets you not only ask a librarian for help but also search " +
  "catalogs of libraries from all over the world. This is truly a huge " +
  "resource that should be on your Top 10 best research sites list. " +
  "Anything from Academica Sinica in Taiwan to Yale University in the " +
  "U.S. is here and ready to be searched." +
  "\n\n• ReferenceDesk.org: Dubbed \"The Internet's Best Reference " +
  "Source,\" this web directory is an extremely useful site that provides " +
  "everything from business and finance information to federal government " +
  "resources, scholarship details, links to newspapers and calendars, " +
  "search engines, and more." +
  "\n\n• USA.gov: This is where you should start when looking for " +
  "specific government information." +
  "\n\n• Reference.com: Extremely simple to use with a basic layout, " +
  "this reference website lets you browse by category or search by " +
  "keywords to research everything from food and health to history, " +
  "beauty, education, technology, vehicles, art, and more." +
  "\n\n• Refdesk.com: Billing itself as the internet's fact-checker, " +
  "this reference site includes in-depth research links to breaking news, " +
  "editorials, Today in History, Word of the Day, Daily Pictures, and " +
  "other references." +
  "\n\n• Encyclopedia.com: The number one online encyclopedia that lets " +
  "you search over 200 reference books and encyclopedias at once." +
  "\n\n• Encyclopedia Britannica: One of the world's oldest encyclopedias " +
  "online; has featured posts and cat-egory listings." +
  "\n\n• Purdue University Quick Reference: Research site with tons of " +
  "information that includes resources specific to Purdue University and " +
  "surrounding areas in Indiana. It also includes an Ask a Librarian " +
  "service." +
  "\n\n• Prescriber's Digital Reference: A wonderful research tool when " +
  "gathering detailed medical information." +
  "\n\n• iTools.com: Serves as a gateway for reference and research links." +
  "\n\n• FOLDOC: Free Online Dictionary of Computing is a detailed " +
  "computing dictionary for researching the meaning behind " +
  "computer-related tools, standards, jargon, languages, and more. " +
  "Depending on the type of research you're doing or how you need to " +
  "reference the information, you may need quick access to books. There " +
  "are lots of places to download free books online, plus sites with free " +
  "textbooks and free educational movies." +
  "\n\n• The Virtual Learning Resources Center (VLRC) is an online index " +
  "hosting thousands of scholarly websites, all of which are selected by " +
  "teachers and librarians from around the globe. The site provides " +
  "students and teachers with current, valid information for school and " +
  "university academic projects using an index gathered from research " +
  "portals, universities and library internet subject guides recommended " +
  "by teachers and librarians." +
  "\n\n• The Online Writing Lab (OWL) at Purdue University houses writing " +
  "resources and instructional material, and we provide these as a free " +
  "service of the Writing Lab at Purdue. Students, members of the " +
  "community, and users world-wide will find information to assist with " +
  "many writing projects. Teachers and trainers may use this material for " +
  "in-class and out-of-class instruction. For more information about " +
  "services for the Purdue Uni-versity community, including one-to-one " +
  "consultations, ESL conversation groups and workshops, please visit the " +
  "Writing Lab site."


const STRING_FINDING_SOURCES =
  "• WorldWideScience, which refers to itself as “The Global Science " +
  "Gateway,” is operated by the Office of Scientific and Technical " +
  "Information—a branch of the Office of Science within the U.S. " +
  "Department of Energy. The site utilizes databases from over 70 " +
  "countries. When users type a query, it hits databases from all over " +
  "the world and will display both English and translated results from " +
  "related journals and academic resources." +
  "\n\n• Science.gov is operated and maintained by the Office of Science " +
  "and Technical Information, the same department that collaborates on " +
  "WorldWideScience.org. This search engine pulls from over 60 databases, " +
  "over 2,200 websites and 200 million pages of journals, documents and " +
  "scientific data. Search results can be filtered by author, date, topic " +
  "and format (text or multimedia)." +
  "\n\n• A self-described “computational knowledge engine,” Wolfram Alpha " +
  "does not so much provide search results as it does search answers. " +
  "Simply type in a topic or question you may be interested in, such as, " +
  "“What is the function of the pancreas?” and the answer will show up " +
  "without making you scroll through pages of results. This is especially " +
  "handy for those in need of math help. With its minimalist design." +
  "\n\n• Refseek doesn’t look like much. However, the engine pulls from " +
  "over one billion web pages, encyclopedias, journals and books. It is " +
  "similar to Google in its functionality, except that it focuses more on " +
  "scientific and academic results—meaning more results will come from " +
  ".edu or .org sites, as well as online encyclopedias. It also has an " +
  "option to search documents directly—providing easy access to PDFs of " +
  "academic papers." +
  "\n\n• Populated by the U.S. Department of Education, the Educational " +
  "Resources Information Center(ERIC) is a great tool for academic " +
  "research with more than 1.3 million bibliographic records of articles " +
  "and online materials. ERIC provides access to an extensive body of " +
  "education-related literature including journal articles, books, " +
  "research syntheses, conference papers, technical reports, policy " +
  "papers and more. With more than eight million searches each month, " +
  "it’s no wonder why this search engine is a great web source for education."

function Resources() {
  const [isViewingResearchWebsites, setIsViewingResearchWebsites] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.viewTitle}>
        {isViewingResearchWebsites ? 
          (
            <TouchableOpacity style={styles.touchableOpacityResearchWebsites}>
              <CustomText style={styles.textResearchWebsitesSelected}>Research Websites</CustomText>
            </TouchableOpacity>
          ) :
          (
            <TouchableOpacity 
              style={styles.touchableOpacityResearchWebsites}
              onPress={ () => {setIsViewingResearchWebsites(true)} }
            >
              <CustomText style={styles.textResearchWebsitesDeselected}>Research Websites</CustomText>
            </TouchableOpacity>
          )
        }
        <View style={styles.divider} />
        {isViewingResearchWebsites ? 
          (
            <TouchableOpacity 
              style={styles.touchableOpacityFindingSources}
              onPress={ () => {setIsViewingResearchWebsites(false)} }
            >
              <CustomText style={styles.textFindingSourcesDeselected}>Finding Sources</CustomText>
            </TouchableOpacity>
          ) :
          (
            <TouchableOpacity style={styles.touchableOpacityFindingSources}>
              <CustomText style={styles.textFindingSourcesSelected}>Finding Sources</CustomText>
            </TouchableOpacity>
          )
        }
      </View>
      <View style={styles.viewBody}>
        {isViewingResearchWebsites ?
          (
            <View style={styles.viewTexts}>
              <CustomText style={styles.textTitle}>Research Websites</CustomText>
              <CustomText style={styles.textBody}>{STRING_RESEARCH_WEBSITES}</CustomText>
            </View>
          ) :
          (
            <View style={styles.viewTexts}>
              <CustomText style={styles.textTitle}>Finding Sources</CustomText>
              <CustomText style={styles.textBody}>{STRING_FINDING_SOURCES}</CustomText>
            </View>
          )
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  divider: {
    position: 'absolute',
    left: '50%',
    width: 1,
    height: 50,
    backgroundColor: 'rgba(1, 1, 1, 0.2)',
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  textBody: {
    textAlign: 'left',
    fontSize: CONSTANTS.TITLE_3_FONT_SIZE,
    marginBottom: 50,
    marginHorizontal: 30,
  },
  textFindingSourcesDeselected: {
    flex: 1,
    fontSize: CONSTANTS.TITLE_3_FONT_SIZE,
    margin: 10,
    textAlign: 'center',
  },
  textFindingSourcesSelected: {
    flex: 1,
    fontSize: CONSTANTS.TITLE_3_FONT_SIZE,
    borderRadius: 5,
    backgroundColor: CONSTANTS.GRAY,
    margin: 10,
    textAlign: 'center',
  },
  textResearchWebsitesDeselected: {
    flex: 1,
    fontSize: CONSTANTS.TITLE_3_FONT_SIZE,
    margin: 10,
    textAlign: 'center',

  },
  textResearchWebsitesSelected: {
    flex: 1,
    fontSize: CONSTANTS.TITLE_3_FONT_SIZE,
    borderRadius: 5,
    backgroundColor: CONSTANTS.GRAY,
    margin: 10,
    textAlign: 'center',

  },
  textTitle: {
    textAlign: 'center',
    fontSize: CONSTANTS.TITLE_1_FONT_SIZE,
    marginVertical: 40,
  },
  touchableOpacityFindingSources: {
    flex: 1,
    height: 50,
  },
  touchableOpacityResearchWebsites: {
    flex: 1,
    height: 50,
  },
  viewBody: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewTexts: {
    alignSelf: 'stretch',
  },
  viewTitle: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: 20,
  }
})

export default Resources;
