import { useQuery } from "@apollo/client";
import { USER_MEDIA_QUERY } from "../queries/user-queries";
import {
  Container,
  UserMediaErrorMessage,
  UserMediaHeader,
} from "../components/user-media/user-media.styled";
import { UserMedia } from "../types/user-types";
import { UserMediaList } from "../components/user-media/user-media-list";

export const UserMediaPage = () => {
  const { data, loading, error } = useQuery<{ userMedia: UserMedia[] }>(
    USER_MEDIA_QUERY
  );

  if (loading) return "Loading...";

  return (
    <Container>
      <UserMediaHeader>Julia's Media Files</UserMediaHeader>
      {!!error && (
        <UserMediaErrorMessage>{error.message}</UserMediaErrorMessage>
      )}
      <UserMediaList data={data?.userMedia || []} />
    </Container>
  );
};
