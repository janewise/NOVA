import React from 'react';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
  slidesToShow?: number;
}

const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick, currentSlide } = props;
  return (
    <div
      className={className}
      style={{ ...style, opacity: currentSlide === 0 ? 0.5 : 1, pointerEvents: currentSlide === 0 ? 'none' : 'auto' }}
      onClick={currentSlide === 0 ? undefined : onClick}
    />
  );
};

const NextArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick, slideCount, currentSlide, slidesToShow } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        opacity: currentSlide !== undefined && slideCount !== undefined && slidesToShow !== undefined && currentSlide >= slideCount - slidesToShow ? 0.5 : 1,
        pointerEvents: currentSlide !== undefined && slideCount !== undefined && slidesToShow !== undefined && currentSlide >= slideCount - slidesToShow ? 'none' : 'auto'
      }}
      onClick={currentSlide !== undefined && slideCount !== undefined && slidesToShow !== undefined && currentSlide >= slideCount - slidesToShow ? undefined : onClick}
    />
  );
};

export { PrevArrow, NextArrow };
