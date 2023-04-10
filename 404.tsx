
import Link from 'next/link'
import Image from 'next/image'


import Index from './index';

import { useRouter } from 'next/router'
export default function PageNotFound() {
const router =useRouter();

    function buttonHandler()
    {
        router.push('/')
    }

    return (
      <>
        <Index/>
      </>
    )
  }
  