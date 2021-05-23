import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  social: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginBottom: 30
  },

  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#000000',
    fontSize: 17,
    marginTop: 10,
    marginBottom: 30,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25
  },

  label: {
    width: '90%',
    paddingLeft: 25,
    marginBottom: -10
  },

  labelText: {
    opacity: 0.5
  },

  btnLogin: {
    width: '80%',
    backgroundColor: '#7BEC8D',
    height: 45,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25
  },

  btnForgetPassword: {
    width: '60%',
    backgroundColor: '#7BEC8D',
    height: 35,
    marginBottom: 27,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25
  },

  btnSocial: {
    backgroundColor: '#7BEC8D',
    marginBottom: 27,
    marginTop: 25,
    width: 60,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },

  loginText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15.75,
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 20, // usar styles components
    color: '#fff'
  },

  forgetPasswordText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 13,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 3, // usar styles components
    color: '#fff'
  }
})

export { styles }
