import Axios from 'axios';

const developmentDB = process.env.REACT_APP_DB;

export const loginAdminToDB = async (admin) => {
    try {
        const res = await Axios.post(developmentDB + "/portfolio/admin/login", admin);
        console.log(res.data)
        return res.data;
    } catch (err) {
        return err.response.data.message;
    }
};
export const logoutAdminToDB = async (token) => {
    console.log(token)
    try {
        const res = await Axios.post(developmentDB + "/portfolio/admin/logout", { token }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data;
    } catch (err) {
        return err.response.data.message;
    }
};

