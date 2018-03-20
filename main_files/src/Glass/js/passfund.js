import web3 from "web3"

function passfund()
{


var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


//var sender = document.getElementById("from_address");
//var receiver = document.getElementById("to_address");
//var amount = document.getElementById("amount");

web3.eth.sendTransaction({from:'0x360dc14eb59eddd45e6500f3db8a82ae1b85db5e',to:'0x717822f54ff700819be2e1ad764499e7b3096cee', value:'1'});

}