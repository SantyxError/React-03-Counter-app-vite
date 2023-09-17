import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

  return (
    <>
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes={
title: PropTypes.string.isRequired,
subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps ={
  subTitle:"No lo hay, no",
  name: "Santiago Benito",
  title: "No hay titulo",

}