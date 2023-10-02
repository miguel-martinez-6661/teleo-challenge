import { fetchUserMedia } from "../services/user-services";

export const resolvers = {
  Query: {
    userMedia: fetchUserMedia,
  },
};
