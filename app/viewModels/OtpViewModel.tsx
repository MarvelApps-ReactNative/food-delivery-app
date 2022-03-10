import React, {useState} from 'react';
import OTPScreen from '../views/otp';

interface OTPModel {
  navigation: any;
}

const OTPModel = (props: OTPModel) => {
  const {navigation} = props;
  return <OTPScreen navigation={navigation} />;
};

export default OTPModel;
