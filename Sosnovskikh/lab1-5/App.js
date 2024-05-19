import { StyleSheet, View, SafeAreaView, Text, Animated, ScrollView, useWindowDimensions, ImageBackground } from 'react-native';
import React, { useRef } from 'react';
const images = [
  'https://www.sunhome.ru/i/wallpapers/210/voronie-loshadi.orig.jpg',
  'https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg','https://avatars.mds.yandex.net/i?id=43f1a029d98aef8cb0091dba04947086_l-5292126-images-thumbs&n=27&h=480&w=480','https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg',
  'https://www.iphones.ru/wp-content/uploads/2023/12/22CE84B4-2036-44D7-A8AF-57EFAF727948.jpeg'
];

export default function App (){
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();//функция для получения ширины окна приложения, при изменении ориентации, автоматически обновляет все свои значения, так у нас всегда будет актуальное значение ширины девайса

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{ width: windowWidth, height: 250 }}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={styles.card} />
              </View>
            );
          })}
          {/* <Text>функция map проходит по массиву изображений и отрисовывает их на экране, изображения имеют фиксированную высоту и адаптивную ширину</Text> */}
        </ScrollView>
        <View style={styles.indicator}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.line, { width }]}
              />
            );
            {/* <Text>Компонент выше устанавливает стиль прокрутки (линии),
            а также показывает текущий элемент в прокрутке</Text> */}
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  scrollContainer: {
    height: 300
  },
  card: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center"
  },
  line: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: "black",
    marginHorizontal: 5
  },
  indicator: {
    flexDirection: "row",
    justifyContent: "center"
  }
});
