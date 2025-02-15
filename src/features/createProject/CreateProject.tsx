import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HomeButton from "../../components/HomeButton";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlineReload } from "react-icons/ai";

const CreateProject: React.FC = () => {
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // フォームデータの送信や処理をここで行います
    setIsFormSubmitted(true);
  };

  const saveProject = () => {
    // データベースを更新
    const projectId: string = "1";
    navigate(`/project/${projectId}`);
  };

  return (
    <>
      <HomeButton />
      <PageTitle>新規作成</PageTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">作品名</label>
          <input
            id="title"
            {...register("title", { required: "作品名は必須です" })}
          />
          {errors.title && (
            <p>
              {typeof errors.title.message === "string" && errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="description">編み方テキスト</label>
          <IoMdHelpCircleOutline />
          <textarea
            id="description"
            {...register("description", {
              required: "編み方テキストは必須です",
            })}
            placeholder="テキストを入力"
          />
          {errors.description && (
            <p>
              {typeof errors.description.message === "string" &&
                errors.description.message}
            </p>
          )}
        </div>

        <button type="submit"><AiOutlineReload />編み図出力</button>
        <Button
          color="secondary"
          onClick={saveProject}
          disabled={!isFormSubmitted}
        >
          保存
        </Button>
      </form>
    </>
  );
};

export default CreateProject;
