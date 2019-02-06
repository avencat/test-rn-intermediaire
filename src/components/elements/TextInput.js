// @flow
import * as React from 'react';
import { TextInput as OfficialTextInput, View, ActivityIndicator } from 'react-native';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import styles from './TextInputStyles';

type Props = {
  ...OfficialTextInput.propTypes,
  containerStyle?: ViewStyleProp,
  isLoading?: boolean,
};

export default class TextInput extends React.PureComponent<Props> {
  static defaultProps = {
    containerStyle: {},
    underlineColorAndroid: 'transparent',
    isLoading: false,
  };

  blur = () => this.textInput.blur();

  focus = () => this.textInput.focus();

  isFocused = () => this.textInput.isFocused();

  render() {
    const { containerStyle, isLoading } = this.props;

    return (
      <View style={[styles.container, containerStyle]}>
        <OfficialTextInput
          {...this.props}
          ref={(ref) => { this.textInput = ref; }}
          style={[styles.defaultTextInput, this.props.style]}
        />
        <ActivityIndicator size="small" animating={isLoading} />
      </View>
    );
  }
}
