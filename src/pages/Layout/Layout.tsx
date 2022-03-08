import { TabBar } from 'antd-mobile';
import styles from './index.module.scss';

import Icon from '@/components/Icon';
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from '@/pages/Home';
import Question from '@/pages/Question';
import Profile from '@/pages/Profile';
import Video from '@/pages/Video';

const tabs = [
  { path: '/home', icon: 'iconbtn_home', text: '首页' },
  { path: '/home/question', icon: 'iconbtn_qa', text: '问答' },
  { path: '/home/video', icon: 'iconbtn_video', text: '视频' },
  { path: '/home/profile', icon: 'iconbtn_mine', text: '我的' },
];

const Layout = () => {
  const history = useHistory();
  const changeTab = (path: string) => {
    history.push(path);
  };
  return (
    <div className={styles.root}>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/home/question">
          <Question />
        </Route>
        <Route path="/home/video">
          <Video />
        </Route>
        <Route path="/home/profile">
          <Profile />
        </Route>
      </Switch>
      <TabBar activeKey={location.pathname} onChange={changeTab} className="tab-bar">
        {tabs.map(item => (
          <TabBar.Item
            key={item.path}
            icon={active => <Icon type={active ? `${item.icon}_sel` : item.icon} className="tab-bar-item-icon" />}
            title={item.text}
          />
        ))}
      </TabBar>
    </div>
  );
};

export default Layout;
