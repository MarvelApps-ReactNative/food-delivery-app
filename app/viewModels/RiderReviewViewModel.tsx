import React from 'react';
import RiderReviewScreen from '../views/riderReview';

interface RiderProps {
  navigation: any;
}

const RiderReviewModel = (props: RiderProps) => {
  const {navigation} = props;
  return <RiderReviewScreen navigation={navigation} />;
};

export default RiderReviewModel;
