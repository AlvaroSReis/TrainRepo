import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    width: '32%',
    margin: 2
  },

  components: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5
  },

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  containerButtons: {
    overflow: 'hidden',
    width: '95%',
    height: 120,
    marginTop: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },

  rowButtons: {
    flexDirection: 'row'
  }

})
