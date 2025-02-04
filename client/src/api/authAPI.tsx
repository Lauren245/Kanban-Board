import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // DONE: make a POST request to the login route
  try{
    const response = await fetch('auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo)
    });

    if(!response.ok){
      throw new Error('Failed to retrieve user data. Check the network tab.');
    }

    const data = await response.json();

    return data;
    
  }catch(error){
    console.error(`Error from user login: ${error}`);
    return Promise.reject('Unable to fetch user info');
  }
}

export { login };
