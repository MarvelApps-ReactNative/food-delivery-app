import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, constants, icons} from '../../constants';
import styles from './styles';

interface FoodMenu {
  item: {
    id: number;
    name: string;
    description: string;
    categories: number;
    price: string;
    calories: number;
    isFavourite: boolean;
    rating: number;
    delivery_time: string;
    distance: number;
    pricing: number;
    image: any;
  };
  navigation: any;
}

const FoodMennuRenderItem = (props: FoodMenu) => {
  const {item, navigation} = props;
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.FoodContainer}
        onPress={() => navigation.navigate('Detail')}>
        <View style={styles.LoveContainer}>
          <View style={styles.caloriesContainer}>
            <Image source={icons.calories} style={styles.caloriesIcon} />
            <Text style={styles.caloriesText}>
              {item.calories} {constants.keywords.CALORIES}
            </Text>
          </View>
          <Image
            source={icons.love}
            style={[
              styles.LoveIcon,
              {tintColor: item.isFavourite ? COLORS.red : COLORS.gray},
            ]}
          />
        </View>
        <View style={styles.foodImageContainer}>
          <Image source={item.image} style={styles.foodsImages} />
        </View>
        <View style={styles.foodTextConatiner}>
          <Text style={styles.burgerText}>{item.name}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FoodMennuRenderItem;
