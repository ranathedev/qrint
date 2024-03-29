import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Formik, Form } from 'formik'

import getForms from 'lib/forms'
import getIcons from 'lib/getIcons'
import Button from 'components/button'
import Input from 'components/input'
import Spinner from 'components/spinner'

import stl from './Form.module.scss'

interface Props {
  title: string
  initialVals: { text: string }
  setValue: (arg: string) => void
  generate: (arg: string) => void
}

const CustomForm = ({ title, initialVals, setValue, generate }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  // useEffect(() => {
  //   setIsLoading(true)
  //   setTimeout(() => setIsLoading(false), 1500)
  // }, [initialVals])

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={stl.formContainer}>
      {/* <div className={stl.title}>
        {getIcons(title)}
        <span className={stl.text}>{title}</span>
      </div> */}
      <Formik
        initialValues={initialVals}
        validateOnBlur={true}
        onSubmit={(values, actions) => {
          actions.resetForm()
          setValue(values.text)
          generate(values.text)
        }}
      >
        <Form className={clsx(stl.form, title === 'VCARD' && stl.vcardForm)}>
          {getForms(title)?.map(field => (
            <Input
              key={field.id}
              id={field.id}
              placeholder={field.placeholder}
              label={field.label}
              type={field.type}
              message={message}
              setMessage={setMessage}
            />
          ))}
          <div className={stl.btnContainer}>
            <Button title="Generate" type="submit" width="120px" />
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default CustomForm
