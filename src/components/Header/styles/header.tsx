import { StyleSheet } from 'react-native'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 57,
    marginTop: 50
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 27,
    lineHeight: 40,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center'
  },

  category: {
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 27,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
  }
})

export { styles }
