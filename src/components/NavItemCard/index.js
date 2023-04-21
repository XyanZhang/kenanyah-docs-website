import React from 'react';
import Link from '@docusaurus/Link';
export default function NavItemCard({ navItem }) {
  const { icon, title, description, url } = navItem;
  return (
    <div
      className="tw-border tw-rounded tw-h tw-flex tw-flex-row tw-justify-start tw-items-center tw-flex-nowrap hover:tw-shadow-nysm"
      to={url}
      target="_blank"
    >
      <img className="tw-w-10 tw-rounded" src={icon} alt="description" />
      <div className="text--center padding-horiz--md">
        <Link to={url} target="_blank">
          <span className='tw-font-bold color-link'>{title}</span>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}
