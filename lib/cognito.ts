import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'

const poolData = {
  UserPoolId: 'ap-northeast-1_XXXXXXXXX', // ←自分のUserPool ID
  ClientId: 'XXXXXXXXXXXXXXXXXXXXXXXXXX', // ←App Client ID
}

const userPool = new CognitoUserPool(poolData)

export function login(
  email: string,
  password: string
): Promise<{ idToken: string; accessToken: string }> {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({ Username: email, Pool: userPool })
    const authDetails = new AuthenticationDetails({ Username: email, Password: password })

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        const idToken = result.getIdToken().getJwtToken()
        const accessToken = result.getAccessToken().getJwtToken()
        resolve({ idToken, accessToken })
      },
      onFailure: (err) => {
        reject(err)
      },
    })
  })
}
