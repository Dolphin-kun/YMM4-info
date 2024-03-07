import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: false, 
      destination: '/tips/page/1/', 
    },
  }
}