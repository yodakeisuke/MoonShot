const awsConfig = {
  identityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITYPOOLID,
  region: process.env.NEXT_PUBLIC_COGNITO_REGION,
  userPoolId: process.env.NEXT_PUBLIC_COGNITO_USERPOOLID,
  userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_WEBCLIENTID,
};

export default awsConfig;
