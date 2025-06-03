import type { Prettify } from "./utils";

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Profile = User & {
  avatar: string
}

export type Session = {
  id: string;
} & Record<"session", string[]>;

// Prettify the Session object
type PrettySession = Prettify<Session>


// loose Auto complete
export type ModelNames =
  | "gpt-4o"
  | "o3-mini"
  | "claude-sonnet-3.7"
  | (string & {})


// Mapped Type
export type MappedProfil = {
  readonly [K in keyof User as `get${Capitalize<K>}`]: () => User[K]
}

// The IMIT
export type Actions = {
  login: {
    username: string;
    password: string
  };
  logout: { reason: string; };
  update: {id: string; data: unknown}
}

export type ActionAsUnion = {
  [K in keyof Actions]: Prettify<{
    type: K
  } & Actions[K]>
} [keyof Actions]

type LoginAction = Actions["login"]

