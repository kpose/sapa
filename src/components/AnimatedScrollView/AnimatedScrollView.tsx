import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useTabBar} from '~context/TabBarProvider';

let offsetY = 0;

const AnimatedScrollView = ({children, ...restProps}: any) => {
  const {setShowTabBar} = useTabBar();
  return (
    <ScrollView
      scrollEventThrottle={0}
      onScroll={({nativeEvent}) => {
        const newOffset = nativeEvent.contentOffset.y;
        if (newOffset <= 0) return setShowTabBar(true);
        offsetY < newOffset ? setShowTabBar(false) : setShowTabBar(true);
        offsetY = newOffset;
      }}
      {...restProps}>
      {children}
    </ScrollView>
  );
};

export default AnimatedScrollView;
