import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackHeader} from '../../common';
import {COLORS, constants, dummyData, icons, images} from '../../constants';
import SizeRenderItem from './SizesRenderItem';
import styles from './styles';

interface DetailProps {
  navigation: any;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const DetailScreen = (props: DetailProps) => {
  const {navigation, counter, setCounter, size, setSize} = props;
  return (
    <SafeAreaView style={styles.backcontainer}>
      <BackHeader
        navigation={navigation}
        HeaderText={constants.keywords.DETAILS}
        SecondImage={icons.cart}
      />
      <ScrollView
        style={{marginHorizontal: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.FoodContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.caloriesContainer}>
              <Image source={icons.calories} style={styles.caloriesIcon} />
              <Text style={styles.caloriesText}>
                78 {constants.keywords.CALORIES}
              </Text>
            </View>
            <Image source={icons.love} style={styles.loveIcon} />
          </View>
          <Image source={images.hamburger} style={styles.burgerIcon} />
        </View>
        <Text style={styles.foodNameText}>{constants.keywords.HAMBURGER}</Text>
        <Text style={styles.burgerText}>
          {dummyData.vegBiryani.description}
        </Text>
        <View style={styles.midContainer}>
          <View style={styles.ratingContainer}>
            <Image source={icons.star} style={styles.starIcon} />
            <Text style={styles.starText}>{constants.keywords.RATING}</Text>
          </View>
          <View style={styles.clockContainer}>
            <Image source={icons.clock} style={styles.ClockIcon} />
            <Text style={styles.minText}>30 Mins</Text>
            <Image source={icons.dollar} style={styles.ClockIcon} />
            <Text style={styles.minText}>
              {constants.keywords.FREE_SHIPPING}
            </Text>
          </View>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeText}>{constants.keywords.SIZES}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyData.sizes}
            extraData={dummyData.sizes}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item, index}) => (
              <SizeRenderItem
                item={item}
                index={index}
                size={size}
                setSize={setSize}
              />
            )}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image source={images.profile} style={styles.profileIcon} />
          <View style={styles.NameContainer}>
            <Text style={styles.nameText}>{constants.keywords.NAME}</Text>
            <Text style={styles.caloriesText}>{constants.keywords.KM}</Text>
          </View>
          {constants.ratings.map((_, i) => {
            return (
              <Image key={i} source={icons.star} style={styles.goldStarIcon} />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.buynowContainer}>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => setCounter(counter - 1)}>
            <Image
              source={icons.minus}
              style={[styles.CounterIcons, {tintColor: COLORS.gray}]}
            />
          </TouchableOpacity>
          <Text style={styles.counterText}>{counter}</Text>
          <TouchableOpacity onPress={() => setCounter(counter + 1)}>
            <Image source={icons.plus} style={styles.CounterIcons} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => navigation.navigate('MyCart')}>
          <Text style={styles.buyNowText}>{constants.keywords.BUY_NOW}</Text>
          <Text style={styles.buyNowText}>{dummyData.hamburger.price}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
