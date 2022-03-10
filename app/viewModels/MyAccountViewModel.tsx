import React from 'react';
import MyAccountScreen from '../views/myAccount';

interface AcccountProps {
  navigation: any;
}

const MyAccountModel = (props: AcccountProps) => {
  const {navigation} = props;
  return <MyAccountScreen navigation={navigation} />;
};

export default MyAccountModel;
