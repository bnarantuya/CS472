
var accountList = [];
var area = document.getElementById("accountList");

function createAccount() {
    var accName = document.getElementById("accountName");
    var deposit = document.getElementById("deposit");
    
    account.create(accName.value,deposit.value);
    var returnString = '';
    for(acc in accountList) {
        returnString += 'Account Name: ' + accountList[acc].name + ' Balance: ' + accountList[acc].deposit + '\n';
    }
    area.value = returnString;
    accName.value ='';
    deposit.value ='';
}

var account = {
    create : function(name, deposit) {
        var acc =[]
        acc["name"] = name;
        acc["deposit"] = deposit;
        accountList.push(acc);
    }
}