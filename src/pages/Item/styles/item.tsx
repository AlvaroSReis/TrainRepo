import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

  buttons: {
    width: '50%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.25,
    borderLeftWidth: 0.25
  },

  btnText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15.75,
    lineHeight: 18,
    letterSpacing: 2,
    color: '#7BEC8D'
  },

  components: {
    flex: 1,
    padding: 5
  },

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  containerButtons: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 0.5,
    alignItems: 'center'
  }

})
