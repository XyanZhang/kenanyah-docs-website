import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import "tailwindcss/tailwind.css"
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner,  styles.scaleHeight, 'bg-center bg-banner')}>
      <div className="container">
        <h1 className={clsx(styles.title, "hero__title text-red-400")}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle shadow-sm', styles.textShadowLight)}>{siteConfig.tagline}</p>
        <div className={clsx(styles.buttons, 'mt-9')}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
              See the Nav Page
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      className="tainwind"
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
