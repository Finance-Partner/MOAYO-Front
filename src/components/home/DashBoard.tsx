import styled from "styled-components";
import DonutChart from "./dashboard/DonutChart";
import MonthIncome from "./dashboard/MonthIncome";
import MonthExpense from "./dashboard/MonthExpense";
import CategoryChart from "./dashboard/CategoryChart";
import FixIncome from "./dashboard/FixIncome";
import FixExpense from "./dashboard/FixExpense";
import Teammate from "./dashboard/Teammate";
import DashHistory from "./dashboard/DashHistory";
import { useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.8fr 0.8fr 1.6fr;
  grid-template-rows: 1.2fr 1.4fr 1.1fr; /* Adjust the height ratios for the rows */
  gap: 10px;
  width: 100%;
  height: 100%;
`;

const GridItem = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const Item1 = styled(GridItem)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;
const Item2 = styled(GridItem)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;
const Item3 = styled(GridItem)`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
`;
const Item4_6 = styled(GridItem)`
  grid-column: 4 / 5;
  grid-row: 1 / 3; /* Span across the first two rows */
`;

const Item5 = styled(GridItem)`
  grid-column: 1 / 4;
  grid-row: 2 / 3;
`;

const Item7 = styled(GridItem)`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
`;
const Item8 = styled(GridItem)`
  grid-column: 2 / 4;
  grid-row: 3 / 4;
`;
const Item9 = styled(GridItem)`
  grid-column: 4 / 5;
  grid-row: 3 / 4;
`;

const DashBoard = () => {
  return (
    <Wrapper>
      <Item1>
        <DonutChart />
      </Item1>
      <Item2>
        <MonthIncome />
      </Item2>
      <Item3>
        <MonthExpense />
      </Item3>
      <Item4_6>
        <DashHistory />
      </Item4_6>
      <Item5>
        <CategoryChart />
      </Item5>
      <Item7>
        <Teammate />
      </Item7>
      <Item8>
        <FixIncome />
      </Item8>
      <Item9>
        <FixExpense />
      </Item9>
    </Wrapper>
  );
};
export default DashBoard;
