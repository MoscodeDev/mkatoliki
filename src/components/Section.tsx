import React from 'react';
import { Text, View } from 'react-native';
import styles from '../app/styles/styles';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <View>
    <Text style={styles.header}>{title}</Text>
    <View>{children}</View>
  </View>
);

export default Section