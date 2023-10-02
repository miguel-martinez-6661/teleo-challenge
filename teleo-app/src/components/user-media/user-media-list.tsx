import { UserMedia } from "../../types/user-types";
import { UserMediaListContainer, UserMediaListItem } from "./user-media.styled";

interface UserMediaList {
  data: UserMedia[];
}

export const UserMediaList = ({ data }: UserMediaList) => {
  return (
    <UserMediaListContainer>
      {data.map((media) => (
        <UserMediaListItem key={media.id} src={media.url} alt={media.url} />
      ))}
    </UserMediaListContainer>
  );
};
