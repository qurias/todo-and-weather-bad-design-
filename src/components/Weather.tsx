import React from 'react'
import styled from 'styled-components'
import StyledFlex from '../styled/StyledFlex';


const StyledWeatherContainer = styled(StyledFlex)`

`

const StyledCitySelection = styled.div`
  padding: 10px 20px;
  background: green;
  cursor: pointer;
  margin: 0px 10px;
`


interface CityContainer {
  backgroundImage?: string;
}

const StyledCityContainer = styled(StyledFlex)<CityContainer>`
  width: 1280px;
  height: 720px;
  background-image: url(${props => props.backgroundImage || 'img/moscow.jpg'});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 50px;
  position: relative;

  &:before {
    content: "";\
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.3;
    z-index: 1; 
  }
`;

const StyledCityTitle = styled.h2`
  font-size: 140px;
  color: white;
  margin-bottom: 50px;
  z-index: 2;
`;

const StyledCityDegrees = styled.p`
  font-size: 70px;
  color: white;
  margin: 0px 10px;
  z-index: 2;
`;

const StyledCityDegreesIcon = styled.img`
  width: 80px;
  height: auto;
  margin: 0px 10px;
  z-index: 2;
`;


const citySelection = [
  {
    id: 1,
    city: 'Москва',
    imageUrl: 'img/moscow.jpg',
    degress: '-10',
  },
  {
    id: 2,
    city: 'Токио',
    imageUrl: 'img/tokio.jpg',
    degress: '+7',
  },
  {
    id: 3,
    city: 'Нью-Йорк',
    imageUrl: 'img/niu.jpg',
    degress: '+12',
  },
  {
    id: 4,
    city: 'Пекин',
    imageUrl: 'img/pekin.jpg',
    degress: '+11',
  },
  {
    id: 5,
    city: 'Рим',
    imageUrl: 'img/rim.jpg',
    degress: '+18',
  },
];


const Weather = () => {

  const [city, setCity] = React.useState(citySelection[0]);

  const selectionCity = (id: number) => {
    setCity(citySelection[id - 1]);
  };

  return (
    <StyledWeatherContainer direction="column">
      <div>
        <StyledFlex justify="center">
          {citySelection.map((city) => (
            <StyledCitySelection
              key={city.id}
              onClick={() => selectionCity(city.id)}
            >
              {city.city}
            </StyledCitySelection>
          ))}
        </StyledFlex>
      </div>
      <div>
        <StyledCityContainer
          backgroundImage={city.imageUrl}
          justify="center"
          items="center"
          direction="column"
        >
          <StyledCityTitle>{city.city}</StyledCityTitle>
          <StyledFlex>
            <StyledCityDegreesIcon width={80} height={80} />
            <StyledCityDegrees>{city.degress}</StyledCityDegrees>
          </StyledFlex>
        </StyledCityContainer>
      </div>
    </StyledWeatherContainer>
  );
}

export default Weather