const axios = require("axios");
const CryptoJS = require("crypto-js");

export const getData = async (method, table, filter, criteria, location) => {

  let query = {
    "collection": table,
    "database": "mcafferty",
    "dataSource": "Cluster0",
    filter: {
      location: location
    }
  }
  
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DB_URL}${method}`,
    headers: { 
      'Content-Type': 'application/json', 
      'api-key': process.env.REACT_APP_DB_KEY
    },
    data : query
  }

  const res = await axios(config)
  return await res
}



export const newDailyRecap = async (doc) => {

  let query = {
    "collection": 'daily_recap_reports',
    "database": "mcafferty",
    "dataSource": "Cluster0",
    "document" : doc
  }
  
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DB_URL}insertOne`,
    headers: { 
      'Content-Type': 'application/json',   
      'api-key': process.env.REACT_APP_DB_KEY
    },
    data : query
  }
  
  const res = (await axios(config))
}



export const deleteDailyRecap = async (id) => {

  let query = {
    "collection": 'daily_recap_reports',
    "database": "mcafferty",
    "dataSource": "Cluster0",
    filter: {
      "_id" : { "$oid" : id}
    }
  }
  
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DB_URL}deleteOne`,
    headers: { 
      'Content-Type': 'application/json',   
      'api-key': process.env.REACT_APP_DB_KEY
    },
    data : query
  }
  
  const res = (await axios(config))
}



 export const updateDailyRecap = async (id, doc) => {

  let query = {
    "collection": 'daily_recap_reports',
    "database": "mcafferty",
    "dataSource": "Cluster0",
    "filter": {
      "_id" : { "$oid" : id}
    },
    "update" : {
      "$set" : doc
    }
  }

  console.log(query)
  
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DB_URL}updateOne`,
    headers: { 
      'Content-Type': 'application/json',   
      'api-key': process.env.REACT_APP_DB_KEY
    },
    data : query
  }
  
  const res = (await axios(config))
}



export const getDailyRecaps = async (location) => {
  let query = {
    "collection": 'daily_recap_reports',
    "database": "mcafferty",
    "dataSource": "Cluster0",
    filter: {
      location: location
    }
  }
  
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DB_URL}find`,
    headers: { 
      'Content-Type': 'application/json',   
      'api-key': process.env.REACT_APP_DB_KEY
    },
    data : query
  }
  
  const res = (await axios(config))
  return(res.data.documents)
}



export const getUserInfo = async (email, password) => {

  let query = {
    "collection": 'users',
    "database": "mcafferty",
    "dataSource": "Cluster0",
    filter: {
      "email": email,
    }
  }
  
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DB_URL}findOne`,
    headers: { 
      'Content-Type': 'application/json',   
      'api-key': process.env.REACT_APP_DB_KEY
    },
    data : query
  }
  
  const res = (await axios(config))

  if(res.data.document){
    const savedPass = res.data.document.password
    const decrypted = decrypt(savedPass,process.env.REACT_APP_DB_KEY).toString(CryptoJS.enc.Utf8)
  
    if(decrypted === password){
      return res.data.document
    }
  }
}



export const getUser = async (email) => {

  let query = {
    "collection": 'users',
    "database": "mcafferty",
    "dataSource": "Cluster0",
    "filter": {
      "email": email,
    }
  }
  
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DB_URL}findOne`,
    headers: { 
      'Content-Type': 'application/json', 
      'api-key': process.env.REACT_APP_DB_KEY
    },
    data : query
  }

  const res = await axios(config)
  return await res.data.document
}



export const setUserPerms = async (id, permsToSet) => {

  let query = {
    "collection": 'users',
    "database": "mcafferty",
    "dataSource": "Cluster0",
    "filter": {
      "_id" : { "$oid" : id}
    },
    "update" : { 
      "$set" : permsToSet
    }
  }
  
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DB_URL}updateOne`,
    headers: { 
      'Content-Type': 'application/json', 
      'api-key': process.env.REACT_APP_DB_KEY
    },
    data : query
  }

  const res = await axios(config)
  console.log(res)
  return await res.data.document
}



export const addUser = async (permsToSet, pass) => {

  permsToSet.password = encrypt(permsToSet.password, process.env.REACT_APP_DB_KEY)

  let query = {
    "collection": 'users',
    "database": "mcafferty",
    "dataSource": "Cluster0",
    "document" : permsToSet
  }

  

  console.log(JSON.stringify(query))
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DB_URL}insertOne`,
    headers: { 
      'Content-Type': 'application/json', 
      'api-key': process.env.REACT_APP_DB_KEY
    },
    data : query
  }

  const res = await axios(config)
  console.log(res)
  return await res.data.document
}



export const getUsers = async () => {

  let query = {
    "collection": 'users',
    "database": "mcafferty",
    "dataSource": "Cluster0"
  }
  
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DB_URL}find`,
    headers: { 
      'Content-Type': 'application/json', 
      'api-key': process.env.REACT_APP_DB_KEY
    },
    data : query
  }

  const res = await axios(config)
  return await res
}



export const removeUser = async (id) => {

  let query = {
    "collection": 'users',
    "database": "mcafferty",
    "dataSource": "Cluster0",
    "filter": {
      "_id" : { "$oid" : id}
    }
  }
  
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DB_URL}deleteOne`,
    headers: { 
      'Content-Type': 'application/json', 
      'api-key': process.env.REACT_APP_DB_KEY
    },
    data : query
  }

  const res = await axios(config)
  return await res
}



export const setPass = async (email, pass) => {

  let query = {
    "collection": 'users',
    "database": "mcafferty",
    "dataSource": "Cluster0",
    "filter": {
      "email": email,
    },
    "update" : { 
      "$set" : {
        "password" : encrypt(pass, process.env.REACT_APP_DB_KEY)
      }
    }
  }
  
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DB_URL}updateOne`,
    headers: { 
      'Content-Type': 'application/json', 
      'api-key': process.env.REACT_APP_DB_KEY
    },
    data : query
  }

  const res = await axios(config)
  return await res
}














// Code goes here
var keySize = 256;
var iterations = 100;

function encrypt (msg, pass) {
  var salt = CryptoJS.lib.WordArray.random(128/8);
  
  var key = CryptoJS.PBKDF2(pass, salt, {
      keySize: keySize/32,
      iterations: iterations
    });

  var iv = CryptoJS.lib.WordArray.random(128/8);
  
  var encrypted = CryptoJS.AES.encrypt(msg, key, { 
    iv: iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    
  });
  
  // salt, iv will be hex 32 in length
  // append them to the ciphertext for use  in decryption
  var transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
  return transitmessage;
}

function decrypt (transitmessage, pass) {
  var salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
  var iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32))
  var encrypted = transitmessage.substring(64);
  
  var key = CryptoJS.PBKDF2(pass, salt, {
      keySize: keySize/32,
      iterations: iterations
    });

  var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
    iv: iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    
  })
  return decrypted;
}
