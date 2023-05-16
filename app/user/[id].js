import { useRouter, useSearchParams } from "expo-router";
import { View, Text, StyleSheet, FlatList } from "react-native";
import users from "../../assets/data/users";
import { useState } from "react";
import UserProfileHeader from "../../src/components/UserProfileHeader";
import Post from "../../src/components/Post";
import posts from "../../assets/data/posts";

const ProfilePage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { id } = useSearchParams();
  const user = users.find((u) => u.id === id);

  if (!user) {
    return <Text>User not found</Text>;
  }

  if(!isSubscribed) {
    return (
      <UserProfileHeader
      user={user}
      isSubscribed={isSubscribed}
      setIsSubscribed={setIsSubscribed}
    />
    )
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
