var expresionConstante=['L','DL'];
var expresionImprimir=['L'];
var expresionTemporal=[null];
var iteraciones=4;
var uax;
for (var i = 0; i <= iteraciones; i++) {
	 		if (i===1){
		  		expresionTemporal[0]='L'+expresionConstante[0];
		  		expresionTemporal[1]='L'+expresionConstante[1];
		   		expresionImprimir=expresionTemporal.slice(0, expresionTemporal.size);
 			}
 			if (i>1){
		   		expresionTemporal.length=0
				expresionTemporal=expresionImprimir.slice(0, expresionImprimir.size);
				posExpresionVariable=expresionTemporal.length;
		   		expresionImprimir.length=0;
		   	}	
		for (var y = 0; y < (Math.pow(2,i))/2; y++){
		   	if (i>1){
		   		uax=expresionTemporal[y]+expresionConstante[0];
			   	expresionImprimir.push(uax);
			   	uax=expresionTemporal[y]+expresionConstante[1];
			   	expresionImprimir.push(uax);
		   	}
		}
		console.log(expresionImprimir);
}
