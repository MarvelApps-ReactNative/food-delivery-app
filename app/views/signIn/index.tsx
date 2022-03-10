import React from 'react';
import {SafeAreaView, ScrollView, Switch, TouchableOpacity} from 'react-native';
import {Image, Text, View} from 'react-native-animatable';
import {HeaderLogo, TextInputs, TextPasswords} from '../../common';
import {COLORS, constants, icons} from '../../constants';
import styles from './styles';

interface SignIn {
  navigation: any;
  isEnabled: boolean;
  toggleSwitch: () => void;
  email: string;
  password: string;
  invalidEmail: boolean;
  invalidPassword: boolean;
  setEmail: (text: string) => void;
  setPassword: (text: string) => void;
  Submit: () => void;
}

const SignIn = (props: SignIn) => {
  const {
    navigation,
    isEnabled,
    toggleSwitch,
    email,
    password,
    invalidEmail,
    invalidPassword,
    setEmail,
    setPassword,
    Submit,
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderLogo />
      <ScrollView
        style={styles.marginContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.SigninText}>{constants.keywords.LETS_SIGN_IN}</Text>
        <Text style={styles.WelcomeText}>{constants.keywords.WELCOME}</Text>

        <View style={styles.ScrollContainer}>
          <TextInputs
            name="Email"
            Switch={!invalidEmail}
            onchangeText={email => setEmail(email)}
            placeholder={''}
            placeholderTextColor={undefined}
          />

          <TextPasswords
            name="Password"
            Switch={!invalidPassword}
            onchangeText={password => setPassword(password)}
          />

          <View style={styles.SwitchContainer}>
            <View style={styles.SwitchDirection}>
              <Switch
                trackColor={{false: COLORS.lightGray1, true: COLORS.primary}}
                thumbColor={!isEnabled ? COLORS.gray2 : COLORS.white}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={styles.ForgotText}>{constants.keywords.SAVE}</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Password')}>
              <Text style={styles.ForgotText}>
                {constants.keywords.PASSWORD}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.SignInButton}
            onPress={() => Submit()}>
            <Text style={styles.SignInButtonText}>
              {constants.keywords.SIGN_IN}
            </Text>
          </TouchableOpacity>

          <View style={styles.TextContainer}>
            <Text style={styles.WelcomeText}>
              {constants.keywords.ACCOUNT}{' '}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.SignUpText}>{constants.keywords.SIGN_UP}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.facebookButton}>
            <Image source={icons.fb} style={styles.icons} />
            <Text style={styles.facebookButtonText}>
              {constants.keywords.FACEBOOK}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.GoogleButton}>
            <Image source={icons.google} style={styles.icons} />
            <Text style={styles.GoogleButtonText}>
              {constants.keywords.GOOGLE}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
