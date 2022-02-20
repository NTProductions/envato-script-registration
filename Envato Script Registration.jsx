// envato purchase code verify
#include "src/test.jsx";

"object"!=typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(indent=gap="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if((rep=e)&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

var window = new Window("palette", "Envato Registration", undefined);
window.orientation = "column";
var username = window.add("edittext", undefined, "Your Username");
username.size = [180, 25];
var edittext = window.add("edittext", undefined, "Registration Code Here");
edittext.size = [180, 25];
var buttonGroup = window.add("group", undefined, "");
buttonGroup.orientation = "row";
var helpButton = buttonGroup.add("button", undefined, "Help");
var registerButton = buttonGroup.add("button", undefined, "Register");

var productString = "Credit Smith";
// This product string will be used as a second layer of security, checking that not only is the registration key correct, but that it matches the currently used script/extension
// This string will also be used to create a custom file to remember that this was activated, so the user does not have to re-input the registration code every time they launch the product

var envatoRegistrationFolder = Folder("~/Documents/Envato Registration");
if(!envatoRegistrationFolder.exists) {
    envatoRegistrationFolder.create();
}

var thisProductRegFile = File("~/Documents/Envato Registration/"+productString+"_reg.json");


// we will store each registered key in a file titled <productString>+"_reg.json"
// formatting {"Product Name":"Credit Smith","key":""}
if(thisProductRegFile.exists) {
    thisProductRegFile.open("r");
    var regData = JSON.parse(thisProductRegFile.read());
    thisProductRegFile.close();
    if(regData["username"] != "") {
    if(envatoLicenseCheck(regData["key"], productString, regData["username"]) != null) {
        alert("you already registered");
        // launch script
    }
    }
} else {
    window.center();
    window.show();
}



/////////// TO DO
// -More obscurity and things in a connected jsxbin file

helpButton.onClick = function() {
    var userOSVer = osCheck();
    alert("Press 'Download' for the product your purchased, then 'License certificate & purchase code'");
if(userOSVer == "MAC"){
          var urlLaunchCode = "Open";//Mac based
          system.callSystem(urlLaunchCode + " https://videohive.net/downloads");

} else {
          var urlLaunchCode = "Start";//PC based
          system.callSystem("cmd.exe /c " + urlLaunchCode + " https://videohive.net/downloads");
}

}

registerButton.onClick = function() {
    if(edittext.text.indexOf(" ") == -1) {
        if(envatoLicenseCheck(edittext.text, productString, username.text) != null) {
            alert("Registration successfull! Thank you for purchasing!");
            thisProductRegFile.open("w");
            thisProductRegFile.write(JSON.stringify({"Product Name":productString,"key":edittext.text,"username":username.text}));
            thisProductRegFile.close();
            window.hide();
            // launch ur script

            } else {
                    alert("Invalid registration information!");
                    return false;
                }
            } else {
                 alert("Invalid registration information!");
                    return false;
                }
    }


function envatoLicenseCheck(purchaseCode, searchTerm, username) {
    var envatoResponse = "";
    
    try {
      envatoResponse = system.callSystem('curl -H "Authorization: Bearer '+tk+'" https://api.envato.com/v1/market/private/user/verify-purchase:'+purchaseCode+'.json');
    } catch (e) {
      envatoResponse = "";
      return null;
      // something went wrong, you could print or alert the error
    }

envatoResponse = JSON.parse(envatoResponse.slice(envatoResponse.indexOf("{"),envatoResponse.length));

if(envatoResponse["verify-purchase"]["item_id"] == null ){
    return null;
    } else {
        if(envatoResponse["verify-purchase"]["item_name"].toLowerCase().indexOf(searchTerm.toLowerCase()) != -1 && envatoResponse["verify-purchase"]["buyer"] == username) {
            return true;
        } else {
            return null;
        }
    }
}

function osCheck(){
    var op = $.os;
    var match = op.indexOf("Windows");
    if(match != (-1)){
              var userOS = "PC";// User is on PC
    }else{
              var userOS = "MAC";// User is on MAC
    }
    return userOS;
}