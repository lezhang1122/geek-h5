import { RootState } from '@/types/store';
import { Input, NavBar, TextArea } from 'antd-mobile';
import { InputRef } from 'antd-mobile/es/components/input';
import { TextAreaRef } from 'antd-mobile/es/components/text-area';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalType } from '../index';
import styles from './index.module.scss';
type Props = {
  closeEditModal: () => void;
  type: ModalType;
  onUpdate: (key: ModalType, value: string) => void;
};
const EditInput = ({ closeEditModal, type, onUpdate }: Props) => {
  const inputRef = useRef<InputRef>(null);
  const textareaRef = useRef<TextAreaRef>(null);
  const userProfile = useSelector((state: RootState) => state.profile.userProfile);
  const [value, setValue] = useState(type === 'name' ? userProfile.name : userProfile.intro);
  useEffect(() => {
    if (type === 'name') {
      inputRef.current?.focus();
    } else {
      textareaRef.current?.focus();
      document.querySelector('textarea')?.setSelectionRange(-1, -1);
    }
  }, [type]);
  return (
    <div className={styles.root}>
      <NavBar
        className="navbar"
        right={(
          <span className="commit-btn" onClick={() => onUpdate(type, value)}>
            提交
          </span>
        )}
        onBack={closeEditModal}
      >
        编辑{type === 'name' ? '昵称' : '简介'}
      </NavBar>

      <div className="edit-input-content">
        <h3>编辑{type === 'name' ? '昵称' : '简介'}</h3>

        {type === 'name' ? (
          <div className="input-wrap">
            <Input placeholder="请输入昵称" value={value} ref={inputRef} onChange={setValue} />
          </div>
        ) : (
          <TextArea
            className="textarea"
            placeholder="请输入简介"
            showCount
            maxLength={99}
            value={value}
            onChange={setValue}
            ref={textareaRef}
          />
        )}
      </div>
    </div>
  );
};

export default EditInput;
