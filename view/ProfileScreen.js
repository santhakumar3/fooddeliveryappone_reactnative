import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../viewmodel/authViewModel';

const ProfileScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Email: {user?.email}</Text>
      <Text>Name: {user?.name}</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
});
