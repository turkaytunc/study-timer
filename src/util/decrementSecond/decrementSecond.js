export const decrementSecond = (state, setState) => {
  let tm = setTimeout(() => {
    if (state.secondLeft > 0 && state.isPlaying) {
      setState({
        ...state,
        secondLeft: state.secondLeft - 1,
      });
    } else if (
      state.secondLeft <= 0 &&
      state.minuteLeft > 0 &&
      state.isPlaying
    ) {
      setState({
        ...state,
        minuteLeft: state.minuteLeft - 1,
        secondLeft: 59,
      });
    } else if (
      state.minuteLeft <= 0 &&
      state.secondLeft <= 0 &&
      state.isPlaying
    ) {
      if (state.isBreak) {
        setState({
          ...state,
          minuteLeft: state.sessionLength,
          isBreak: false,
        });
      } else {
        setState({
          ...state,
          minuteLeft: state.breakLength,
          isBreak: true,
          cycleCount: state.cycleCount + 1,
        });
      }
    }
  }, 1000);
  return tm;
};
