import { StyleSheet } from 'react-native'

import { Poppins_400Regular } from '@expo-google-fonts/poppins'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  },

  btnRequestAccount: {
    width: '100%',
    height: 40,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7BEC8D',
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25
  },

  requestAccountText: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 15.75,
    lineHeight: 24,
    letterSpacing: 7,
    color: '#fff'
  }

})

export { styles }
