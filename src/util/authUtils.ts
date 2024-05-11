import Cookie from 'js-cookie';
import SSRCookie from 'cookie';
export const AUTH_CRED = 'AUTH_CRED'
export function setAuthCredentials(token: string) {
    Cookie.set(AUTH_CRED, token);
}

export async function getAuthCredentials(context?: any) {
    let authCred;
    if (context) {
        authCred = parseSSRCookie(context)[AUTH_CRED];
    } else {
        authCred = await Cookie.get(AUTH_CRED);
        console.log(authCred, "aqui antes")
    }
    if (authCred) {
        return JSON.parse(authCred);
    }
    return { token: null };
}

export function parseSSRCookie(context: any) {
    return SSRCookie.parse(context.req.headers.cookie ?? '');
}