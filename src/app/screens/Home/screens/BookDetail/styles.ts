import { StyleSheet } from 'react-native';
import { white, secondaryBlue, lightBlue, textColor, green, shadow, grey } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightBlue
  },
  contentContainer: {
    backgroundColor: white,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: shadow,
    shadowOpacity: 0.2,
    shadowRadius: 0.8,
    shadowOffset: {
      height: 0.5,
      width: 0
    }
  },
  bookContentContainer: {
    flexShrink: 0
  },
  bookCommentsContainer: {
    flexShrink: 1
  },
  bookInfoContainer: {
    flexDirection: 'row',
    flexShrink: 1
  },
  image: {
    width: '27%',
    height: 110,
    backgroundColor: grey
  },
  buttonDefault: {
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    height: 45,
    justifyContent: 'center',
    marginTop: 10,
    borderColor: secondaryBlue,
    borderWidth: 2
  },
  buttonsView: {
    flexShrink: 1,
    justifyContent: 'flex-start'
  },
  textContainer: {
    flex: 1,
    flexGrow: 1,
    paddingLeft: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  buttonText: {
    fontWeight: 'bold',
    color: secondaryBlue
  },
  bookTitleText: {
    fontSize: 25,
    fontWeight: '700'
  },
  statusText: {
    color: green,
    fontSize: 20,
    fontWeight: '500'
  },
  bookInfoText: {
    color: textColor,
    fontSize: 16
  }
});
