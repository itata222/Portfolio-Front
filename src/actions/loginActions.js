export const loginAdminAction = ({admin,token}) => ({
    type: "LOGIN_ADMIN",
    admin,
    token
});

export const logoutAdminAction=()=>({
    type:'LOGOUT_ADMIN',
})
