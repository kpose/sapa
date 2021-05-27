import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {hp, wp} from '~utils';

type WaveProps = {
  customStyles: any;
  customHeight: any;
  customTop: any;
  customBgColor: any;
  customWavePattern: any;
};

const Wave = (props: WaveProps) => {
  return (
    <View style={props.customStyles}>
      <View
        style={{
          backgroundColor: props.customBgColor,
          height: props.customHeight,
          marginBottom: hp(4.2),
        }}>
        <Svg
          height="60%"
          width={wp(100)}
          viewBox="0 0 1440 320"
          style={{
            //position: 'absolute',
            top: props.customTop,
          }}>
          <Path fill={props.customBgColor} d={props.customWavePattern} />
        </Svg>
      </View>
    </View>
  );
};

export default Wave;
