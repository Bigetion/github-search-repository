const API_ENDPOINT = process.env.REACT_APP_API_URL;

const defaultHeaders = new Headers();

function handleResponseError(error) {
  console.log(error);
}

function submit(requestType, url, data, requestOptions = {}) {
  const { headers = defaultHeaders } = requestOptions;

  const handleResponse = (response) => {
    const contentType = response.headers.get("content-type");
    if (response.status >= 200 && response.status < 300) {
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json();
      } else if (contentType && contentType.indexOf("text/plain") !== -1) {
        return response.text();
      } else if (contentType) {
        if (response.blob) {
          return response.blob();
        }
      }
    } else {
      return response.json().then(Promise.reject.bind(Promise));
    }
    return false;
  };

  const apiUrl = API_ENDPOINT + url;

  return new Promise((resolve, reject) => {
    if (requestType === "GET") {
      const newApiUrl = new URL(apiUrl);
      Object.keys(data).forEach((key) => {
        newApiUrl.searchParams.append(key, data[key]);
      });
      fetch(
        newApiUrl,
        Object.assign(
          {
            method: "GET",
            headers,
          },
          requestOptions
        )
      )
        .then(handleResponse)
        .then((response) => {
          if (!response) {
            resolve(response);
          } else {
            resolve(response);
          }
        })
        .catch((error) => {
          handleResponseError(error);
          reject(error);
        });
    } else if (requestType === "POST") {
      fetch(
        apiUrl,
        Object.assign(
          {
            method: "POST",
            headers,
            body: JSON.stringify(data),
          },
          requestOptions
        )
      )
        .then(handleResponse)
        .then((response) => {
          if (!response) {
            resolve(response);
          } else {
            resolve(response);
          }
        })
        .catch((error) => {
          handleResponseError(error);
          reject(error);
        });
    } else if (requestType === "DELETE") {
      fetch(
        apiUrl,
        Object.assign(
          {
            method: "DELETE",
            headers,
          },
          requestOptions
        )
      )
        .then(handleResponse)
        .then((response) => {
          if (!response) {
            resolve(response);
          } else {
            resolve(response);
          }
        })
        .catch((error) => {
          handleResponseError(error);
          reject(error);
        });
    } else if (requestType === "PUT") {
      fetch(
        apiUrl,
        Object.assign(
          {
            method: "PUT",
            headers,
            body: JSON.stringify(data),
          },
          requestOptions
        )
      )
        .then(handleResponse)
        .then((response) => {
          if (!response) {
            resolve(response);
          } else {
            resolve(response);
          }
        })
        .catch((error) => {
          handleResponseError(error);
          reject(error);
        });
    } else if (requestType === "PATCH") {
      fetch(
        apiUrl,
        Object.assign(
          {
            method: "PATCH",
            headers,
            body: JSON.stringify(data),
          },
          requestOptions
        )
      )
        .then(handleResponse)
        .then((response) => {
          if (!response) {
            resolve(response);
          } else {
            resolve(response);
          }
        })
        .catch((error) => {
          handleResponseError(error);
          reject(error);
        });
    }
  });
}

export { submit };
