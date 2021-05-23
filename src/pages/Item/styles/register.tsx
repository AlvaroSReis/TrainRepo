import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7BEC8D',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 50,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25
  },

  btnText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: 10,
    color: '#fff'
  },

  container: {
    flex: 1
  },

  containerButton: {
    height: 80,
    alignItems: 'center'
  },

  inputs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    width: '95%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000000',
    fontSize: 17,
    marginTop: 10,
    marginBottom: 30,
    padding: 15
  },

  label: {
    width: '95%',
    paddingLeft: 15,
    marginBottom: -10
  },

  labelText: {
    opacity: 0.5
  }

})
