import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import NavItemCard from '../../components/NavItemCard';
import navList from '../../data/navList';
function NavPage() {
  return (
    <div className="container">
      <div className='tw-mt-9'>
        {
          navList.map((item, index) => {
            return <NavItemCard key={index} navItem={item}></NavItemCard>
          })
        }
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <NavPage />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
