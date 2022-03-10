import React from 'react';
import AddNewCardScreen from '../views/addNewCard';

interface AddNewCardProps {
  navigation: any;
}

const AddNewCardModel = (props: AddNewCardProps) => {
  const {navigation} = props;
  return <AddNewCardScreen navigation={navigation} />;
};

export default AddNewCardModel;
