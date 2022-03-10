import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderComponents} from '../../common';
import {COLORS, constants, dummyData, icons, images} from '../../constants';
import Renderitems from './renderItem';
import styles from './styles';

interface RiderProps {
  navigation: any;
  select: boolean;
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyCouponScreen = (props: RiderProps) => {
  const {navigation, select, setSelect} = props;
  type state = {
    Profile: string;
  };
  const ProfileImage = useSelector<state>(state => state.Profile);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.MYCOUPON}
        RightImage={ProfileImage}
        RightImageNavigate={'MyAccount'}
        navigation={navigation}
      />
      <View style={styles.marginContainer}>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={[
              styles.Button,
              {backgroundColor: select ? COLORS.primary : COLORS.lightOrange2},
            ]}
            onPress={() => setSelect(true)}>
            <Text
              style={[
                styles.ButtonText,
                {color: select ? COLORS.white : COLORS.primary},
              ]}>
              {constants.keywords.AVAILABLE}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.Button,
              {backgroundColor: !select ? COLORS.primary : COLORS.lightOrange2},
            ]}
            onPress={() => setSelect(false)}>
            <Text
              style={[
                styles.ButtonText,
                {color: !select ? COLORS.white : COLORS.primary},
              ]}>
              {constants.keywords.USED}
            </Text>
          </TouchableOpacity>
        </View>
        {select && (
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={dummyData.available_coupon}
              extraData={dummyData.available_coupon}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item}) => <Renderitems item={item} />}
            />
          </View>
        )}
        {!select && (
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={dummyData.used_coupon}
              extraData={dummyData.used_coupon}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item}) => <Renderitems item={item} />}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MyCouponScreen;
