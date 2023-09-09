import React, { useState, useEffect, useCallback } from 'react';
import { LoaderContainer, Rect, Container } from './Loader.styled';

const TIMER = 150;
const TRANSITION = 0.5;
const DEF_SIZE = 60;
const GUTTER = 5;

const initialState = {
  positions: {
    1: 'alpha',
    2: 'bravo',
    3: 'charlie',
    4: null,
    5: 'delta',
    6: 'echo',
    7: 'foxtrot',
  },
  stateNumber: 0,
};

const Loader = ({ size, style, center }) => {
  const [state, setState] = useState(initialState);

  const positionForTile = useCallback(
    radioCommand => {
      for (const position in state.positions) {
        const tile = state.positions[position];
        if (tile === radioCommand) {
          return position;
        }
      }
    },
    [state]
  );

  const tileIndexToMove = useCallback(() => {
    switch (state.stateNumber) {
      case 0:
        return 7;
      case 1:
        return 6;
      case 2:
        return 5;
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return 2;
      case 6:
        return 1;
      case 7:
        return 4;
      default:
        return 0;
    }
  }, [state]);

  const setNextState = useCallback(() => {
    const currentPositions = state.positions;
    const emptyIndex = positionForTile(null);
    const indexToMove = tileIndexToMove();
    const newPositions = {
      ...currentPositions,
      [indexToMove]: null,
      [emptyIndex]: currentPositions[indexToMove],
    };

    const currentState = state.stateNumber;
    const nextState = currentState === 7 ? 0 : currentState + 1;

    setState({ stateNumber: nextState, positions: newPositions });
  }, [state, positionForTile, tileIndexToMove]);

  useEffect(() => {
    const timerId = setInterval(setNextState, TIMER);

    return () => {
      clearInterval(timerId);
    };
  }, [setNextState]);

  const clipPathForPosition = position => {
    position = parseInt(position, 10);
    const SIZE = (100 - 2 * GUTTER) / 3;
    const VAR0 = '0% ';
    const VAR1 = SIZE + GUTTER + '% ';
    const VAR2 = 2 * SIZE + 2 * GUTTER + '% ';
    switch (position) {
      case 1:
        return `inset(${VAR1}${VAR2}${VAR1}${VAR0}round 5%)`;
      case 2:
        return `inset(${VAR0}${VAR2}${VAR2}${VAR0}round 5%)`;
      case 3:
        return `inset(${VAR0}${VAR1}${VAR2}${VAR1}round 5%)`;
      case 4:
        return `inset(${VAR1}${VAR1}${VAR1}${VAR1}round 5%)`;
      case 5:
        return `inset(${VAR2}${VAR1}${VAR0}${VAR1}round 5%)`;
      case 6:
        return `inset(${VAR2}${VAR0}${VAR0}${VAR2}round 5%)`;
      case 7:
        return `inset(${VAR1}${VAR0}${VAR1}${VAR2}round 5%)`;
      default:
        return '';
    }
  };

  const styles = {
    width: DEF_SIZE + 'px',
    height: DEF_SIZE + 'px',
    ...style,
  };

  if (size) {
    styles.width = size + 'px';
    styles.height = size + 'px';
  }

  let className = 'sw-loader__wrapper';
  if (center) {
    className += ' sw-loader__wrapper--center';
  }

  return (
    <LoaderContainer style={styles} className={className}>
      <Container>
        {['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot'].map(
          radioCommand => {
            const pos = positionForTile(radioCommand);
            return (
              <Rect
                key={'rect-' + radioCommand}
                clipPath={clipPathForPosition(pos)}
                transition={`${TRANSITION}s cubic-bezier(0.86, 0, 0.07, 1)`}
              />
            );
          }
        )}
      </Container>
    </LoaderContainer>
  );
};

export default Loader;
