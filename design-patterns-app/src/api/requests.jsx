import api from "./api";
/* eslint-disable no-unused-vars */

/*
    makeRequest can be used to get response from a desired enpoint 
    and respond with a genric error action like show a snackbar with error message etc 
    so that the actual component calling makeRequest doesn't have to 
*/
export const makeRequests = (
  url,
  config = {},
  body = null,
  method = "get",
  enableLoader = true
) => {
  // show loader

  // any additional headers  or config can be passed in config
  //  for get and delete method as axios doesn't support body parameter but for making a genric code
  // we have to pass body as null to get and delete as it won't be used later either way
  api[method](url, body, config)
    .then((response) => {
      return {
        response,
        error: null,
      };
    })
    .catch((error) => {
      console.log("error", error);
      // add genric response here like a error snackbar etc
      return {
        error,
        response: null,
      };
    });

  // remove loader
};

/*
    if you need to do something else iwhen you request fails you can just get the response 
    and then interpret it and decide what to do next 
    here if the request fails we can do some other action than the genric actions that might have happend using makeRequest
*/
const getResponse = async (
  url,
  config = {},
  body = null,
  method = "get",
  enableLoader = true
) => {
  // show loader

  const response = await api[method](url, body, config);
  return response;

  // remove loader
};
