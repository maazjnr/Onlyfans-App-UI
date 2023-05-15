import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
const UserCard = ({ user }) => {
  return (

    <Link href={`/user/${user.id}`} asChild> 
    <TouchableOpacity>
    <ImageBackground source={{ uri: user.coverImage }} style={styles.userCard}
     >
      <View style={styles.overlay} />
      <Image
        style={styles.userImage}
        source={{
          uri: user.avatar,
        }}
      />

      <View>
        <Text
          style={{
            color: "#fff",
            fontSize: 22,
            fontWeight: "500",
            marginBottom: 2,
          }}
        >
          {user.name}
        </Text>
        <Text style={{ color: "#fff" }}>@{user.handle} </Text>
      </View>
    </ImageBackground>
    </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: "gray",
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 5,
  },

  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    marginRight: 20,
  },

  overlay: {
    backgroundColor: "rgba(0,0,0, 0.4)",
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
  },
});

export default UserCard;
