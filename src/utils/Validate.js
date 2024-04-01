export const checkValidateData = (email,password,name) =>{
const isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)
const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)

if(!isEmailValid) return "Not a Valid E-mail "
if(!isPasswordValid) return "Not a Valid Password"
if(!isNameValid) return "Not a Valid Name "

} 