import React, { useEffect, useRef, useState } from "react";
import { FaPen } from "react-icons/fa";
import Button from "../../../components/Button";
import Overlay from "../../../components/Overlay";
import styles from "./Memo.module.scss";

interface MemoProps {
  memo: string;
  closeMemo: () => void;
}

const Memo: React.FC<MemoProps> = ({ memo, closeMemo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMemo, setEditedMemo] = useState(memo);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const startEditing = () => setIsEditing(true);
  const cancelEditing = () => {
    setIsEditing(false);
    setEditedMemo(memo);
  };

  const saveMemo = () => {
    // データベースを更新
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      const length = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(length, length);
    }
  }, [isEditing]);

  return (
    <>
      <div className={styles.memoContainer}>
        {isEditing ? (
          <>
            <div className={styles.editingHeader}>
              <h3>作品メモ</h3>
            </div>
            <textarea
              ref={textareaRef}
              value={editedMemo}
              onChange={(e) => setEditedMemo(e.target.value)}
            />
            <div className={styles.buttonContainer}>
              <Button color="secondary" onClick={cancelEditing}>
                キャンセル
              </Button>
              <Button color="primary" onClick={saveMemo}>
                保存
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.header}>
              <h3>作品メモ</h3>
              <FaPen onClick={startEditing} />
            </div>
            <div className={styles.textContainer}>
              <p>{editedMemo}</p>
            </div>
            <Button color="secondary" onClick={closeMemo}>
              閉じる
            </Button>
          </>
        )}
      </div>
      <Overlay />
    </>
  );
};

export default Memo;
