import React from 'react';
import NotificationTabScreen from '../views/notificationTab';

interface Props {
  navigation: any;
}

const NotificationTabModel = (props: Props) => {
  const {navigation} = props;
  return <NotificationTabScreen navigation={navigation} />;
};

export default NotificationTabModel;
