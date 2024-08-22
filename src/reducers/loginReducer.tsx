export const adminDataInitialState = {
    admin:null,
    token:""
};

const loginReducer = (adminData, action) => {
    switch (action.type) {
        case "LOGIN_ADMIN":
            return {admin:action.admin,token:action.token};
        case 'LOGOUT_ADMIN':
            return {
                admin:null,
                token:""
            };
        default:
            return {...adminData};
    }
};

export default loginReducer;