import css from '../FeedbackOptions/FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = Object.keys(options);
  return (
    <div className={css.options}>
      {buttons.map(option => (
        <button
          className={css.btn}
          key={option}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
};
