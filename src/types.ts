import { DataProvider, Identifier, RaRecord, UserIdentity } from "ra-core";

export type Record = RaRecord;

export interface RecordMap<RecordType extends Record = Record> {
  // Accept strings and numbers as identifiers
  [id: string]: RecordType;
  [id: number]: RecordType;
}

export interface TreeState {
  [name: string]: {
    data: RecordMap;
    rootIds: Identifier[];
    expandeds: Identifier[];
    loaded: boolean;
  };
}
export interface ReduxState {
  tree: TreeState;

  // leave space for custom reducers
  [key: string]: any;
}

// provider

type roleProvider = {
  assignPermissions: (params: any) => Promise<any>;
};

export type RoleProvider = roleProvider | DataProvider;

export interface AppState {
  // theme: ThemeName;
  custom: string;
}

export type AppConfig = {};

export interface IdentityState {
  identity: Identity;
}

export interface Identity extends UserIdentity {
  email: string;
}

export type OrderStatus = "ordered" | "delivered" | "cancelled";

declare global {
  interface Window {
    restServer: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: (traceOptions: object) => Function;
  }
}

export interface Tree extends Record {
  name: string;
  children?: Tree[];
  parent_id?: Identifier;
  all_parent_ids: Identifier[];
  all_children_ids: Identifier[];
  [key: string]: any;
}

export type RequestMethods = "GET" | "POST" | "PUT" | "DELETE";

export interface Resource extends Record {
  name: string;
  children?: Tree[];
  parent_id?: Identifier;
  slug: string;
  method: string;
  path: string;
}

export interface Menu extends Record {
  name: string;
  children?: Menu[];
  parent_id?: Identifier;
  slug: string;
  method: string;
  path: string;
}

export interface Permission extends Record {
  name: string;
  actions: string[];
}
