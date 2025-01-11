import { jwtDecode } from 'jwt-decode';
export const getUserDataFromToken = (token) =>{
   const jwtToken= token ?? localStorage.getItem('profile')
   if(jwtToken)
   {
    const tokenData= jwtDecode(jwtToken);
    return {
        name:tokenData?.name,
        imagUrl:tokenData?.picture,
        email:tokenData?.email,
        id:tokenData?.sub,
        exp:tokenData?.exp,
    };
   }
   return null
}