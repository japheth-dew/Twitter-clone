import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "./Themed";
import { TweetType } from "../types";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <Link href={`/tweet/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <Image src={tweet.user.image} style={styles.userImage} />
        <View style={styles.mainContainer}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}>{tweet.user.username} · 2h</Text>
            <Entypo
              name={"dots-three-horizontal"}
              size={16}
              color={"grey"}
              style={{
                marginLeft: "auto",
              }}
            />
          </View>
          <Text style={styles.content}>{tweet.content}</Text>
          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={styles.image} />
          )}
        </View>
      </Pressable>
    </Link>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: "600",
  },
  username: {
    color: "grey",
    marginLeft: 5,
  },
  content: {
    lineHeight: 18,
    marginTop: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    marginTop: 10,
    borderRadius: 15,
  },
});
