import css from '../Statistics/Statistics.module.css';
import { Notification } from '../Notification/Notification';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h4 className={css.title}>Statistic</h4>
      {total === 0 && <Notification message="There is no feedback" />}
      {total !== 0 && (
        <ul className={css.list}>
          <li className={css.item}>Good: {good}</li>
          <li className={css.item}>Neutral: {neutral}</li>
          <li className={css.item}>Bad: {bad}</li>
          <li className={css.item}>Total: {total}</li>
          <li className={css.item}>Positive feedback: {positivePercentage}%</li>
        </ul>
      )}
    </>
  );
};
