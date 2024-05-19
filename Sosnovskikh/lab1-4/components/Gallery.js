import { View, StyleSheet, Image } from 'react-native';

export default function Gallery() {
  return (
    <View style={styles.imageContainer}>
          <Image source={{
          uri: 'https://vip-1gl.ru/vipberrrt/10423beautiful_scenery_wallpaper.jpg',
        }} style={styles.images}/>
        <Image source={{
          uri: 'https://kartin.papik.pro/uploads/posts/2023-07/1688404965_kartin-papik-pro-p-kartinki-leta-v-visokom-kachestve-17.jpg',
        }} style={styles.images} height='100'/>
        <Image source={{
          uri: 'https://mobimg.b-cdn.net/v3/fetch/60/60136e84e7fd3ae2eeb153747c92d786.jpeg',
        }} style={styles.images}/>
        <Image source={{
          uri: 'https://get.wallhere.com/photo/2560x1600-px-coast-1220962.jpg',
        }} style={styles.images} height='100'/>
        <Image source={{
          uri: 'https://gas-kvas.com/uploads/posts/2023-02/1675495557_gas-kvas-com-p-luchshie-kartinki-dlya-fonovogo-risunka-ra-7.jpg',
        }} style={styles.images}/>
        <Image source={{
          uri: 'https://img.razrisyika.ru/kart/137/544001-fotografiy-v-horoshem-kachestve-27.jpg',
        }} style={styles.images} height='100'/>
      </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  images: {
    width: 160,
    height: 160,    
    borderRadius: 5,
    objectFit: 'fill',
    marginTop: 20,
    marginLeft: 10,
    padding: 0,
    justifyContent: 'space-between',
  }
});
