export interface ILoadable<T, Y> {
  loading: boolean;
  data: null | T;
  error: null | Y;
}

export interface IStore {
  profile: ILoadable<any, string>;
  usersList: ILoadable<any, string>;
  user: ILoadable<any, string>;
}
