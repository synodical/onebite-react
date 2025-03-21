import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return data.filter(
    (item) => beginTime <= item.createdAt && item.createdAt <= endTime
  );
};

const Home = () => {
  // 이 data 어디서 나옴
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  // new Date(year, month, day) 생성자는 월(month)이 0부터 시작하는 인덱스로 동작하는데,
  // 여기서 month 값이 12(즉, 1년의 최대 월을 초과)로 넘어가면 자동으로 다음 해로 넘어가고,
  // month가 -1이 되면 이전 해의 12월로 이동하는 특성이 있어.

  const monthlyData = getMonthlyData(pivotDate, data);
  console.log(monthlyData);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth}></Button>}
        rightChild={<Button text={">"} onClick={onIncreaseMonth}></Button>}
      ></Header>
      <DiaryList data={monthlyData}></DiaryList>
    </div>
  );
};

export default Home;
