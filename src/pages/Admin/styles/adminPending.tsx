import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    margin: 2.5
  },

  containerButtons: {
    flexDirection: 'row',
    height: '100%',
    width: '50%'
  },

  btnName: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 0.5
  },

  btnInvalidar: {
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    backgroundColor: '#EB453D'
  },

  btnValidar: {
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    backgroundColor: '#7BEC8D'
  },

  btnText: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 2,
    color: '#fff'
  },

  name: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 2,
    color: '#4FA95D'
  }
})
