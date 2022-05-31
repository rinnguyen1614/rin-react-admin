
import { API_ENDPOINT } from "../../constants";
import { fetchJsonFromConfig } from "../../utils/fetch";

export const changePassword: (params: any) => Promise<any> = async ({ currentPassword, newPassword }) => {

    await fetchJsonFromConfig()(`${API_ENDPOINT}/account/password`, {
        method: 'PUT',
        body: JSON.stringify({ current_password: currentPassword, new_password: newPassword }),
    });

    return Promise.resolve();
}
