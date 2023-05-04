import React from 'react';
import Link from '@docusaurus/Link';
export default function NavItemCard({ navItem }) {
  const { icon, title, description, url } = navItem;
  return (
    <div
      className="tw-p-1 tw-border-2 tw-border-red-900 tw-rounded card-hover"
    >
      <div className='tw-flex tw-flex-row tw-justify-start tw-items-center tw-flex-nowrap'>
        <img className="tw-w-14 tw-rounded" src={icon} alt="description" />
        <div className=" tw-text-left tw-pl-4">
          <Link to={url} target="_blank">
            <span className='tw-font-bold color-link'>{title}</span>
          </Link>
          {/* 使用tw 将下行代码 单行限制 ，省略 */}
          <p className='tw-text-sm tw-overflow-hidden tw-overflow-ellipsis tw-whitespace-nowrap tw-w-64'>{description}</p>
        </div>
      </div>
    </div>
  );
}
