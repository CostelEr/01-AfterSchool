import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type CacheControlScope = "PUBLIC" | "PRIVATE";

export type Continent = {
  __typename?: "Continent";
  code: Scalars["ID"];
  name: Scalars["String"];
  countries: Array<Country>;
};

export type ContinentFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: "Country";
  code: Scalars["ID"];
  name: Scalars["String"];
  native: Scalars["String"];
  phone: Scalars["String"];
  continent: Continent;
  capital?: Maybe<Scalars["String"]>;
  currency?: Maybe<Scalars["String"]>;
  languages: Array<Language>;
  emoji: Scalars["String"];
  emojiU: Scalars["String"];
  states: Array<State>;
};

export type CountryFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
  currency?: Maybe<StringQueryOperatorInput>;
  continent?: Maybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: "Language";
  code: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  native?: Maybe<Scalars["String"]>;
  rtl: Scalars["Boolean"];
};

export type LanguageFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: "Query";
  continents: Array<Continent>;
  continent?: Maybe<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  languages: Array<Language>;
  language?: Maybe<Language>;
};

export type QueryContinentsArgs = {
  filter?: Maybe<ContinentFilterInput>;
};

export type QueryContinentArgs = {
  code: Scalars["ID"];
};

export type QueryCountriesArgs = {
  filter?: Maybe<CountryFilterInput>;
};

export type QueryCountryArgs = {
  code: Scalars["ID"];
};

export type QueryLanguagesArgs = {
  filter?: Maybe<LanguageFilterInput>;
};

export type QueryLanguageArgs = {
  code: Scalars["ID"];
};

export type State = {
  __typename?: "State";
  code?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  country: Country;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["String"]>;
  glob?: Maybe<Scalars["String"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CacheControlScope: CacheControlScope;
  Continent: ResolverTypeWrapper<Continent>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  ContinentFilterInput: ContinentFilterInput;
  Country: ResolverTypeWrapper<Country>;
  CountryFilterInput: CountryFilterInput;
  Language: ResolverTypeWrapper<Language>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  LanguageFilterInput: LanguageFilterInput;
  Query: ResolverTypeWrapper<{}>;
  State: ResolverTypeWrapper<State>;
  StringQueryOperatorInput: StringQueryOperatorInput;
  Upload: ResolverTypeWrapper<Scalars["Upload"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Continent: Continent;
  ID: Scalars["ID"];
  String: Scalars["String"];
  ContinentFilterInput: ContinentFilterInput;
  Country: Country;
  CountryFilterInput: CountryFilterInput;
  Language: Language;
  Boolean: Scalars["Boolean"];
  LanguageFilterInput: LanguageFilterInput;
  Query: {};
  State: State;
  StringQueryOperatorInput: StringQueryOperatorInput;
  Upload: Scalars["Upload"];
  Int: Scalars["Int"];
};

export type CacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars["Int"]>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = CacheControlDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ContinentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Continent"] = ResolversParentTypes["Continent"]
> = {
  code?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  countries?: Resolver<
    Array<ResolversTypes["Country"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Country"] = ResolversParentTypes["Country"]
> = {
  code?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  native?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  continent?: Resolver<ResolversTypes["Continent"], ParentType, ContextType>;
  capital?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  languages?: Resolver<
    Array<ResolversTypes["Language"]>,
    ParentType,
    ContextType
  >;
  emoji?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  emojiU?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  states?: Resolver<Array<ResolversTypes["State"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Language"] = ResolversParentTypes["Language"]
> = {
  code?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  native?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  rtl?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  continents?: Resolver<
    Array<ResolversTypes["Continent"]>,
    ParentType,
    ContextType,
    RequireFields<QueryContinentsArgs, never>
  >;
  continent?: Resolver<
    Maybe<ResolversTypes["Continent"]>,
    ParentType,
    ContextType,
    RequireFields<QueryContinentArgs, "code">
  >;
  countries?: Resolver<
    Array<ResolversTypes["Country"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCountriesArgs, never>
  >;
  country?: Resolver<
    Maybe<ResolversTypes["Country"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCountryArgs, "code">
  >;
  languages?: Resolver<
    Array<ResolversTypes["Language"]>,
    ParentType,
    ContextType,
    RequireFields<QueryLanguagesArgs, never>
  >;
  language?: Resolver<
    Maybe<ResolversTypes["Language"]>,
    ParentType,
    ContextType,
    RequireFields<QueryLanguageArgs, "code">
  >;
};

export type StateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["State"] = ResolversParentTypes["State"]
> = {
  code?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  country?: Resolver<ResolversTypes["Country"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Upload"], any> {
  name: "Upload";
}

export type Resolvers<ContextType = any> = {
  Continent?: ContinentResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  State?: StateResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<
  ContextType = any
> = DirectiveResolvers<ContextType>;
