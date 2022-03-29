import { getUserProfile } from '@/store/actions/profile';
import useInitalState from '@/utils/use-inital-state';
import { List, Popup } from 'antd-mobile';
import classNames from 'classnames';
import { useState } from 'react';
import EditInput from './EditInput'

export type ModalType = '' | 'name' | 'intro';
type ModalInfo = {
  type: ModalType;
  isShow: boolean;
};
const { Item } = List;
const ProfileEdit = () => {
  const [modalInfo, setModalInfo] = useState<ModalInfo>({ type: '', isShow: false });
  const {
    state: { userProfile },
  } = useInitalState(getUserProfile, 'profile');
  const showModal = (type: ModalType) => {
    setModalInfo({ type, isShow: true });
  };
  const closeEditModal = () => setModalInfo({ type: '', isShow: false });
  return (
    <div className="wrapper">
      {/* 列表 */}
      <List className="profile-list">
        {/* 列表项 */}
        <Item
          extra={(
            <span className="avatar-wrapper">
              <img width={24} height={24} src={userProfile.photo} alt="" />
            </span>
          )}
          arrow
        >
          头像
        </Item>
        <Item arrow extra={userProfile.name} onClick={() => showModal('name')}>
          昵称
        </Item>
        <Item
          onClick={() => showModal('intro')}
          arrow
          extra={
            <span className={classNames('intro', userProfile.intro && 'normal')}>{userProfile.intro || '未填写'}</span>
          }
        >
          简介
        </Item>
      </List>

      <List className="profile-list">
        <Item arrow extra={userProfile.gender === 0 ? '男' : '女'}>
          性别
        </Item>
        <Item arrow extra={userProfile.birthday}>
          生日
        </Item>
      </List>

      <Popup visible={modalInfo.isShow} position="right">
        <EditInput type={modalInfo.type} closeEditModal={closeEditModal}/>
      </Popup>
    </div>
  );
};

export default ProfileEdit;
