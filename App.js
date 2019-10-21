import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCloud from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <StatusBar barStyle="dark-content" backgroundColor="#eee" />

        <View style={styles.header}>
          <Image source={require('./assets/google-logo.png')} style={styles.logo} />
          <Text style={styles.textHeader}>Diga "Ok Google"</Text>
          <Image source={require('./assets/mic.png')} style={styles.mic} />
          <Image source={require('./assets/foto.png')} style={styles.profile} />
        </View>

        <View style={styles.cardWeather}>
          <IconCloud name="cloud-sun" size={36} color="#e5e5e5" />
          <View >
            <Text style={styles.textWeather}>Içara 25º</Text>
            <Text style={styles.textWeather2}>Nublado</Text>
          </View>
          <View>
            <Text style={styles.textWeather}>17ºC / 25ºC</Text>
            <Text style={styles.textWeather2}>50% hoje</Text>
          </View>
            <Icon name="more-vert" size={20} color="grey" />
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.textTitleCard}>Brasileirão Série A</Text>
            <Text style={styles.time}>Ao vivo 15'</Text>
          </View>
          <View style={styles.cardTeam}>
            <Image source={require('./assets/corinthians.png')} style={styles.logoTeam} />
            <Text style={styles.textPlacar}>1     -     0</Text>
            <Image source={require('./assets/palmeiras.png')} style={styles.logoTeam} />
          </View>
          <View style={styles.cardNameTeam}>
            <Text style={styles.textNameTeam}>Corinthians</Text>
            <Text style={styles.textNameTeam}>Palmeiras</Text>
          </View>
          <View style={styles.separatorLine}></View>
          <View style={styles.cardNamePalyer}>
            <Text style={styles.textNamePalyer}>Vágner L. 5'</Text>
            <Image source={require('./assets/ball.png')} style={styles.imgBall} />
            <Icon name="more-vert" size={20} color="grey" />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.textTitleCard}>Premiere League</Text>
            <Text style={styles.timeEnded}>Encerrado</Text>
          </View>
          <View style={styles.cardTeam}>
            <Image source={require('./assets/liverpool.png')} style={styles.logoTeam} />
            <Text style={styles.textPlacar}>1     -     0</Text>
            <Image source={require('./assets/manchester-united.png')} style={styles.logoTeam} />
          </View>
          <View style={styles.cardNameTeam}>
            <Text style={styles.textNameTeam}>Liverpool</Text>
            <Text style={styles.textNameTeam}>Manchester</Text>
          </View>
          <View style={styles.separatorLine}></View>
          <View style={styles.cardNamePalyer}>
            <Text style={styles.textNamePalyer}>Firmino 15'</Text>
            <Image source={require('./assets/ball.png')} style={styles.imgBall} />
            <Icon name="more-vert" size={20} color="grey" />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.textTitleCard}>La Liga</Text>
            <Text style={styles.time}>Ao vivo 15'</Text>
          </View>
          <View style={styles.cardTeam}>
            <Image source={require('./assets/barcelona.png')} style={styles.logoTeam} />
            <Text style={styles.textPlacar}>1     -     0</Text>
            <Image source={require('./assets/real-madrid.png')} style={styles.logoTeam} />
          </View>
          <View style={styles.cardNameTeam}>
            <Text style={styles.textNameTeam}>Barcelona</Text>
            <Text style={styles.textNameTeam}>Real Madrid</Text>
          </View>
          <View style={styles.separatorLine}></View>
          <View style={styles.cardNamePalyer}>
            <Text style={styles.textNamePalyer}>Messi 5'</Text>
            <Image source={require('./assets/ball.png')} style={styles.imgBall} />
            <Icon name="more-vert" size={20} color="grey" />
          </View>
        </View>

        <View style={styles.scrollHorizontal}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardScroll}>
              <Image source={require('./assets/meetup.png')} style={styles.imageScroll}/>
              <Text style={styles.textScroll}>Notícias...</Text>
            </View>
            <View style={styles.cardScroll}>
              <Image source={require('./assets/meetup2.png')} style={styles.imageScroll}/>
              <Text style={styles.textScroll}>Notícias...</Text>
            </View>
            <View style={styles.cardScroll}>
              <Image source={require('./assets/meetup.png')} style={styles.imageScroll}/>
              <Text style={styles.textScroll}>Notícias...</Text>
            </View>
            <View style={styles.cardScroll}>
              <Image source={require('./assets/meetup2.png')} style={styles.imageScroll}/>
              <Text style={styles.textScroll}>Notícias...</Text>
            </View>
            <View style={styles.cardScroll}>
              <Image source={require('./assets/meetup.png')} style={styles.imageScroll}/>
              <Text style={styles.textScroll}>Notícias...</Text>
            </View>
            <View style={styles.cardScroll}>
              <Image source={require('./assets/meetup2.png')} style={styles.imageScroll}/>
              <Text style={styles.textScroll}>Notícias...</Text>
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginTop: 20,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  textHeader: {
    fontSize: 16,
    color: '#aaa'
  },
  logo: {
    height: 32,
    width: 32,
  },
  mic: {
    height: 26,
    width: 26,
    resizeMode: 'contain'
  },
  profile: {
    height: 32,
    width: 32,
    borderRadius: 21,
  },

  // clima
  cardWeather: {
    marginTop: 15,
    height: 70,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textWeather: {
    marginTop: 5,
    fontSize: 14,
    color: '#666'
  },
  textWeather2: {
    marginTop: 5,
    fontSize: 13,
    color: '#999'
  },

  // cards
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 200,
    marginTop: 15,
    padding: 20,
    justifyContent: 'space-between'
  },
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textTitleCard: {
    fontSize: 14,
    color: '#666',
  },
  time: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'green',
    marginRight: 10,
  },
  timeEnded: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'grey',
    marginRight: 10,
  },
  cardTeam: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textPlacar: {
    fontSize: 26,
    color: '#333',
  },
  logoTeam: {
    height: 50,
    width: 50,
  },
  cardNameTeam: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textNameTeam: {
    fontSize: 16,
    color: '#444',
  },
  separatorLine: {
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd'
  },
  cardNamePalyer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textNamePalyer: {
    fontSize: 13,
    color: '#666'
  },
  imgBall: {
    marginLeft: -50,
    height: 18,
    width: 18,
  },

  // scrollHorizontal
  scrollHorizontal: {
    marginTop: 15,
    marginBottom: 20,
  },
  cardScroll: {
    backgroundColor: '#fff',
    height: 130,
    width: 100,
    // borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 5,
    marginRight: 10,
  },
  imageScroll: {
    height: 100,
    width: 100,
    resizeMode: 'cover'
    // borderRadius: 5,
    // overflow: 'hidden',
  },
  textScroll: {
    marginTop: 5,
    fontSize: 12,
    color: '#999',
  },
  
});
