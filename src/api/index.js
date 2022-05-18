export const getProfile = (account, address) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/profile_details?yourAddr=${account}&theirAddr=${address}`,
        {
          method: "get",
          signal,
        }
      );
      const data = await response.json();
      if (data["status"]) {
        resolve(data["data"]);
      } else {
        reject(Error(data["message"]));
      }
    } catch (error) {
      reject(error);
    }
  });
  promise.cancel = () => controller.abort();
  return promise;
};

export const getCommon = (account, address) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/common?yourAddr=${account}&theirAddr=${address}`,
        {
          method: "get",
          signal,
        }
      );
      const data = await response.json();
      if (data["status"]) {
        resolve(data["data"]);
      } else {
        reject(Error(data["message"]));
      }
    } catch (error) {
      reject(error);
    }
  });
  promise.cancel = () => controller.abort();
  return promise;
};

export const checkFollow = (account, address) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/check_follow?yourAddr=${account}&theirAddr=${address}`,
        {
          method: "get",
          signal,
        }
      );
      const data = await response.json();
      if (data["status"]) {
        resolve(data["data"]);
      } else {
        reject(Error(data["message"]));
      }
    } catch (error) {
      reject(error);
    }
  });
  promise.cancel = () => controller.abort();
  return promise;
};

export const getBalanceData = (address) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/portfolio?address=${address}`,
        {
          method: "get",
          signal,
        }
      );
      const data = await response.json();
      if (data["status"]) {
        resolve(data["data"]);
      } else {
        reject(Error(data["message"]));
      }
    } catch (error) {
      reject(error);
    }
  });
  promise.cancel = () => controller.abort();
  return promise;
};

export const getNFTData = (address) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/nfts?address=${address}`,
        {
          method: "get",
          signal,
        }
      );
      const data = await response.json();
      if (data["status"]) {
        resolve(data["data"]);
      } else {
        reject(Error(data["message"]));
      }
    } catch (error) {
      reject(error);
    }
  });
  promise.cancel = () => controller.abort();
  return promise;
};

export const getPoapData = (address) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/poaps?address=${address}`,
        {
          method: "get",
          signal,
        }
      );
      const data = await response.json();
      if (data["status"]) {
        resolve(data["data"]);
      } else {
        reject(Error(data["message"]));
      }
    } catch (error) {
      reject(error);
    }
  });
  promise.cancel = () => controller.abort();
  return promise;
};

export const getTransfersData = (address) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/transfers?address=${address}`,
        {
          method: "get",
          signal,
        }
      );
      const data = await response.json();
      if (data["status"]) {
        resolve(data["data"]);
      } else {
        reject(Error(data["message"]));
      }
    } catch (error) {
      reject(error);
    }
  });
  promise.cancel = () => controller.abort();
  return promise;
};

export const getSocialData = (address, type, page_number) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/social?address=${address}&type=${type}&page_size=20&page_number=${page_number}`,
        {
          method: "get",
          signal,
        }
      );
      const data = await response.json();
      if (data["status"]) {
        resolve(data["data"]);
      } else {
        reject(Error(data["message"]));
      }
    } catch (error) {
      reject(error);
    }
  });
  promise.cancel = () => controller.abort();
  return promise;
};

export const getDomainNFT = (domain) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/domain_picture?domain=${domain}`,
        {
          method: "get",
          signal,
        }
      );
      const data = await response.json();
      if (data["status"]) {
        resolve(data["data"]);
      } else {
        reject(Error(data["message"]));
      }
    } catch (error) {
      reject(error);
    }
  });
  promise.cancel = () => controller.abort();
  return promise;
};

export const resolveAddressByInput = (input) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/search?address=${input}`,
        {
          method: "get",
          signal,
        }
      );
      const data = await response.json();
      if (data["status"]) {
        resolve(data["data"]);
      } else {
        reject(Error(data["message"]));
      }
    } catch (error) {
      reject(error);
    }
  });
  promise.cancel = () => controller.abort();
  return promise;
};
