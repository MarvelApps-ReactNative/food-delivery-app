import React from 'react';
import {Alert, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native-animatable';
import {HeaderLogo} from '../../common';
import {constants} from '../../constants';
import styles from './styles';

interface OTPScreen {
  navigation: any;
}

const OTPScreen = (props: OTPScreen) => {
  const {navigation} = props;
  let textInputs = [];
  for (let index = 0; index <= 4; index++) {
    textInputs.push(
      <TextInput key={index} maxLength={1} style={styles.inputText} />,
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.colorContainer}>
        <HeaderLogo />

        <Text style={styles.OTPText}>{constants.keywords.OTP}</Text>
        <Text style={styles.AuthenticationText}>
          {constants.keywords.AUTHENTICATION}
        </Text>

        <View style={styles.inputContainer}>{textInputs}</View>

        <View style={styles.TextContainer}>
          <Text style={styles.AuthenticationText}>
            {constants.keywords.CODE}
          </Text>
          <TouchableOpacity>
            <Text style={styles.ResendText}> {constants.keywords.RESEND}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={styles.ContinueButton}
            onPress={() => navigation.navigate('Drawer')}>
            <Text style={styles.ContinueButtonText}>
              {constants.keywords.CONTINUE}
            </Text>
          </TouchableOpacity>

          <Text style={styles.AuthenticationText}>
            {constants.keywords.BY_SIGINING_UP}
          </Text>
          <TouchableOpacity
            onPress={() => Alert.alert(constants.keywords.ALERT_MESSAGE)}>
            <Text style={styles.TermsText}>{constants.keywords.TERM}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPScreen;
