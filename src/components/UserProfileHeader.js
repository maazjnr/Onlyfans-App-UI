import { useRouter } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const UserProfileHeader = ({ user, isSubscribed, setIsSubscribed }) => {
  const router = useRouter();

  return (
    <View>
      <ImageBackground source={{ uri: user.coverImage }} style={styles.cover}>
        <View style={styles.overlay} />

        <SafeAreaView
          style={{
            marginTop: 40,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            onPress={() => router.back()}
            name="arrow-back-sharp"
            size={25}
            color="#fff"
            style={{ marginRight: 10 }}
          />

          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 22,
                fontWeight: "500",
                marginBottom: 5,
              }}
            >
              {user.name}
            </Text>
            <Text style={{ color: "#fff" }}>
              1.4k Posts • 64.3k Likes • 15.3k Fans
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>

      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: -50,
          }}
        >
          <Image source={{ uri: user.avatar }} style={styles.userImage} />
          <FontAwesome name="share-square-o" size={24} color="#a0b4f0" />
        </View>

        <Text style={{ fontSize: 20, fontWeight: "600", marginVertical: 5 }}>
          {user.name}
        </Text>
        <Text style={{ color: "#999", marginBottom: 10 }}>@{user.handle}</Text>
        <Text style={{ lineHeight: 20 }}>{user.bio}</Text>

        <Text style={{ color: "gray", marginTop: 20, fontWeight: "bold" }}>
          SUBSCRIPTION
        </Text>

        <TouchableOpacity
          onPress={() => setIsSubscribed(!isSubscribed)}
          style={[
            styles.button,
            {
              backgroundColor: isSubscribed ? "#fff" : "#a0b4f0",
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: isSubscribed ? "#a0b4f0" : "#fff",
              },
            ]}
          >
            {isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
          </Text>
          <Text
            style={[
              styles.buttonText,
              {
                color: isSubscribed ? "#a0b4f0" : "#fff",
              },
            ]}
          >
            {user.subscriptionPrice === 0
              ? "FOR FREE"
              : `$${user.subscriptionPrice}/month`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cover: { width: "100%", height: 200 },
  overlay: {
    backgroundColor: "rgba(0,0,0, 0.4)",
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
  },

  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    marginRight: 20,
  },

  button: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#a0b4f0",
    padding: 15,
    borderRadius: 50,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  buttonText: {
    color: "#a0b4f0",
    fontWeight: "600",
  },
});

export default UserProfileHeader;
