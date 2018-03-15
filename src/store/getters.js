export const getMoveLog = ({ moveLog }) =>
  moveLog.sort((a, b) => a.dateTimeStamp - b.dateTimeStamp).reverse();
