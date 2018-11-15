export default {
  invalidJSON: 'invalid json response',
  insufficientBuyTokenBalance: 'insufficient buy token balance',
  insufficientSellTokenBalace: 'insufficient sell token balance',
  invalidAddress: 'invalid input argument (arg="_to", reason="invalid address", value=null, version=4.0.4)',
  cannotReadLowerCaseOfUndefined: "Cannot read property 'toLowerCase' of undefined"
}

export const errorMessages = {
  invalidJSON: 'invalid json response',
  ioTimeout: 'i/o timeout',
  insufficientBuyTokenBalance: 'insufficient buy token balance',
  insufficientSellTokenBalace: 'insufficient sell token balance',
  invalidAddressInputArgument: 'invalid input argument (arg="_to", reason="invalid address", value=null, version=4.0.4)',
  invalidValueInputArgument: 'invalid input argument (arg="_value", reason="invalid number value"',
  invalidDecimalValue: 'invalid decimal value (arg="value"',
  cannotReadLowerCaseOfUndefined: "Cannot read property 'toLowerCase' of undefined",
  gasRequiredExceedsAllowance: 'gas required exceeds allowance or always failing transaction',
  metamaskUserDeniedSignature: 'MetaMask Message Signature: User denied message signature.'
}


export const parseTransferEtherError = (error: Error) => {
  let errorMessage = error.message

  if (errorMessage.includes(errorMessages.invalidAddressInputArgument)) return 'Invalid Receiver Address'
  if (errorMessage.includes(errorMessages.cannotReadLowerCaseOfUndefined)) return 'Invalid Receiver Address'
  if (errorMessage.includes(errorMessages.invalidValueInputArgument)) return 'Invalid Transaction Value'
  if (errorMessage.includes(errorMessages.gasRequiredExceedsAllowawnce)) return 'Insufficient Balance'
  if (errorMessage.includes(errorMessages.invalidDecimalValue)) return 'Invalid Transaction Value'
  if (errorMessage.includes(errorMessages.metamaskUserDeniedSignature)) return 'Message signature denied'

  return errorMessage
}

export const parseTransferTokensError = (error: Error) => {
  let errorMessage = error.message

  if (errorMessage.includes(errorMessages.invalidAddressInputArgument)) return 'Invalid Receiver Address'
  if (errorMessage.includes(errorMessages.cannotReadLowerCaseOfUndefined)) return 'Invalid Receiver Address'
  if (errorMessage.includes(errorMessages.invalidValueInputArgument)) return 'Invalid Transaction Amount'
  if (errorMessage.includes(errorMessages.gasRequiredExceedsAllowance)) return 'Insufficient Balance'
  if (errorMessage.includes(errorMessages.invalidDecimalValue)) return 'Invalid Transaction Value'
  if (errorMessage.includes(errorMessages.metamaskUserDeniedSignature)) return 'Message signature denied'

  return errorMessage
}


export const parseNewOrderError = (error: Error) => {
  let errorMessage = error.message

  window.errorMessage = errorMessage

  if (errorMessage.includes(errorMessages.invalidJSON)) return 'Connection error'
  if (errorMessage.includes(errorMessages.ioTimeout)) return 'Connection was broken and re-opened. Please try again'
  if (errorMessage.includes(errorMessages.metamaskUserDeniedSignature)) return 'Message signature denied'


  return errorMessage
}

export const parseCancelOrderError = (error: Error) => {
  let errorMessage = error.message

  if (errorMessage.includes(errorMessages.invalidJSON)) return 'Connection error'
  if (errorMessage.includes(errorMessages.ioTimeout)) return 'Connection was broken and re-opened. Please try again'
  if (errorMessage.includes(errorMessages.metamaskUserDeniedSignature)) return 'Message signature denied'

  return errorMessage
}


export const parseRequestSignatureError = (error: Error) => {
  let errorMessage = error.message

  if (errorMessage.includes(errorMessages.metamaskUserDeniedSignature)) return 'Message signature denied'

  return errorMessage
}