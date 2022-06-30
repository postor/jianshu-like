import dynamic from 'next/dynamic';

const DLeftIcons = dynamic(() => import('./LeftIcons'), {
  ssr: false
})

export default DLeftIcons