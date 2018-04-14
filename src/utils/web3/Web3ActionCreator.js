import { web3, getWeb3 } from "./getWeb3";

export function InitiateWeb3() {
  return dispatch => {
    return getWeb3()
      .then(response => {
        dispatch(web3Initialized(response));
        return response;
      })
  };
}

export function web3GetBalance(account) {
  return dispatch => {
    return web3.eth.getBalance(account).then(res => {
      dispatch(web3UpdateBalance(res))
    });
  }
}

export function web3SendTransaction(data) {
  return dispatch => {
    return dispatch(web3MakeTransaction(data))
  }
}

export const web3Initialized = results => {
  return {
    type: 'WEB3_INITIALIZED',
    payload: results
  }
}

export const web3UpdateBalance = results => {
  return {
    type: 'WEB3_BALANCE_UPDATED',
    payload: web3.utils.fromWei(results, "ether")
  }
}

export const web3MakeTransaction = receipt => {
  return {
    type: 'WEB3_TRANSCATION_MADE',
    payload: receipt
  }
}
