export const API_BASE_URL="http://192.168.99.194:8002";

export const getApiUrl=(endpoint)=>`${API_BASE_URL}${endpoint}`

export const LOGIN_API=getApiUrl("/user/loginUser");
export const SIGNUP_API = getApiUrl("/user/registerUser");



export const PHONE_API =  'https://api.talktier.com/user/v1/loginSignupOtp';
export const OTPVERIFICATION_API = 'https://api.talktier.com/user/v1/verifyOtp';
export const SCROLL_API='https://api.talktier.com/user/v1/getUserSearch'
export const SEARCH_API='https://api.talktier.com/user/v1/getUserNearMe'
