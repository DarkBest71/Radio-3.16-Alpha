 exports.action = function(data, callback, config, SARAH) {
  
var exec = require('child_process').exec;
 
switch(data.val) {

    case "adofm":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/adofm.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais ado F M";
	Txt[1] = " ado F M Lanc�";
    break;   
	  
	case "alouette":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/alouette.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais alouette";
	Txt[1] = " alouette Lanc�";
    break;  
	 
	case "beurfm":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/beurfm.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais beur F.M";
	Txt[1] = " beur F.M Lanc�";
    break;   
	  
	case "cheriefm":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/cheriefm.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais ch�ri� F.M";
	Txt[1] = " ch�ri� F.M Lanc�";
    break;
	
	case "europe1":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/europe1.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais europe 1";
	Txt[1] = " europe 1 Lanc�";
    break;   
	  
	case "franceinfo":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/franceinfo.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais france info";
	Txt[1] = " france info Lanc�";
    break;
	
	case "franceinter":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/franceinter.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais france inter";
	Txt[1] = " france inter Lanc�";
    break;
	 
	case "funradio":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/funradio.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais fun radio";
	Txt[1] = " fun radio Lanc�";
    break; 
	 
	case "generations":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/generations.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais g�n�rations";
	Txt[1] = " g�n�rations Lanc�";
    break;  	
	  
	case "intensite":
	var process = '%CD%/Radio-3.16-Alpha/radio/ini/intensite.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais intensit�";
	Txt[1] = " intensit� Lanc�";
    break;  
	  
	case "nostalgie":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/nostalgie.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais nostalgie";
	Txt[1] = " nostalgie Lanc�";
    break;  
	  
	case "nrj":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/nrj.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais N.R.J";
	Txt[1] = " N.R.J Lanc�";
    break;  
	  
	case "radioenjoy":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/radioenjoy.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais radio enjoy";
	Txt[1] = " radio enjoy Lanc�";
    break; 
	  
	case "radioorient":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/radioorient.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais radio orient";
	Txt[1] = " radio orient Lanc�";
    break;  
	  
	case "rfm":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/rfm.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais R.F.M";
	Txt[1] = " R.F.M Lanc�";
    break;  
	
	case "rireetchanson":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/rireetchanson.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais rire et chanson";
	Txt[1] = " rire et chanson Lanc�";
    break; 
	
	case "rtl":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/rtl.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais R.T.L";
	Txt[1] = " R.T.L Lanc�";
    break;
	
    case "rtl2":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/rtl2.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais R.T.L 2";
	Txt[1] = " R.T.L 2 Lanc�";
    break;
	  
	case "skyrock":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/skyrock.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais skyrock";
	Txt[1] = " skyrock Lanc�";
    break;
	
	case "vibration":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/vibration.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais vibration";
	Txt[1] = " vibration Lanc�";
    break;
	  
    case "virginradio":
	var process = '%CD%/plugins/Radio-3.16-Alpha/ini/virginradio.bat';
	var Txt = new Array; 
	Txt[0] = " je vous mais virgin radio";
	Txt[1] = " virgin radio Lanc�";
    break;
	  }    

 var child = exec(process,
 function (error, stdout, stderr) {
    console.log(process);
   });
Choix = Math.floor(Math.random() * Txt.length); 
callback({'tts': Txt[Choix]});
}