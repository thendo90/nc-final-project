import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#694fad',
    width: '100%',
  },
  image: {
    height: 150,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  username: {
    margin: 15,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  header: {
    flex: 1,

    width: '100%',
  },
  accountInfo: {
    width: '100%',
    flex: 1,
    backgroundColor: '#F1EEED',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  accountInfoHeader: {
    textAlign: 'center',
    margin: 15,
    color: '#694fad',
    fontWeight: 'bold',
    fontSize: 22,
    padding: 10,
  },
  accountInfoGrid: {
    flexDirection: 'column',
  },
  accountInfoGridTop: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 5,
  },

  accountInfoHeadings: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 18,
  },
  comments: {
    flex: 1,
    backgroundColor: '#F1EEED',
    width: '100%',
    alignContent: 'center',
  },
  signOutContainer: { backgroundColor: 'white' },
  signOutText: {},
  button: {
    backgroundColor: '#694fad',
    borderRadius: 10,
    fontWeight: '700',
    fontSize: 16,
    justifyContent: 'center',
    marginHorizontal: 5,
    height: 50,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color: '#F0EDF6',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;