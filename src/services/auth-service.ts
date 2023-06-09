import type { Auth0VueClient } from "@auth0/auth0-vue";
import { useAuth0 } from "@auth0/auth0-vue";

class AuthService {

  protected auth0: Auth0VueClient;

  constructor() {
    this.auth0 = useAuth0();
  }

  async isSignedIn(): Promise<boolean> {
    try {
      return (await this.auth0.isAuthenticated).value;
    } catch (error) {
      return false;
    }
  }

  async signIn(): Promise<boolean> {
    try {
      await this.auth0.loginWithRedirect();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async signOut(): Promise<boolean> {
    try {
      await this.auth0.logout({
        logoutParams: {
          returnTo: window.location.origin
        }
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export const useAuthService = function() {
  return new AuthService();
};
