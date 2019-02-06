// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import type { AppState } from '@reducers';
import { GetUsersCreators } from '@reducers/getUsers';
import TextInput from '@components/elements/TextInput';
import Touchable from '@components/elements/Touchable';
import styles from '@components/screens/HomeScreenStyles';
import type { StateType as GetUsersType } from '@reducers/getUsers';
import type { UserType } from '../../api';

type Props = {
  GetUsers: GetUsersType,
  GetUsersRequest: Function,
};

type State = {
  filteredUsers: Array<UserType>,
  isGetUsersFetching: boolean,
  userInput: string,
  users: Array<UserType>,
};

class HomeScreen extends React.Component<Props, State> {
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const nextState = { isGetUsersFetching: nextProps.GetUsers.fetching };

    if (prevState.isGetUsersFetching && !nextProps.GetUsers.fetching && nextProps.GetUsers.success) {
      const newUsers = [...prevState.users, ...nextProps.GetUsers.users];
      Object.assign(nextState, {
        filteredUsers: newUsers,
        users: newUsers,
      });
    }

    return nextState;
  }

  constructor(props) {
    super(props);

    this.state = {
      filteredUsers: [],
      isGetUsersFetching: false,
      userInput: '',
      users: [],
    };

    this.textInput = null;
  }

  componentDidMount() {
    this.fetchMoreUsers();
  }

  onChangeUserInput = (userInput: string) => {
    let filteredUsers = this.state.users;

    if (userInput) {
      filteredUsers = this.state.users.filter(user =>
        user.username.toLowerCase().includes(userInput.toLowerCase()) ||
        user.job.toLowerCase().includes(userInput.toLowerCase()) ||
        user.company.toLowerCase().includes(userInput.toLowerCase()) ||
        user.phone.toLowerCase().includes(userInput.toLowerCase()) ||
        user.email.toLowerCase().includes(userInput.toLowerCase())
      );
    }

    this.setState({ filteredUsers, userInput });
  };

  onClickOnUser = (user) => {
    this.props.navigation.navigate('User', { user })
  };

  fetchMoreUsers = () => {
    if (!this.state.userInput && !!this.textInput && !this.textInput.isFocused()) {
      this.props.GetUsersRequest();
    }
  };

  renderUser = ({ item }) => (
    <Touchable onPress={() => this.onClickOnUser(item)} style={styles.itemContainer}>
      <View style={styles.itemAvatarContainer}>
        {!item.avatar ? (
          <View style={styles.itemAvatar} />
        ) : (
          <Image source={{ uri: item.avatar }} style={styles.itemAvatar} />
        )}
      </View>
      <View style={styles.itemText}>
        <Text style={styles.itemName}>{item.username}</Text>
        <Text style={styles.itemJob}>{item.job}</Text>
      </View>
    </Touchable>
  );

  render() {
    const { filteredUsers, isGetUsersFetching, userInput } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={filteredUsers}
          extraData={isGetUsersFetching}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyboardDismissMode='on-drag'
          keyExtractor={item => item.uuid}
          ListEmptyComponent={(
            <ActivityIndicator />
          )}
          ListHeaderComponent={(
            <TextInput
              ref={textInput => this.textInput = textInput}
              blurOnSubmit
              onChangeText={this.onChangeUserInput}
              placeholder="Search..."
              returnKeyType="search"
              value={userInput}
            />
          )}
          onEndReached={this.fetchMoreUsers}
          renderItem={this.renderUser}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  GetUsers: state.GetUsers,
});

const mapDispatchToProps = dispatch => ({
  GetUsersRequest: () => dispatch(GetUsersCreators.GetUsersRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
