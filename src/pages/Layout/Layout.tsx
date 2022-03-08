import { TabBar } from 'antd-mobile';
import styles from './index.module.scss';

import Icon from '@/components/Icon';

const tabs = [
  { path: '/home', icon: 'iconbtn_home', text: '首页' },
  { path: '/home/question', icon: 'iconbtn_qa', text: '问答' },
  { path: '/home/video', icon: 'iconbtn_video', text: '视频' },
  { path: '/home/profile', icon: 'iconbtn_mine', text: '我的' },
];

const Layout = () => (
  <div className={styles.root}>
    <TabBar className="tab-bar">
      {tabs.map(item => (
        <TabBar.Item key={item.path} icon={<Icon type={item.icon} className="tab-bar-item-icon" />} title={item.text} />
      ))}
    </TabBar>
  </div>
);

export default Layout;
