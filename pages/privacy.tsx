import ReactMarkdown from 'react-markdown'; 
import dynamic from 'next/dynamic';

const MyHelmet = dynamic(() => import('../components/ui/MyHelmet'))

import PrivacyContent from '../files/privacy.md'; 
import { privacySeo } from '../files/legal';


const Privacy = () => {
    return (
        <div className='flex justify-center items-center'>
            <MyHelmet seo={privacySeo} />
            
            <div className='p-4'>
                <ReactMarkdown
                    className='prose prose-slate'
                >{PrivacyContent}</ReactMarkdown>
            </div>
        </div>
    )
}

export default Privacy; 