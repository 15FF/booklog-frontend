
export default () => {

  const register = async (username, password) => {
    if (!username || !password) return;

    const body = {
      "username": username,
      "password": password,
    };  
  
    return await useFetch('http://localhost:3000/auth/register', {
      method: 'post',
      body: body,
    });
  };

  const signin = async (username, password) => {
    if (!username || !password) return;

    const body = {
      "username": username,
      "password": password,
    };  
  
    return await useFetch('http://localhost:3000/auth/signin', {
      method: 'POST',
      body: body
    });
  }

  return { register, signin };
};