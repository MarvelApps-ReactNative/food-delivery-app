import React from 'react';
import SuccessScreen from '../views/success';

interface SuccessProps {
  navigation: any;
}

const SuccessModel = (props: SuccessProps) => {
  const {navigation} = props;
  return <SuccessScreen navigation={navigation} />;
};

export default SuccessModel;
