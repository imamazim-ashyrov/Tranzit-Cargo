import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { styled } from "styled-components";

const GoogleMaps = () => {

  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  };
  const mapStyles = [
    {
      featureType: "road",
      stylers: [{ visible: "off" }],
    },
    {
      featureType: "poi",
      stylers: [{ visible: "off" }],
    },
  ];
  const center = {
    lat: 42.875953,
    lng: 74.57019,
  };
  return (
    <LoadScript>
      <StyledContainer>
        <GoogleMap
          mapContainerStyle={containerStyle}
          options={{ styles: mapStyles }}
          center={center}
          zoom={12}
        >
          <Marker position={center} />
        </GoogleMap>
      </StyledContainer>
    </LoadScript>
  );
};

export default GoogleMaps;

const StyledContainer = styled.div`
  width: 50%;
  height: 350px;
  @media (max-width: 1100px) {
    height: 320px;
  }
  @media (max-width: 1000px) {
    height: 300px;
  }
  @media (max-width: 900px) {
    height: 280px;
  }
  @media (max-width: 880px) {
    width: 100%;
    height: 350px;
    margin-top: 2em;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: 280px;
    margin-top: 2em;
  }
`