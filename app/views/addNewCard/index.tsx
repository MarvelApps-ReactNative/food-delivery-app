import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {HeaderComponents} from '../../common';
import {constants, icons, images} from '../../constants';
import styles from './styles';

interface NewCardProps {
  navigation: any;
}

const AddNewCardScreen = (props: NewCardProps) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.ADD_NEW_CARD}
        RightImage={undefined}
        RightImageNavigate={false}
        navigation={navigation}
      />
      <View style={styles.marginContainer}>
        <ImageBackground
          source={images.card}
          style={styles.cardImage}
          imageStyle={{borderRadius: 12}}>
          <Image source={icons.apple} style={styles.appleIcon} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardNameText}>{constants.keywords.NAME}</Text>
            <View style={styles.innerCardTextContainer}>
              <Text style={styles.cardText}>{constants.keywords.CARD_NO}</Text>
              <Text style={styles.cardText}>{constants.keywords.DATE}</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={{paddingTop: 30}}>
          <Text style={styles.text}>{constants.keywords.CARD_NUMBER_TEXT}</Text>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.inputText}
              keyboardType="number-pad"
              maxLength={16}
            />
            <Image source={icons.correct} style={styles.correctIcon} />
          </View>

          <Text style={styles.text}>{constants.keywords.CARD_HOLDER_NAME}</Text>
          <View style={styles.InputContainer}>
            <TextInput style={styles.inputText} maxLength={25} />
            <Image source={icons.correct} style={styles.correctIcon} />
          </View>

          <View style={styles.midContainer}>
            <View>
              <Text style={styles.text}>{constants.keywords.EXPIRY_DATE}</Text>
              <View style={styles.EmailInputContainer}>
                <TextInput
                  style={styles.EmailInputText}
                  keyboardType="name-phone-pad"
                  maxLength={5}
                />
                <Image source={icons.correct} style={styles.correctIcon} />
              </View>
            </View>

            <View>
              <Text style={styles.text}>{constants.keywords.CVV}</Text>
              <View style={styles.EmailInputContainer}>
                <TextInput
                  style={styles.EmailInputText}
                  keyboardType="number-pad"
                  maxLength={3}
                  secureTextEntry
                />
                <Image source={icons.correct} style={styles.correctIcon} />
              </View>
            </View>
          </View>
          <View style={styles.rememberContainer}>
            <TouchableOpacity>
              <Image source={icons.check_on} style={styles.checkonIcon} />
            </TouchableOpacity>
            <Text style={styles.rememberText}>
              {constants.keywords.REMEMBER}
            </Text>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={styles.AddButton}
            onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.AddButtonText}>
              {constants.keywords.ADD_CARD}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNewCardScreen;
