import { Link, useHistory } from 'react-router-dom';
import Icon from '@/components/Icon';
import styles from './index.module.scss';
import { getUser } from '@/store/actions/profile';
import useInitalState from '@/utils/use-inital-state';

const Profile = () => {
  const history = useHistory();
  const {
    state: { userInfo },
  } = useInitalState(getUser, 'profile');
  return (
    <div className={styles.root}>
      <div className="profile">
        {/* 个人信息 */}
        <div className="user-info">
          <div className="avatar">
            <img src={userInfo.photo} alt="" />
          </div>
          <div className="user-name">{userInfo.name}</div>
          <Link to="/profile/edit">
            个人信息 <Icon type="iconbtn_right" />
          </Link>
        </div>

        {/* 今日阅读 */}
        <div className="read-info">
          <Icon type="iconbtn_readingtime" />
          今日阅读
          <span>10</span>
          分钟
        </div>

        {/* 动态 - 对应的这一行 */}
        <div className="count-list">
          <div className="count-item">
            <p>{userInfo.art_count}</p>
            <p>动态</p>
          </div>
          <div className="count-item">
            <p>{userInfo.like_count}</p>
            <p>关注</p>
          </div>
          <div className="count-item">
            <p>{userInfo.fans_count}</p>
            <p>粉丝</p>
          </div>
          <div className="count-item">
            <p>{userInfo.follow_count}</p>
            <p>被赞</p>
          </div>
        </div>
      </div>

      {/* 更多服务 */}
      <div className="more-service">
        <h3>更多服务</h3>
        <div className="service-list">
          <div className="service-item">
            <Icon type="iconbtn_feedback" />
            <div>用户反馈</div>
          </div>
          <div className="service-item" onClick={() => history.push('/chat')}>
            <Icon type="iconbtn_xiaozhitongxue" />
            <div>小智同学</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
