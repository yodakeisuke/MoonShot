import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from 'src/aws-exports';
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import Layout from '../Layout';
import { BrowserRouter, Navigate } from "react-router-dom"

Amplify.configure(awsExports);

const SignIn: NextPage = () => {

  return (
    <Layout title="myAchievement" >
      <Authenticator>
        {({signOut, user}) => (
          <div>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </Layout>
  )
}

export default SignIn
