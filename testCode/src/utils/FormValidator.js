export const processFormElements = function(elements){
  	let readyToSubmit = true;
  	elements.forEach(function(elementid,index){
    		if(document.getElementById(elementid).value.replace(/ /g, '') === ''){
      			document.getElementById(elementid).className = 'is-error';
      			readyToSubmit = false;
    		}
    		else{
    			  document.getElementById(elementid).className = '';
    		}
  	});
  	return readyToSubmit;
};

export const inputOnChangeStatus = function(e){
     if(e.target.value.replace(/ /g, '') === ''){
       if(e.target.className.indexOf('is-error') == -1){
         e.target.className = 'is-error';
       }
     }
     else{
       e.target.className = '';
     }
};