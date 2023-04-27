import React from 'react';
import Link from '@docusaurus/Link';
export default function NavItemCard({ navItem }) {
  const { icon, title, description, url } = navItem;
  return (
    <div
      className="tw-text-center tw-border-2 tw-border-red-900 tw-rounded hover:tw-shadow-nysm"
      to={url}
      target="_blank"
    >
      <div className='tw-flex tw-flex-row tw-justify-start tw-items-center tw-flex-nowrap'>
        <img className="tw-w-10 tw-rounded" src={icon} alt="description" />
        <div className="text--center padding-horiz--md">
          <Link to={url} target="_blank">
            <span className='tw-font-bold color-link'>{title}</span>
          </Link>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
