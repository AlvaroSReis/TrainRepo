import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: '#000'
  },

  icon: {
    position: 'absolute',
    left: 10
  },

  title: {
    color: '#7bec8d',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15.75,
    lineHeight: 18,
    letterSpacing: 2
  }
})
