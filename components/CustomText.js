import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';


export default CustomText = ({children, style}) => {
    const [loaded] = useFonts({
        'ScopeOne-Regular': require('../assets/fonts/ScopeOne-Regular.ttf')
      });
    
      if (!loaded) {
        return null;
      }

    return (
        <Text style={{fontFamily: 'ScopeOne-Regular', ...style}}>
            {children}
        </Text>
    );
}