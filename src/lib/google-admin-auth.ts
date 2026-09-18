import{ADMIN_EMAIL,setAdminToken,adminSession}from"./avant-backend";import{customerSession,requireCustomerToken,signOutCustomer}from"./google-auth";
async function finish(){const user=await customerSession();if(String(user?.email||"").toLowerCase()!==ADMIN_EMAIL){setAdminToken(null);throw new Error("This Google account is not an Avant administrator.")}const token=await requireCustomerToken();const session=await adminSession(token);if(!session.admin){setAdminToken(null);throw new Error("Admin authorization denied.")}setAdminToken(token);return{mfaRequired:false,session}}
export async function restoreAdminSession(){try{return await finish()}catch{setAdminToken(null);return null}}
export async function signInAdmin(){await requireCustomerToken();return finish()}
export async function signOutAdmin(){setAdminToken(null);await signOutCustomer()}
