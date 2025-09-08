const { validateToken } = require("../services/authentication");

function checkforAuthentication(cookiesName) {
    return(req,res,next)=>{
        const tokenCookiesValue= req.cookies[cookiesName];
        if(!tokenCookiesValue){
            return next();

        }


        try{
            const userPayload= validateToken(tokenCookiesValue);
            req.user=userPayload;
           
        } catch(error){}
             return next();

            };
    }



    module.exports= {checkforAuthentication,};
