import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const UserMediaHeader = styled.h1`
  font-size: 2.5em;
  text-align: center;
`;

export const UserMediaErrorMessage = styled.p`
  color: #bf4f74;
`;

export const UserMediaListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const UserMediaListItem = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  object-fit: cover;
`;
