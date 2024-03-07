import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: false, 
      destination: 'https://ymm4-info.vercel.app/tips/page/1/', 
    },
  }
}