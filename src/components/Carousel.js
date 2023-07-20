import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

function RightArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        backgroundColor: '#97bf0f',
        color: 'white',
        height: '50px',
        paddingRight: '25px',
        alignItems: 'center',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
      }}
      onClick={onClick}
      tabIndex={0}
      onKeyPress={onClick}
      role="button"
      aria-label="Next"
    />
  );
}
function LeftArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        backgroundColor: '#97bf0f',
        color: 'white',
        height: '50px',
        paddingLeft: '25px',
        alignItems: 'center',
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }}
      onClick={onClick}
      tabIndex={0}
      onKeyPress={onClick}
      role="button"
      aria-label="Previous"
    />
  );
}

function Carousel({ rooms }) {
  const settings = {
    className: 'my-carousel',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ul className="rooms">
      <Slider
        className="my-carousel"
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        swipeToSlide={settings.swipeToSlide}
        nextArrow={settings.nextArrow}
        prevArrow={settings.prevArrow}
        initialSlide={settings.initialSlide}
        responsive={settings.responsive}
      >
        {rooms.map((room) => (
          <li className="room" key={room.id}>
            <img
              className="room-img"
              src={room.image}
              alt="room pic"
            />
            <p className="room-description">{room.description}</p>
            <p className="room-price">
              $
              {room.night_cost}
              <span>/night</span>
            </p>
          </li>
        ))}
      </Slider>
    </ul>
  );
}

RightArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({
    display: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.string,
    paddingRight: PropTypes.string,
    alignItems: PropTypes.string,
    borderTopRightRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderBottomRightRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderTopLeftRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderBottomLeftRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onClick: PropTypes.func,
};
RightArrow.defaultProps = {
  className: null,
  style: null,
  onClick() {},
};

LeftArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({
    display: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.string,
    paddingLeft: PropTypes.string,
    alignItems: PropTypes.string,
    borderTopRightRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderBottomRightRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderTopLeftRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderBottomLeftRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onClick: PropTypes.func,
};

LeftArrow.defaultProps = {
  className: null,
  style: null,
  onClick() {},
};

Carousel.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      night_cost: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Carousel;
