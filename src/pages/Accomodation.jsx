import styled from "styled-components";
import { useParams, Navigate } from "react-router-dom";
import datas from "../data/data";
import Rating from "../components/Rating";
import HostName from "../components/HostName";
import Slideshow from "../components/Slideshow";

import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import theme from "../theme";

const ContainerAccomodation = styled.div`
  padding-top: 20px;
`;
const ContentAccomodation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 auto;
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;
const InfosAcommodation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 36px;
    font-weight: 400;
    @media ${theme.breakpoints.mobile} {
      font-size: 18px;
    }
  }
  p {
    font-size: 18px;
    color: #000;
    padding-bottom: 10px;
    @media ${theme.breakpoints.mobile} {
      font-size: 14px;
    }
  }
`;
const ContentHost = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const TagsList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  font-size: 14px;
`;

const Host = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  @media ${theme.breakpoints.mobile} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }
`;
const Avatar = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }
`;
const RatingContent = styled.div`
  display: flex;
  gap: 10px;
`;

const ContainerCollapse = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 70px;
  margin: 30px auto;
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
    gap: 30px;
  }
`;
const ItemCollapse = styled.div`
  width: 50%;
  @media ${theme.breakpoints.mobile} {
    width: 100%;
  }
`;

function Accomodation() {
  const { id } = useParams();
  const dataAccomodation = datas?.find((data) => data.id === id);
  if (!dataAccomodation) {
    return <Navigate to="/not-found" />;
  }

  const {
    host,
    rating,
    description,
    equipments,
    title,
    location,
    tags,
    pictures,
  } = dataAccomodation;

  return (
    <>
      <Slideshow images={pictures} />
      <ContainerAccomodation>
        <ContentAccomodation>
          <InfosAcommodation>
            <h2>{title}</h2>
            <p>{location}</p>
            <TagsList>
              {tags.map((tag, index) => (
                <li key={index}>
                  <Tag tag={tag} />
                </li>
              ))}
            </TagsList>
          </InfosAcommodation>
          <Host>
            <ContentHost>
              <HostName name={host.name} />
              <Avatar>
                <img src={host.picture} alt="Host of this accomodation" />
              </Avatar>
            </ContentHost>

            <RatingContent>
              <Rating rating={rating} />
            </RatingContent>
          </Host>
        </ContentAccomodation>
      </ContainerAccomodation>
      <ContainerCollapse>
        <ItemCollapse>
          <Collapse title="Description" content={description} />
        </ItemCollapse>
        <ItemCollapse>
          <Collapse title="Équipements" content={equipments} />
        </ItemCollapse>
      </ContainerCollapse>
    </>
  );
}

export default Accomodation;
