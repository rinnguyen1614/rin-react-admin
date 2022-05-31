import { API_ENDPOINT, KEY_IDENTITY } from "../../constants";
import { Identity } from "../../types";
import { fetchJsonFromConfig } from "../../utils/fetch";

export const getIdentityStore: () => Promise<Identity> = () => {
  try {
    const identity = JSON.parse(
      localStorage.getItem(KEY_IDENTITY) ?? ""
    ) as Identity;
    return Promise.resolve(identity);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getIdentity: () => Promise<Identity> = async () => {
  const response = await fetchJsonFromConfig()(
    `${API_ENDPOINT}/account/profile`,
    {
      method: "GET",
    }
  );

  return Promise.resolve(response.json.data);
  /*{
        id: 'user',
        fullName: 'Jane Doe',
        avatar:
    }*/
};
