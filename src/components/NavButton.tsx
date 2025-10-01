import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import type { LinkProps } from 'expo-router';

type NavButtonProps = {
  text: string;
  to: LinkProps['href'];
};

const NavButton = ({ text, to }: NavButtonProps) => {
    const router = useRouter()
  return (
    <TouchableOpacity onPress={()=> router.push(to)} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default NavButton

const styles = StyleSheet.create({
    container:{
         width: "100%",
            backgroundColor: "#ddd",
            padding: 10,
            borderRadius: 5,
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#5535e3ff',
    }
})