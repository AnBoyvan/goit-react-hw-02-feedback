import PropTypes from 'prop-types';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import css from '../Section/Section.module.css';

export const Section = ({
  title,
  options,
  onLeaveFeedback,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <section className={css.section}>
      <h3 className={css.title}>{title}</h3>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
