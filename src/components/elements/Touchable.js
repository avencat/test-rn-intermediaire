// @flow
import * as React from 'react';
import {Platform, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

type Props = {
  activeOpacity?: number,
  children: React.Node,
  onPress: Function,
  style?: ViewStyleProp,
};

export default class extends React.PureComponent<Props> {
  static defaultProps = {
    activeOpacity: 0.3,
    style: null,
  };

  render() {
    const {
      activeOpacity, children, onPress, style,
    } = this.props;
    const Touchable = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;

    return (
      Platform.select({
        ios: () => (
          <Touchable activeOpacity={activeOpacity} onPress={onPress} style={style}>
            {children}
          </Touchable>
        ),
        android: () => (
          <Touchable onPress={onPress}>
            <View style={Platform.OS === 'android' ? style : null}>
              {children}
            </View>
          </Touchable>
        ),
      })()
    );
  }
}
