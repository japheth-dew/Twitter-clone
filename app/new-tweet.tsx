import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  useColorScheme,
} from "react-native";
import React from "react";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { Link, useNavigation, useRouter } from "expo-router";

const user = {
  id: "1",
  name: "Vadim Savin",
  username: "webdevvadim",
  image: "https://flyclipart.com/thumb2/avatar-icon-518360.png",
};

const NewTweet = () => {
  const navigation = useRouter();

  const _color = useColorScheme() ?? "light";
  const color = Colors[_color];

  const [text, setText] = React.useState("");

  const onTweetPress = () => {
    console.warn("Posting the tweet");

    setText("");
    navigation.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Link
          href="../"
          style={{
            fontSize: 20,
            color: color.text,
          }}
        >
          Cancel
        </Link>
        <Pressable style={styles.button} onPress={onTweetPress}>
          <Text style={[styles.buttonText]}>Tweet</Text>
        </Pressable>
      </View>

      <View style={styles.inputContainer}>
        <Image src={user.image} style={styles.image} />
        <TextInput
          multiline
          numberOfLines={6}
          placeholder="What's happening?"
          placeholderTextColor={color.text}
          value={text}
          onChangeText={setText}
          style={{
            flex: 1,
            marginHorizontal: 10,
            color: color.text,
            textAlignVertical: "top",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewTweet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
  },
  button: {
    backgroundColor: "#1c98f0",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },

  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
});
