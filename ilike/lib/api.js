import { getItemCached, setItemCached } from "@js_dir/utils/sessionStorage";
import axios  from 'axios';
const API_URL = process.env.SITE_API_URL;
const API_V2_URL = process.env.SITE_API_V2_URL;
export async function fetchAPI(api_name, 
                                  method = "POST", 
                                    { variables } = {}, 
                                      token = null, 
                                        fetchAll = false,
                                          api_version = 1,
                                            setCached = true ) {
  let config = {};
  let data = null;
  const headers = {};
  const api = api_version === 2 ? API_V2_URL : API_URL;
  if ( token ) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  if (headers) {
    config = {...config, headers};
  }
  if (variables) {
    if ( !variables.raw ) {
      var params = new URLSearchParams();
      const keys = Object.keys(variables);
      for ( let i = 0; i < keys.length; i++ ) {
        const key = keys[i];
        const v = variables[key];
        params.append(key, v);
      }
      config = {...config, params};
    }
    else {
      config = {...config, headers : {
                              'Content-Type': 'application/json'
                          }};
      delete variables['raw'];
      data = {...variables};
    }
  }
  var res = null;
  const keyVariables = variables ? JSON.stringify(variables) : '';
  const sessiontoken = `${api_name}__${method}__${keyVariables}`;
  if ( typeof(localStorage) !== 'undefined' && 
        setCached ) {
    const sessionCached = getItemCached(sessiontoken);
    if ( sessionCached ) {      
      return JSON.parse(sessionCached);
    }
  }
  axios.interceptors.response.use(
      res => res,
      err => false
  );
  if ( method === 'POST' ) { 
    res = await axios.post(`${api}/${api_name}`, data, config)
                    .then(res => res, err => err);
  }
  else {
    res = await axios.get(`${api}/${api_name}`, config)
                     .then(res => res, err => err); 
  }
  if ( !res ) return false;
  if ( typeof(res.data) === 'object' && 
          method !== 'POST' && 
            typeof(localStorage) !== 'undefined' && 
              setCached ) {
    setItemCached(sessiontoken, JSON.stringify(fetchAll ? (res.data || res.data.data) : (res.data.data || res.data)));
  }
  return fetchAll ? (res || res.data || res.data.data) : (res.data.data || res.data || res);
}