import { useSearchParams } from "expo-router";
import tweets from "../../../assets/data/tweets";
import Tweet from "../../../components/Tweet";
import { Text, View } from "../../../components/Themed";

export default function TweetScreen() {
  const { id } = useSearchParams();

  const tweet = tweets.find((tweet) => tweet.id === id);

  if (!tweet) {
    return <Text>Could not find tweet with id {id}</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Tweet tweet={tweet} />
    </View>
  );
}
