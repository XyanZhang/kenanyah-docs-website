---
slug: Docusaurus 配置代码实时预览
title: Docusaurus 配置代码实时预览
authors: kenanyah
tags: [study, Docusaurus]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 安装

<!-- ```shell
npm install --save @docusaurus/theme-live-codeblock
``` -->
<Tabs>
  <TabItem value="npm" label="npm" default>
    npm install --save @docusaurus/theme-live-codeblock
  </TabItem>
  <TabItem value="yarn" label="yarn">
    yarn add @docusaurus/theme-live-codeblock
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    pnpm add @docusaurus/theme-live-codeblock
  </TabItem>
</Tabs>

---

你还需要将此插件添加到 docusaurus.config.js 配置文件中。

```js
module.exports = {
  // ...
  themes: ['@docusaurus/theme-live-codeblock'],
  // ...
};
```


```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```