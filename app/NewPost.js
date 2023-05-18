import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

const NewPost = () => {

  const router = useRouter();
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const onPost = () => {
    console.warn("Pressed textInput", text);
    setText("");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ marginTop: 50, margin: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          onPress={() => router.back()}
          name="arrow-back-sharp"
          size={25}
          color="#000"
          style={{ marginRight: 5 }}
        />

        <Text style={{ fontWeight: "500", fontSize: 18, marginLeft: 10 }}>
          New post
        </Text>
      </View>
      <View>
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="Compose new post..."
          numberOfLines={3}
          multiline
        />
      </View>

      <View style={{ marginVertical: 10 }}>
        <Ionicons
          onPress={pickImage}
          name="ios-image-outline"
          size={24}
          color="gray"
        />
      </View>

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", aspectRatio: 1 }}
        />
      )}

      <TouchableOpacity
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "#159" }}>Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NewPost;
