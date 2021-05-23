import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 2.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    borderTopWidth: 0.5
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2.5,
    height: 80,
    width: 60,
    borderRadius: 10,
    backgroundColor: '#7BEC8D',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25
  },

  label: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 9,
    lineHeight: 10,
    letterSpacing: 0.5,
    color: '#fff'
  }
})
