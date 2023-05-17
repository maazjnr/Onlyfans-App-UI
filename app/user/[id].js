import { useRouter, useSearchParams } from "expo-router";
import { View, Text, StyleSheet, FlatList } from "react-native";
import users from "../../assets/data/users";
import { useState } from "react";
import UserProfileHeader from "../../src/components/UserProfileHeader";
import Post from "../../src/components/Post";
import posts from "../../assets/data/posts";
import { FontAwesome } from "@expo/vector-icons";

const ProfilePage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { id } = useSearchParams();
  const user = users.find((u) => u.id === id);

  if (!user) {
    return <Text>User not found</Text>;
  }

  if (!isSubscribed) {
    return (
      <View>
        <UserProfileHeader
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />

        <View
          style={{
            backgroundColor: "#ebecf0",
            alignItems: "center",
            padding: 20
          }}
        >
          <FontAwesome name="lock" size={50} color="gray" />
          <Text style={{
            backgroundColor: "#a0b4f0", padding: 15, 
            borderRadius: 25,
            overflow: "hidden",
              color: "#fff",
              margin: 20,
            height: 50,
            textAlign: "center"
          }}>Subscribe to see user posts</Text>
        </View>
      </View>
    );
  }

  return (
    <FlatList
      ListHeaderComponent={() => (
        <UserProfileHeader
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />
      )}
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
    />
  );
};

const styles = StyleSheet.create({});

export default ProfilePage;
