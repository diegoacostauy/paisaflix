export const formatTime = (duration: number) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours} hr ${minutes > 0 ? minutes + ' mins' : ''}`;
}
