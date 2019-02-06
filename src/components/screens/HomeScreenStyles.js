// @flow
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  itemAvatar: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    width: 40,
  },

  itemAvatarContainer: {
    alignItems: 'center',
    backgroundColor: '#909AA3',
    borderRadius: 21,
    height: 42,
    justifyContent: 'center',
    marginRight: 12,
    width: 42,
  },

  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
  },

  itemJob: {
    color: '#909AA3',
    fontSize: 13,
  },

  itemName: {
    color: '#5A646D',
    fontSize: 15,
  },

  itemText: {
    justifyContent: 'space-between',
    paddingVertical: 3,
  },

  separator: {
    alignSelf: 'center',
    backgroundColor: '#909AA3',
    height: 1,
    width: '95%',
  },
});
