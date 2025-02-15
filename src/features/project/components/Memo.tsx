import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import Button from "../../../components/Button";
import Overlay from "../../../components/Overlay";

interface MemoProps {
  memo: string;
  closeMemo: () => void;
}

const Memo: React.FC<MemoProps> = ({ memo, closeMemo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMemo, setEditedMemo] = useState(memo);

  const startEditing = () => setIsEditing(true);
  const cancelEditing = () => {
    setIsEditing(false);
    setEditedMemo(memo);
  };
  const saveMemo = () => {
    // データベースを更新
    setIsEditing(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          zIndex: 5,
        }}
      >
        <div>
          <h3>作品メモ</h3>
          {!isEditing && <FaPen onClick={startEditing} />}
        </div>
        {isEditing ? (
          <>
            <textarea
              value={editedMemo}
              onChange={(e) => setEditedMemo(e.target.value)}
            />
            <div>
              <Button color="primary" onClick={saveMemo}>
                保存
              </Button>
              <Button color="secondary" onClick={cancelEditing}>
                キャンセル
              </Button>
            </div>
          </>
        ) : (
          <>
            <p>{editedMemo}</p>
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
