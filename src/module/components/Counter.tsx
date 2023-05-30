import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  COUNTER_MINUS_BUTTON_CHAR,
  COUNTER_PLUS_BUTTON_CHAR,
} from '@/constants/counters';
import { CounterProps } from '@/interfaces/counters';
import { ThemeEnum } from '@/enums/theme';
import { ThemeType } from '@/interfaces/theme';

const Counter = ({
  value = 0,
  theme = ThemeEnum.Light,
}: CounterProps): ReactElement => {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const onMinus = (): void => {
    setCounter((prev: number) => prev - 1);
  };

  const onPlus = (): void => {
    setCounter((prev: number) => prev + 1);
  };

  return (
    <CounterContainer theme={theme}>
      <CounterTitle theme={theme}>Counter: {counter}</CounterTitle>
      <CounterMinusButton onClick={onMinus}>
        {COUNTER_MINUS_BUTTON_CHAR}
      </CounterMinusButton>
      <CounterPlusButton onClick={onPlus}>
        {COUNTER_PLUS_BUTTON_CHAR}
      </CounterPlusButton>
    </CounterContainer>
  );
};

const CounterContainer = styled.div<ThemeType>`
  background-color: ${({ theme }: ThemeType): string =>
    theme === ThemeEnum.Dark ? '#0d0d0d' : '#ffffff'};
  padding: 16px 24px;
  border: 1px solid
    ${({ theme }: ThemeType): string =>
      theme === ThemeEnum.Dark ? '#ffffff' : '#0d0d0d'};
  border-radius: 4px;
`;

const CounterTitle = styled.h1<ThemeType>`
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  color: ${({ theme }: ThemeType): string =>
    theme === ThemeEnum.Dark ? '#ffffff' : '#0d0d0d'};
`;

const CounterButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 24px;
  border-radius: 4px;
  margin-right: 16px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const CounterMinusButton = styled(CounterButton)`
  background-color: red;
`;

const CounterPlusButton = styled(CounterButton)`
  background-color: green;
`;

export default Counter;
