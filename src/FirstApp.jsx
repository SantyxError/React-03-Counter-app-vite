import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle}) => {

  return (
    <>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </>
  )
}

FirstApp.propTypes={
title: PropTypes.string.isRequired,
subTitle: PropTypes.number.isRequired,
}