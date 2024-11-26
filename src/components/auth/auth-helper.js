const authenticate = (token, username, cb)=>{
    if (typeof window !== "undefined") {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('username', username)
    }
    cb();
  }

const isAuthenticated = () => {
    if (typeof window === "undefined") {
        return false;
    }
    return !!sessionStorage.getItem('token');
}

const getToken = () => {
    if (typeof window === "undefined") {
        return false;
    }
    return sessionStorage.getItem('token');
}

const getUsername = () => {
    if (typeof window === "undefined") {
        return false;
    }
    return sessionStorage.getItem('username');
}

const clearJWT = () => {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
    }
}

export { authenticate, isAuthenticated, getToken, getUsername, clearJWT }