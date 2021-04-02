import store from '../store';
import {setUserData, apiPost, apiGet, clearUserData} from '../../utils/utils';
import types from '../types';
import {
  LOGIN_API,
  OTPVERIFICATION_API,
  PHONE_API,
  SIGNUP_API
} from '../../config/urls.js';

const {dispatch} = store;

export const saveUserData = (data) => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

const saveViewData = (data) => {
  dispatch({
    type: types.SAVE_VIEW_DATA,
    payload: data,
  });
};

export const updateInternetConnection = (data) => {
  dispatch({
    type: types.NO_INTERNET,
    payload: data,
  });
};

export const login = (data) => {
  console.log(data, 'the geiv ndart');
  return new Promise((resolve, reject) => {
    apiPost(LOGIN_API, data)
      .then((res) => {
        saveUserData(res.data);
        setUserData(res.data).then((suc) => {
          resolve(res);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const signUp = (data) => {
  console.log(data, 'the geiv ndart');
  return new Promise((resolve, reject) => {
    apiPost(SIGNUP_API, data)
      .then((res) => {
        saveUserData(res.data);
        setUserData(res.data).then((suc) => {
          resolve(res);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });

};

export const logoutUsingPhone=()=>{
  
    clearUserData()
      dispatch({
        type:types.LOGOUT,
        payload:undefined
      })
}

export const loginUsingPhone=(data)=>{
  return new Promise((resolve, reject)=>{
    apiPost(PHONE_API, data).then((res)=>{

      saveUserData(data);
      setUserData(data);
       resolve(res)
    }).catch((error)=>{
      reject(error)
    })
  })
}


export const _OtpVerification=(data)=>{
  return new Promise((resolve, reject)=>{
    apiPost(OTPVERIFICATION_API, data).then((res)=>{
      // saveUserData(res.data);
      setUserData(res.data);
      console.log(res.data);
      resolve(res);
    }).catch((error)=>{
      reject(error)
    })
  })
}


export const getViewData = (data) => {
  console.log(data, 'the geiv ndart');
  return new Promise((resolve, reject) => {
    apiPost(VIEW_DATA)
      .then((res) => {
        console.log(res);
        saveViewData(res.data);
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

