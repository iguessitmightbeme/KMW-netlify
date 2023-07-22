import React from 'react'; 
import ReactMarkdown from 'react-markdown'; 
import remarkGFM from 'remark-gfm'; 
import dynamic from 'next/dynamic';

const MyHelmet = dynamic(() => import('../components/ui/MyHelmet'))

import { cookieSeo } from '../files/legal';
import CookieContent from '../files/cookies.md'


const Cookies: React.FC<{content: string}> = ({ content }) => {

    return (
        <div className='flex justify-center items-center'>
            <MyHelmet seo={cookieSeo} />
            
            <div className='p-4'>
                <ReactMarkdown
                    className='prose prose-slate'
                    remarkPlugins={[remarkGFM]}
                >{CookieContent}</ReactMarkdown>
            </div>
        </div>
    )
}

export default Cookies; 