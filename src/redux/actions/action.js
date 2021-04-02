import { SCROLL_API, SEARCH_API } from "../../config/urls";
import { apiGet, apiPost } from "../../utils/utils";
import types from "../types";

export function scrollApi(data) {
    
    return new Promise((resolve, reject)=>{
        apiPost(SCROLL_API, data).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        });
    })
}

export function find_text(find) {
    let searchUrl=`${SEARCH_API}` + `?name=${find}`
    return apiGet(searchUrl)    
}
