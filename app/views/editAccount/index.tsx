import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HeaderComponents, TextInputs} from '../../common';
import {constants, icons} from '../../constants';
import styles from './styles';

interface EditProps {
  navigation: any;
}

const EditAccountScreen = (props: EditProps) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.MY_ACCOUNT}
        RightImage={undefined}
        RightImageNavigate={undefined}
        navigation={navigation}
      />
      <View style={styles.marginContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.RadiusContainer}>
            <View style={styles.textInputContainer}>
              <TextInputs
                name="Full Name"
                onchangeText={() => false}
                Switch={false}
                placeholder={constants.keywords.NAME}
                placeholderTextColor={'black'}
              />
              <TextInputs
                name="Phone Number"
                onchangeText={() => false}
                Switch={false}
                placeholder={constants.keywords.NUMBER}
                placeholderTextColor={'black'}
              />
              <TextInputs
                name="ID Card"
                onchangeText={() => false}
                Switch={false}
                placeholder={constants.keywords.ID_CARD}
                placeholderTextColor={'black'}
              />
              <TextInputs
                name="Date of Birth"
                onchangeText={() => false}
                Switch={false}
                placeholder={constants.keywords.DOB}
                placeholderTextColor={'black'}
              />
              <TextInputs
                name="Gender"
                onchangeText={() => false}
                Switch={false}
                placeholder={constants.keywords.GENDER}
                placeholderTextColor={'black'}
              />
              <TextInputs
                name="Email"
                onchangeText={() => false}
                Switch={false}
                placeholder={constants.keywords.EMAIL}
                placeholderTextColor={'black'}
              />
              <TextInputs
                name="Address"
                onchangeText={() => false}
                Switch={false}
                placeholder={constants.keywords.ADDRESS_TEXT}
                placeholderTextColor={'black'}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.SaveButton}>
          <Text style={styles.SaveButtonText}>{constants.keywords.SAVE}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditAccountScreen;
