var generalTokenAbi = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"burner","type":"address"},{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
var generalTokenCode = "0x6003805460a060020a60ff021916905560c0604052600560808190527f44554d4d5900000000000000000000000000000000000000000000000000000060a090815262000050916004919062000138565b506040805180820190915260058082527f44554d4d59000000000000000000000000000000000000000000000000000000602090920191825262000095918162000138565b506006805460ff19166012179055348015620000b057600080fd5b5060405162000fbe38038062000fbe83398101604090815281516020808401519284015160038054600160a060020a0319163317905591840180519094939093019262000104916004919086019062000138565b5081516200011a90600590602085019062000138565b506006805460ff191660ff9290921691909117905550620001dd9050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200017b57805160ff1916838001178555620001ab565b82800160010185558215620001ab579182015b82811115620001ab5782518255916020019190600101906200018e565b50620001b9929150620001bd565b5090565b620001da91905b80821115620001b95760008155600101620001c4565b90565b610dd180620001ed6000396000f3006080604052600436106100fb5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166305d2035b811461010057806306fdde0314610129578063095ea7b3146101b357806318160ddd146101d757806323b872dd146101fe578063313ce5671461022857806340c10f191461025357806342966c6814610277578063661884631461029157806370a08231146102b55780637d64bcb4146102d65780638da5cb5b146102eb57806395d89b411461031c5780639dc29fac14610331578063a9059cbb14610355578063d73dd62314610379578063dd62ed3e1461039d578063f2fde38b146103c4575b600080fd5b34801561010c57600080fd5b506101156103e5565b604080519115158252519081900360200190f35b34801561013557600080fd5b5061013e610406565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610178578181015183820152602001610160565b50505050905090810190601f1680156101a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101bf57600080fd5b50610115600160a060020a0360043516602435610494565b3480156101e357600080fd5b506101ec6104fa565b60408051918252519081900360200190f35b34801561020a57600080fd5b50610115600160a060020a0360043581169060243516604435610500565b34801561023457600080fd5b5061023d610679565b6040805160ff9092168252519081900360200190f35b34801561025f57600080fd5b50610115600160a060020a0360043516602435610682565b34801561028357600080fd5b5061028f60043561079e565b005b34801561029d57600080fd5b50610115600160a060020a036004351660243561084e565b3480156102c157600080fd5b506101ec600160a060020a036004351661093e565b3480156102e257600080fd5b50610115610959565b3480156102f757600080fd5b506103006109ff565b60408051600160a060020a039092168252519081900360200190f35b34801561032857600080fd5b5061013e610a0e565b34801561033d57600080fd5b5061028f600160a060020a0360043516602435610a69565b34801561036157600080fd5b50610115600160a060020a0360043516602435610b41565b34801561038557600080fd5b50610115600160a060020a0360043516602435610c24565b3480156103a957600080fd5b506101ec600160a060020a0360043581169060243516610cbd565b3480156103d057600080fd5b5061028f600160a060020a0360043516610ce8565b60035474010000000000000000000000000000000000000000900460ff1681565b6004805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561048c5780601f106104615761010080835404028352916020019161048c565b820191906000526020600020905b81548152906001019060200180831161046f57829003601f168201915b505050505081565b336000818152600260209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60005481565b6000600160a060020a038316151561051757600080fd5b600160a060020a03841660009081526001602052604090205482111561053c57600080fd5b600160a060020a038416600090815260026020908152604080832033845290915290205482111561056c57600080fd5b600160a060020a038416600090815260016020526040902054610595908363ffffffff610d7d16565b600160a060020a0380861660009081526001602052604080822093909355908516815220546105ca908363ffffffff610d8f16565b600160a060020a03808516600090815260016020908152604080832094909455918716815260028252828120338252909152205461060e908363ffffffff610d7d16565b600160a060020a03808616600081815260026020908152604080832033845282529182902094909455805186815290519287169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35060019392505050565b60065460ff1681565b600354600090600160a060020a0316331461069c57600080fd5b60035474010000000000000000000000000000000000000000900460ff16156106c457600080fd5b6000546106d7908363ffffffff610d8f16565b6000908155600160a060020a038416815260016020526040902054610702908363ffffffff610d8f16565b600160a060020a038416600081815260016020908152604091829020939093558051858152905191927f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688592918290030190a2604080518381529051600160a060020a038516916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a350600192915050565b336000908152600160205260408120548211156107ba57600080fd5b50336000818152600160205260409020546107db908363ffffffff610d7d16565b600160a060020a03821660009081526001602052604081209190915554610808908363ffffffff610d7d16565b600055604080518381529051600160a060020a038316917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a25050565b336000908152600260209081526040808320600160a060020a0386168452909152812054808311156108a357336000908152600260209081526040808320600160a060020a03881684529091528120556108d8565b6108b3818463ffffffff610d7d16565b336000908152600260209081526040808320600160a060020a03891684529091529020555b336000818152600260209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526001602052604090205490565b600354600090600160a060020a0316331461097357600080fd5b60035474010000000000000000000000000000000000000000900460ff161561099b57600080fd5b6003805474ff00000000000000000000000000000000000000001916740100000000000000000000000000000000000000001790556040517fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0890600090a150600190565b600354600160a060020a031681565b6005805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561048c5780601f106104615761010080835404028352916020019161048c565b600354600160a060020a03163314610a8057600080fd5b600160a060020a038216600090815260016020526040902054811115610aa557600080fd5b600160a060020a038216600090815260016020526040902054610ace908263ffffffff610d7d16565b600160a060020a03831660009081526001602052604081209190915554610afb908263ffffffff610d7d16565b600055604080518281529051600160a060020a038416917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a25050565b6000600160a060020a0383161515610b5857600080fd5b33600090815260016020526040902054821115610b7457600080fd5b33600090815260016020526040902054610b94908363ffffffff610d7d16565b3360009081526001602052604080822092909255600160a060020a03851681522054610bc6908363ffffffff610d8f16565b600160a060020a0384166000818152600160209081526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b336000908152600260209081526040808320600160a060020a0386168452909152812054610c58908363ffffffff610d8f16565b336000818152600260209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b600354600160a060020a03163314610cff57600080fd5b600160a060020a0381161515610d1457600080fd5b600354604051600160a060020a038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600082821115610d8957fe5b50900390565b600082820183811015610d9e57fe5b93925050505600a165627a7a723058205e6dc1428c882df339a346938f5784fa50e40e70dd20dd43420c5eee3f5934fa0029";

// localStorage persistence
var STORAGE_KEY = 'token-contracts-v1'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

var web3local = null;
var web3Functions = {
  getAccount: function () {
    if (typeof web3 == 'undefined')
      return "No account";
    web3local = new Web3(web3.currentProvider);
    web3local.eth.net.getNetworkType().then((networkName) => {app.network = networkName});
    return web3.eth.defaultAccount;
  }
}

// visibility filters
var filters = {
  all: function (todos) {
    return todos
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}

// app Vue instance
var app = new Vue({
  // app initial state
  data: {
    todos: todoStorage.fetch(),
    name: 'My First Token',
    symbol: 'MFT',
    decimals: '18',
    account: web3Functions.getAccount(),
    editedTodo: null,
    progress: 0,
    network: '',
    errorMessage: '',
    visibility: 'all'
  },

  // watch todos change for localStorage persistence
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos)
      },
      deep: true
    }
  },

  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    filteredTodos: function () {
      return filters[this.visibility](this.todos)
    },
    remaining: function () {
      return filters.active(this.todos).length
    },
    allDone: {
      get: function () {
        return this.remaining === 0
      },
      set: function (value) {
        this.todos.forEach(function (todo) {
          todo.completed = value
        })
      }
    }
  },

  filters: {
    pluralize: function (n) {
      return n === 1 ? 'item' : 'items'
    }
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    addTodo: function () {
      var tokenName = this.name && this.name.trim()
      var tokenSymbol = this.symbol && this.symbol.trim()
      var tokenDecimals = this.decimals && this.decimals.trim()
      if (!tokenName || !tokenSymbol || !tokenDecimals) {
        return
      }
      this.name = tokenName;
      this.symbol = tokenSymbol;
      this.decimals = tokenDecimals;
      this.buildGeneralTokenContract();
    },

    removeTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },

    editTodo: function (todo) {
      this.beforeEditCache = todo.title
      this.editedTodo = todo
    },

    doneEdit: function (todo) {
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
    },

    cancelEdit: function (todo) {
      this.editedTodo = null
      todo.title = this.beforeEditCache
    },

    removeCompleted: function () {
      this.todos = filters.active(this.todos)
    },

    removeErrorMessage: function() {
      this.errorMessage = '';
    },

    buildGeneralTokenContract: function() {
      this.progress = 10;
      var contract = new web3local.eth.Contract(generalTokenAbi);
      var options = {
          data: generalTokenCode,
          arguments: [this.name, this.symbol, this.decimals]
      };
      //var encodedAbi = contract.deploy(options).encodeABI();
      var fromAccount = this.account;
      var vm = this;
      contract.deploy(options).estimateGas(function(err, gas){
          gas = gas * 2;
          console.log("gas=" + gas);
          contract.deploy(options).send({
              from: fromAccount,
              gas: gas,
              gasPrice: '3000000000'
          }, function(error, transactionHash){ console.log(transactionHash) })
            .on('error', function(error){ 
              console.log(error);
              vm.errorMessage = "" + error;
              vm.progress = 0;
            })
            .on('transactionHash', function(transactionHash){ 
              console.log("on txHash-" + transactionHash);
              vm.progress = 20;
            })
            .on('receipt', function(receipt){
              console.log(receipt.contractAddress); 
              vm.todos.push({
                id: todoStorage.uid++,
                tokenName: vm.name,
                tokenSymbol: vm.symbol,
                tokenDecimals: vm.decimals,
                contractAddress: receipt.contractAddress,
                completed: false
              })
              vm.progress = 100;
            })
            .on('confirmation', function(confirmationNumber, receipt) { 
              console.log("on confirmation=" + confirmationNumber) 
              if (confirmationNumber == 3)
                vm.progress = 0;
            })
            .then(function(newContractInstance){
                console.log(newContractInstance.options.address) // instance with the new contract address
            })
      });
    }

  },

  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }
})

// handle routing
function onHashChange () {
  var visibility = window.location.hash.replace(/#\/?/, '')
  if (filters[visibility]) {
    app.visibility = visibility
  } else {
    window.location.hash = ''
    app.visibility = 'all'
  }
}

window.addEventListener('hashchange', onHashChange)
onHashChange()

// mount
app.$mount('.todoapp');
