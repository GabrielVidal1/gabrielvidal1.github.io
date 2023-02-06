import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';

const ProjectGrid = () => {
  const globalData = useGlobalData();
  const myPluginData = globalData;
  return <div className='bg-red-500'>
    
    qsd{JSON.stringify(myPluginData)}qsd
    
    </div>;
};

export default ProjectGrid;