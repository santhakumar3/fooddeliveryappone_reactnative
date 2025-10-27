import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { AuthContext } from '../viewmodel/authViewModel';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, 👋</Text>
          <Text style={styles.username}>{user?.name || 'Guest User'}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            }}
            style={styles.profileImg}
          />
        </TouchableOpacity>
      </View>

      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1601758125946-6ec2b67fa97a?auto=format&fit=crop&w=800&q=60',
          }}
          style={styles.bannerImg}
        />
        <Text style={styles.bannerText}>Your Pet’s Happiness, Our Priority 🐾</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png',
            }}
            style={styles.icon}
          />
          <Text style={styles.actionText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
            }}
            style={styles.icon}
          />
          <Text style={styles.actionText}>Pet Care</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077976.png',
            }}
            style={styles.icon}
          />
          <Text style={styles.actionText}>Orders</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Categories */}
      <Text style={styles.sectionTitle}>Popular Categories</Text>
      <View style={styles.grid}>
        {[
          {
            title: 'Pet Food',
            img: 'https://images.unsplash.com/photo-1625746926423-2b96a5b47de5?auto=format&fit=crop&w=600&q=60',
          },
          {
            title: 'Toys',
            img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=60',
          },
          {
            title: 'Grooming',
            img: 'https://images.unsplash.com/photo-1625496274554-7ee7bfc08705?auto=format&fit=crop&w=600&q=60',
          },
          {
            title: 'Medical Care',
            img: 'https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=600&q=60',
          },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.cardImg} />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Promotional Section */}
      <View style={styles.promoContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1558944351-c3ad7b532228?auto=format&fit=crop&w=800&q=60',
          }}
          style={styles.promoImg}
        />
        <View style={styles.promoOverlay}>
          <Text style={styles.promoTitle}>Get 30% Off on First Grooming!</Text>
          <TouchableOpacity style={styles.promoBtn}>
            <Text style={styles.promoBtnText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: '#555',
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  bannerContainer: {
    marginTop: 20,
    alignItems: 'center',
    position: 'relative',
  },
  bannerImg: {
    width: width - 40,
    height: 180,
    borderRadius: 15,
  },
  bannerText: {
    position: 'absolute',
    bottom: 15,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 25,
  },
  actionCard: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  actionText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: width / 2.3,
    backgroundColor: '#fafafa',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
  },
  cardImg: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '600',
  },
  promoContainer: {
    position: 'relative',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  promoImg: {
    width: '100%',
    height: 180,
    borderRadius: 15,
  },
  promoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  promoBtn: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 20,
  },
  promoBtnText: {
    fontWeight: 'bold',
    color: '#222',
  },
  logoutBtn: {
    alignSelf: 'center',
    marginVertical: 30,
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
