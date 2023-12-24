import React from 'react'
import ErrorPage from 'next/error'

import PageNotFound from './404'

const CustomErrorPage = ({ statusCode }: { statusCode: number }) => {
  if (statusCode === 404) {
    return <PageNotFound />
  }

  return <ErrorPage statusCode={statusCode} />
}

export default CustomErrorPage
