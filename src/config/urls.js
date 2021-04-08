export const API_BASE_URL="https://api.talktier.com";

export const getApiUrl=(endpoint)=>`${API_BASE_URL}${endpoint}`

export const LOGIN_API=getApiUrl("/user/loginUser");
export const SIGNUP_API = getApiUrl("/user/registerUser");
export const PHONE_API =  getApiUrl('/user/v1/loginSignupOtp');
export const OTPVERIFICATION_API = getApiUrl('/user/v1/verifyOtp');
export const SCROLL_API=getApiUrl('/user/v1/getUserSearch')
export const SEARCH_API=getApiUrl('/user/v1/getUserNearMe')
export const CONVERSATION_API= getApiUrl('/user/v1/getAllConversations')
export const OneToOneConversation_API=getApiUrl(' /user/v1/getConversationMessages')