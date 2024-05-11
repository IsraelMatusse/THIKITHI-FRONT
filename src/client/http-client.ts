import axios from "axios";
import Cookie from "js-cookie"



export const GET = (url: string, isAuth: boolean) => {
    const token = Cookie.get("AUTH_CRED");
    return isAuth ? axios.get(url, {
        headers: {
            Authorization: "Bearer " + token
        }
    }) : axios.get(url);
};

export const POST = (url: string, data: any, isAuth: boolean) => {
    const token = Cookie.get("AUTH_CRED");
    return isAuth ? axios.post(url, data, {
        headers: {
            Authorization: "Bearer " + token
        }
    }) : axios.post(url, data);
}

export const PUT = (url: string, data: any, isAuth: boolean) => {
    const token = Cookie.get("AUTH_CRED");
    return isAuth ? axios.put(url, data, {
        headers: {
            Authorization: "Bearer " + token
        }
    }) : axios.put(url, data);
}

export const DELETE = (url: string, isAuth: boolean) => {
    const token = Cookie.get("AUTH_CRED");
    return isAuth ? axios.delete(url, {
        headers: {
            Authorization: "Bearer " + token
        }
    }) : axios.delete(url);
}

export const POSTFILE = (url: string, data: any, isAuth: boolean) => {
    const token = Cookie.get("AUTH_CRED");
    return isAuth ? axios.put(url, data, {
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data"
        }
    }) : axios.post(url, data, {
        headers: {
            'Content-Type': "multipart/form-data"
        }
    });
}

export const PATCH = (url: string, data: any, isAuth: boolean) => {
    const token = Cookie.get("AUTH_CRED");
    return isAuth ? axios.patch(url, data, {
        headers: {
            Authorization: "Bearer " + token
        }
    }) : axios.patch(url, data);
}