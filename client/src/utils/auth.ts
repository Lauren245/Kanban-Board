import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
  }

  loggedIn() {
    // Done: return a value that indicates if the user is logged in
    const token = this.getToken();
    return token;
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
  }

  getToken(): string {
    // TODO: return the token
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    // DONE: set the token to localStorage
    localStorage.setItem('id_token', idToken);
    // DONE: redirect to the home page
    window.location.assign('/');
  }

  logout() {
    // DONE: remove the token from localStorage
    localStorage.removeItem(`id_token`);
    // DONE: redirect to the login page
    window.location.assign('/');
  }
}

export default new AuthService();
