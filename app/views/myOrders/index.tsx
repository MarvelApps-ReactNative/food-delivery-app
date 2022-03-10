import React from 'react';
import {
  SafeAreaView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderComponents} from '../../common';
import {COLORS, constants, dummyData, icons} from '../../constants';
import RenderItems from './renderItem';
import styles from './styles';

interface OrderProps {
  navigation: any;
  select: boolean;
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyOrderScreen = (props: OrderProps) => {
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
        HeadingText={constants.keywords.MY_ORDERS}
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
              {constants.keywords.HISTORY}
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
              {constants.keywords.UPCOMING}
            </Text>
          </TouchableOpacity>
        </View>
        {select && (
          <View style={styles.SectionListContainer}>
            <SectionList
              showsVerticalScrollIndicator={false}
              sections={dummyData.My_Order_History}
              extraData={dummyData.My_Order_History}
              renderItem={({item, index}) => (
                <RenderItems
                  item={item}
                  select={true}
                  navigation={navigation}
                />
              )}
              renderSectionHeader={({section: {title}}) => (
                <Text style={styles.TitleText}>{title}</Text>
              )}
            />
          </View>
        )}
        {!select && (
          <View style={styles.SectionListContainer}>
            <SectionList
              showsVerticalScrollIndicator={false}
              sections={dummyData.My_Order_Upcoming}
              extraData={dummyData.My_Order_Upcoming}
              renderItem={({item, index}) => (
                <RenderItems
                  item={item}
                  select={true}
                  navigation={navigation}
                />
              )}
              renderSectionHeader={({section: {title}}) => (
                <Text
                  style={[styles.TitleText, {color: COLORS.transparentBlack7}]}>
                  {title}
                </Text>
              )}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MyOrderScreen;
