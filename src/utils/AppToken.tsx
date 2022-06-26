export class AppToken
{
    constructor() { }

    public static setToken(userToken : any) : void
    {
      sessionStorage.setItem(process.env.APP_CONFIG_STORAGE + 'token', JSON.stringify(userToken));
    }
    
    public static getToken() : string
    {
      const tokenString = sessionStorage.getItem(process.env.APP_CONFIG_STORAGE + 'token');
      if(tokenString == null) return '';
      const userToken = JSON.parse(tokenString || '');
      return userToken?.token;
    }
    
    public static removeToken() : void
    {
      sessionStorage.removeItem(process.env.APP_CONFIG_STORAGE + 'token');
      window.location.href = '/';
    }
}