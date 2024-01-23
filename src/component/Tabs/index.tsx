import styled from "@emotion/styled";
import List, { ListProps } from "../List";
import React, { useCallback, useMemo, useState } from "react";

export type TabsProps = {
  onChangeTab?: any;
  value: number;
} & ListProps;

export type TabItemWarraperProps = {
  active?: boolean;
};

const TabItemWarraper = styled.div<TabItemWarraperProps>`
  display: flex;
  border-color: #333;
  border-bottom: ${(p) => (p.active ? "2px solid " : "none")};
`;

const TabsContainer = styled(List)`
  border-bottom: 1px solid #eee;
  padding: 0 20px;
`;

const Tabs = ({ value = 0, children, onChangeTab, ...props }: TabsProps) => {
  const [selectValue, setSelectValue] = useState(value);

  const handleClick = useCallback(
    (index: number) => (event: any) => {
      if (onChangeTab) {
        onChangeTab(event, index);
      }
      setSelectValue(index);
    },
    [onChangeTab]
  );

  const subItems = useMemo(() => {
    return React.Children.map(children, (v: React.ReactNode, i) => {
      return (
        <TabItemWarraper active={selectValue == i} onClick={handleClick(i)}>
          {v}
        </TabItemWarraper>
      );
    });
  }, [children, selectValue]);

  return (
    <TabsContainer spacing={15} direction="row">
      {subItems}
    </TabsContainer>
  );
};

export default Tabs;
