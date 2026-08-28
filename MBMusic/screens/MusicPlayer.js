import React, { useState } from 'react'
import 
{ FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimesions
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import songs from '../model/data';
import colors from '../theme/colors';

export default function MusicPlayer() {
  const { width } = useWindowDimesions
  const [selectedIndex, setSelectedINDEX] = useState

const currentSong = songs[selectedIndex];
const artworkSize = Math.min(width-40, 380);

function handleMomentEnd(event) {
  const offset = event.nativeEvent.contentOffset.x;
  const index = Math.round(offset / width);
  setSelectedINDEX(index);
}

function renderArtwork({ item }) {
  return (
    <View style={[styles.artworkPage, {width}]}>
      <Image
        source={ item.artwork } 
        style={[
            styles.artworkSize,
            { height: artworkSize, width: artworkSize }
        ]} 
        />
      </View>
    );
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>TOCANDO AGORA</Text>
        <Text style={styles.counter}>
          {selectedIndex + 1} de {songs.length}
        </Text>
      </View>

      <FlatList
        data={songs}
        horizontal
        pagingEnabled
        renderItem={renderArtwork}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicar={false}
        onMomentumScrollEnd={handleMomentEnd}
        />

        <View style={styles.metadata}>
          <Text style={styles.songTitle}>{currentSong.title}</Text>
           <Text style={styles.songArtist}>{currentSong.artist}</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    height: 70,
    paddingHorizontal: 20,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.8,
  },
  title: {
    marginTop: 8,
    color: colors.text,
    fontSize: 32,
    fontWeight: '800'
  },
  description: {
    marginTop: 10,
    color: colors.textSecondary,
    fontSize: 15
  },
  counter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  artworkPage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  artwork: {
    borderRadius: 24,
  },
  metadata: {
    minHeight: 110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorinzontal: 24,
  },
  songTitle: {
    color: colors.text,
    fontSize: 23,
    fontWeight: '800',
    textAlign: 'center',
  },
  songArtist: {
    marginTop: 6,
    color: colors.textSecondary,
    fontSize: 14,
  },
})