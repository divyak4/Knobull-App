import React from "react";
import { ImageBackground, Image, ScrollView, Text, View } from "react-native";
import background from "./images/AboutPage.jpg";
import logo from "./images/Knobull_Logo.png";

function About() {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground
          source={background}
          style={{ width: 500, height: 250, justifyContent: "center" }}
        >
          <Image
            source={logo}
            style={{
              width: 230,
              height: 230,
              left: 220,
              justifyContent: "center",
            }}
          />
        </ImageBackground>

        <Text style={{ padding: 20 }}>
          Most academic search engines might start by proposing super results or
          recommending that you use them exclusively and fully trust their
          support. We think differently at Knobull. The process starts with you.
          {"\n"}
          {"\n"}
          Our passion is working with students to deliver a cyber-secure
          world-class academic experience. We love what we do. Our purpose is to
          simplify and support your life as a student with one stop support
          systems so that you can give attention to learning and efforts that
          demand your time!
          {"\n"}
          {"\n"}
          The Knobull Academic Search Engine users have the ability to search
          through 5 billion academic sources without commercial chatter, chat
          with your virtual study group, check student news articles, select
          from a vast array of links to academic resources and receive instant
          answers to burning questions close at hand!
          {"\n"}
          {"\n"}
          Knobull, Inc. services for Academic and Career success is a
          ready-to-go environment for learning guidance that uses an academic
          search engine service, Refseek which is ranked 2nd by The College
          Post, 4th by The Journal, 7th by Rasmussen College and 8th by a
          LinkedIn reviewer. Our service searches 5 billion documents without
          tracking you and we pledge to never distribute or sell your personal
          data.
          {"\n"}
          {"\n"}
          In addition, we deliver fast answers from the Contact page, provide
          links to most academic sources on the Resources page, facilitate
          student collaboration on the Message Board and present timely news
          articles, picked by students, on the Student News page. The Knobull
          platform for professional success is now live with thousands of
          student followers and is supporting students throughout the US and
          across most academic fields!
          {"\n"}
          {"\n"}
          Our mission is to move academic and career success forward with brave,
          productive collaboration. We can change education and industries for
          the better by offering native advertising design and delivery for
          like-minded customers who want to help build valued academic tools for
          the student population.
        </Text>
      </View>
    </ScrollView>
  );
}
export default About;
