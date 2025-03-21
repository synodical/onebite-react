import { useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const params = useParams();

  usePageTitle(`${params.id}번째 일기 쓰기`);
  return <div>{params.id}번 일기입니다~~</div>;
};
export default Edit;
