import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import NavItemCard from '../../components/NavItemCard';
import navList from '../../data/navList';
import styles from './index.module.css';
import clsx from 'clsx';
function NavPage() {
  return (
    <div className="container">
      <div className={clsx('tw-mt-9', styles.linkGrid)}>
        {
          // 复制数组第一项10次
          Array(10).fill(navList[0]).map((item, index) => {
          // navList.map((item, index) => {
            return (<>
              <NavItemCard key={index} navItem={item}></NavItemCard>
            </>)
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
