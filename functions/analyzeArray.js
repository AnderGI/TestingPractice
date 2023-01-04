export const analyzeArray = (array) => {
    const avg = array.reduce((acc, curr) => acc + curr, 0) / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;
  
    return {
      average: avg,
      min,
      max,
      length,
    };
  };
  