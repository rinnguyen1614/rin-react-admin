import { KEY_IDENTITY } from "../../constants";
import { Identity } from "../../types"

export const updateIdentityStore: (identity: Identity) => Promise<void> = (identity) => {

    localStorage.setItem(KEY_IDENTITY, JSON.stringify(identity))

    return Promise.resolve();
}

export const updateIdentity: (identity: Identity) => Promise<Identity> = (identity) => {
    return Promise.resolve(identity);
}