import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {constants, images} from '../../constants';
import styles from './styles';

interface SuccessProps {
  navigation: any;
}

const SuccessScreen = (props: SuccessProps) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marginContainer}>
        <View style={styles.midContainer}>
          <Image source={images.success} style={styles.Images} />
          <Text style={styles.congratulationText}>
            {constants.keywords.CONGRATS}
          </Text>
          <Text style={styles.text}>{constants.keywords.PAYMENT_WAS}</Text>
        </View>
        <TouchableOpacity
          style={styles.DoneButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.DoneButtonText}>{constants.keywords.DONE}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;
