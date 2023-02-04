import Head from 'next/head';
import { NextPage } from 'next';


const Custom404Page: NextPage = () => {
      return (
            <>
                  <Head>
                        <title>The page you were looking for doesn't exist | 404</title>
                  </Head>
                  <div>
                        404
                  </div>
            </>
      )
}

export default Custom404Page;