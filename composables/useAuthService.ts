
export default () => {

  const register = async (username, password) => {
    if (!username || !password) return;

    const body = {
      "username": username,
      "password": password,
    };  
  
    return await useFetch('/api/auth/register', {
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
  
    return await useFetch('/api/auth/signin', {
      method: 'POST',
      body: body
    });
  }

  return { register, signin };
};