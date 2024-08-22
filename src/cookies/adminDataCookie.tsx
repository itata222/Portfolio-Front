import Cookies from 'js-cookie';

const ADMIN_DATA = "admin-data";

export const saveUserOnCookie = (userData) => {
    const jsonUserData = JSON.stringify(userData);
    Cookies.set(ADMIN_DATA, jsonUserData, { expires: 1 / 24, sameSite: "strict", secure: true });
};

export const deleteUserFromCookie = () => {
    Cookies.remove(ADMIN_DATA, { secure: true, sameSite: "strict" });
};

export const getUserFromCookie = () => {
    try {
        const jsonUserData = Cookies.get(ADMIN_DATA);
        if (jsonUserData === undefined || !jsonUserData) return null;

        return JSON.parse(jsonUserData);
    } catch (err) {
        return undefined;
    }
};