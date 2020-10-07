export const decrementSecond = (state, setState) => {
  const playSound = () => {
    let audio = new Audio(`${process.env.PUBLIC_URL}/sound/coin.ogg`);
    audio.play();
  };
  let time = document.hidden ? 500 : 1000;

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
      playSound();
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
  }, time);
  return tm;
};
