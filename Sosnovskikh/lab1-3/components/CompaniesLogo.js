import { View, StyleSheet, Image } from 'react-native';

export default function CompaniesLogo() {
  return (
    <View style={styles.imageContainer}>
          <Image source={{
          uri: 'https://img.freepik.com/free-psd/colorful-unicorn-business-logo-psd-template-neon-text-effect-style_53876-114524.jpg',
        }} style={styles.images}/>
        <Image source={{
          uri: 'https://img.freepik.com/premium-vector/sphere-logo-yin-yang-circle-emblem-energy-protection-shield-finance-app-game-branding_177517-1561.jpg',
        }} style={styles.images} height='100'/>
        <Image source={{
          uri: 'https://img.freepik.com/free-psd/colorful-unicorn-business-logo-psd-template-neon-text-effect-style_53876-114524.jpg',
        }} style={styles.images}/>
        <Image source={{
          uri: 'https://img.freepik.com/premium-vector/sphere-logo-yin-yang-circle-emblem-energy-protection-shield-finance-app-game-branding_177517-1561.jpg',
        }} style={styles.images} height='100'/>
        <Image source={{
          uri: 'https://img.freepik.com/free-psd/colorful-unicorn-business-logo-psd-template-neon-text-effect-style_53876-114524.jpg',
        }} style={styles.images}/>
        <Image source={{
          uri: 'https://img.freepik.com/premium-vector/sphere-logo-yin-yang-circle-emblem-energy-protection-shield-finance-app-game-branding_177517-1561.jpg',
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
