import { View, StyleSheet, FlatList } from "react-native";
import users from "../assets/data/users";
import UserCard from "../src/components/UserCard";

export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    padding: 10,
  },
});
