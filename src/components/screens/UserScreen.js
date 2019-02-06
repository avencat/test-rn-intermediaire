// @flow
import * as React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from '@components/screens/UserScreenStyles';
import type { UserType } from '../../api';

type Props = {
  user: UserType,
};

export default class UserScreen extends React.PureComponent<Props> {
  render() {
    const {
      key,
      uuid,
      username,
      bio,
      avatar,
      job,
      company,
      phone,
      email,
    } = this.props.navigation.getParam('user');

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
          </View>
          <Text>
            {`username: ${username}\n`}
          </Text>
          <Text>
            {`job: ${job}\n`}
          </Text>
          <Text>
            {`key: ${key}\n`}
          </Text>
          <Text>
            {`uuid: ${uuid}\n`}
          </Text>
          <Text>
            {`company: ${company}\n`}
          </Text>
          <Text>
            {`phone: ${phone}\n`}
          </Text>
          <Text>
            {`email: ${email}\n`}
          </Text>
          <Text>
            {`bio: ${bio}\n`}
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
