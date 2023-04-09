export const CONFIRM_PASSWORD = 'confirmPassword'
export const EMAIL = 'email'
export const FIRST_NAME = 'firstName'
export const LAST_NAME = 'lastName'
export const PASSWORD = 'password'
export const SEND_OFFER = 'sendOffer'

export interface IndexFormElements extends HTMLFormControlsCollection {
  [CONFIRM_PASSWORD]: HTMLInputElement
  [EMAIL]: HTMLInputElement
  [PASSWORD]: HTMLInputElement
}

export interface RegisterFormElements extends IndexFormElements {
  [FIRST_NAME]: HTMLInputElement
  [LAST_NAME]: HTMLInputElement
  [SEND_OFFER]: HTMLInputElement
}

export interface RegisterFormErrors {
  [CONFIRM_PASSWORD]?: string | null
  [EMAIL]?: string | null
  [FIRST_NAME]?: string | null
  [LAST_NAME]?: string | null
  [PASSWORD]?: string | null
}
