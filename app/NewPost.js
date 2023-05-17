import { View, Text, SafeAreaView, TextInput, Button } from "react-native";
import React from "react";

const NewPost = () => {
  const onPost = () => {
    console.warn("Pressed");
  };

  return (
    <SafeAreaView style={{ marginTop: 50, margin: 10 }}>
      <TextInput placeholder="Compose new post..." />
      <Button onPress={onPost} title="Post" />
    </SafeAreaView>
  );
};

export default NewPost;
