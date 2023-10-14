import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'

import getFields from 'lib/auth'
import Button from 'components/button'
import Input from 'components/input'
import Spinner from 'components/spinner'

import GoogleIcon from 'assets/google.svg'
import GithubIcon from 'assets/github-2.svg'

import stl from './SignUp.module.scss'

interface Props {
  initVals: any
  method: string
  setMethod: (arg: string) => void
}

const AuthForm = ({ method, initVals, setMethod }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    isLoading && setTimeout(() => setIsLoading(false), 1000)
  }, [isLoading])

  useEffect(() => setIsLoading(true), [method])

  return (
    <div className={stl.signup}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2>{method === 'signin' ? 'Sign In' : 'Create Account'}</h2>
          <div className={stl.otherSignIn}>
            <Button
              title="Continue with"
              icon={<GoogleIcon />}
              variant="signup"
              handleOnClick={() => console.log('Continue with Google...')}
            />
            <Button
              title="Continue with"
              icon={<GithubIcon />}
              variant="signup"
              handleOnClick={() => console.log('Continue with Github...')}
            />
          </div>
          <div className={stl.divider}></div>
          <Formik
            initialValues={initVals}
            onSubmit={(values, actions) => {
              console.log(values)
              actions.resetForm()
            }}
          >
            <Form>
              {getFields(method).map((item, i) => (
                <Input
                  key={i}
                  width="100%"
                  placeholder={item.placeholder}
                  label={item.label}
                  id={item.id}
                  type={item.type}
                  customClass={stl.input}
                />
              ))}
              {method === 'signin' && (
                <span className={stl.forgotPass}>Forgot password?</span>
              )}
              <Button
                title={method === 'signin' ? 'Log In' : 'Create Account'}
                width="100%"
                type="submit"
              />
            </Form>
          </Formik>
          <div className={stl.desc}>
            {method === 'signin'
              ? "Don't have an account?"
              : 'Already have an account?'}{' '}
            <span
              className={stl.forgotPass}
              onClick={() =>
                (method === 'signup' && setMethod('signin')) ||
                (method === 'signin' && setMethod('signup'))
              }
            >
              {method === 'signin' ? 'Sign Up' : 'Log In'}
            </span>
          </div>
        </>
      )}
    </div>
  )
}

export default AuthForm
