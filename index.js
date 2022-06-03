require("./kleverSDK/kleverSDKLoader");
const kleverSDK = require("@klever/sdk");

const account = new kleverSDK.Account(
  "Your Address Here",
  "Your Private Key Here"
);

const transactionPayload = {
  receiver: "klv17e8zzgn73h6ehe3c6q9vlt77kuxk5euddmhymy5uhv2rhv0dc0nqlfp0ap",
  amount: 100,
};

account
  .sendTransfer(transactionPayload)
  .then((tx) => console.log(tx))
  .catch((err) => console.log(err));
