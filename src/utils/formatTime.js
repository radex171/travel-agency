export const formatTime = (time) => {
  
  if (!time || typeof time !== 'number' || time < 0){
    
    return null;
  }
  else {
  
    let second = Math.floor(time % 60);
    let minute = Math.floor((time / 60) % 60);
    let hour = Math.floor(time / 3600);
 
    let returnTime = (hour < 10 ? '0' + hour : hour) + ':'
    + (minute < 10 ? '0' + minute : minute) + ':'
    + (second < 10 ? '0' + second : second);
    
    return returnTime;

  }
};
  


