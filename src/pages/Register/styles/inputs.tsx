import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#afafaf',
    overflow: 'hidden'
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

  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%'
  },

  btnCancel: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#eb453d'
  },

  btnSend: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7bec8d'
  },

  btnText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 2,
    color: '#fff'
  }
})
