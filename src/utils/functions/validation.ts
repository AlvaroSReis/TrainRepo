import {
  ValidInputsLogin,
  ValidInputsRequestAccount,
  ValidInputsType
} from '../interfaces/Inputs'

export const isValidInputsRequestAccount = (inputs: Partial<ValidInputsRequestAccount>): boolean => {
  return !!(
    inputs.name &&
    inputs.email &&
    inputs.image &&
    inputs.password &&
    inputs.confirmPassword
  )
}

export const isValidInputsLogin = (inputs: Partial<ValidInputsLogin>): boolean => {
  return !!(
    inputs.email &&
    inputs.password
  )
}

export const isValidInputsType = (inputs: Partial<ValidInputsType>): boolean => {
  return !!(
    inputs.name &&
    inputs.type
  )
}

export const isValidPassword = (password: string, confirmPassword: string): boolean => {
  if (password !== confirmPassword) return false

  return true
}
