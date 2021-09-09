import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface diffObject {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export default function Timer({ initialDate }: any) {
  const [diff, setDiff] = useState<diffObject>({
    year: initialDate.getUTCFullYear() - 1970,
    month: initialDate.getUTCMonth(),
    day: initialDate.getUTCDate() - 1,
    hour: initialDate.getUTCHours(),
    minute: initialDate.getUTCMinutes(),
    second: initialDate.getUTCSeconds(),
  });
  const [over, setOver] = useState(false);

  const futureDate: Date = new Date(2021, 8, 9, 22, 10);
  const getDateDiff = (date1: Date, date2: Date) => {
    const diff: Date = new Date(date2.getTime() - date1.getTime());

    let times: diffObject = {
      year: diff.getUTCFullYear() - 1970,
      month: diff.getUTCMonth(),
      day: diff.getUTCDate() - 1,
      hour: diff.getUTCHours(),
      minute: diff.getUTCMinutes(),
      second: diff.getUTCSeconds(),
    };
    return times;
  };

  const formatDate = (date) => {
    let d = new Date(date),
      month = (d.getMonth() + 1).toString(),
      day = d.getDate().toString(),
      year = d.getFullYear().toString();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDiff(getDateDiff(new Date(), futureDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Clock>
        {diff.hour} : {diff.minute} : {diff.second}
      </Clock>
    </div>
  );
}

const Clock = styled.div`
  font-size: 5.5rem;
  text-align: center;
  line-height: 1;
  color: #ffffff;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
    #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
  color: #ffffff;

  @media (min-width: 280px) and (max-width: 450px) {
    font-size: 3rem;
    margin-bottom: 1vh;
  }

  @media (min-width: 450px) and (max-width: 768px) {
    font-size: 4rem;
    margin-bottom: 1vh;
  }
`;
