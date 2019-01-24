var routes=require('./routes.json');


// route('home',['1'])
export default function () {
    let args=Array.prototype.slice.call(arguments);
    let name=args.shift();
    let errMessage='Error. Undefined route name';

    let arrURLReplacements=['http://','https://'];

    if(routes[name]=== undefined){
        console.log(errMessage);
    }else{
        let strCurrentLocation=window.location.href;
        let strDefaultHttp=arrURLReplacements[0];

        for(let i=0;i<arrURLReplacements.length;i++){
            if(strCurrentLocation.search(arrURLReplacements[i])>=0){
                strCurrentLocation=strCurrentLocation.replace(arrURLReplacements[i], "");
                strDefaultHttp=arrURLReplacements[i];
            }
        }
        let arrBaseUrl=strCurrentLocation.split('/');

        //-- Check if URL format is correct and build resulted URL for JS
        if(arrBaseUrl.length>1){
            return strDefaultHttp+arrBaseUrl[0]+'/'+arrBaseUrl[1]+'/'+
                routes[name].split('/')
                    .map(str=>str[0]=='{' ? args.shift():str)
                    .join('/');
        }else{
            console.log(errMessage);
        }
    }
}
