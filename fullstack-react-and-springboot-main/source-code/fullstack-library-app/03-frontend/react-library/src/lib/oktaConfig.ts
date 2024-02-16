export const oktaConfig = {
    clientId: '0oaf2u57drBzVcTC55d7',
    issuer: 'https://dev-15987651.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}