import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    customers: <T = Customer[]>(args: { where?: CustomerWhereInput, orderBy?: CustomerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    addresses: <T = Address[]>(args: { where?: AddressWhereInput, orderBy?: AddressOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    devices: <T = Device[]>(args: { where?: DeviceWhereInput, orderBy?: DeviceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deviceTypes: <T = DeviceType[]>(args: { where?: DeviceTypeWhereInput, orderBy?: DeviceTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    actions: <T = Action[]>(args: { where?: ActionWhereInput, orderBy?: ActionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    elements: <T = Element[]>(args: { where?: ElementWhereInput, orderBy?: ElementOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    customer: <T = Customer | null>(args: { where: CustomerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    device: <T = Device | null>(args: { where: DeviceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deviceType: <T = DeviceType | null>(args: { where: DeviceTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    action: <T = Action | null>(args: { where: ActionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    element: <T = Element | null>(args: { where: ElementWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    customersConnection: <T = CustomerConnection>(args: { where?: CustomerWhereInput, orderBy?: CustomerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    addressesConnection: <T = AddressConnection>(args: { where?: AddressWhereInput, orderBy?: AddressOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    devicesConnection: <T = DeviceConnection>(args: { where?: DeviceWhereInput, orderBy?: DeviceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deviceTypesConnection: <T = DeviceTypeConnection>(args: { where?: DeviceTypeWhereInput, orderBy?: DeviceTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    actionsConnection: <T = ActionConnection>(args: { where?: ActionWhereInput, orderBy?: ActionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    elementsConnection: <T = ElementConnection>(args: { where?: ElementWhereInput, orderBy?: ElementOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCustomer: <T = Customer>(args: { data: CustomerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAddress: <T = Address>(args: { data: AddressCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDevice: <T = Device>(args: { data: DeviceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDeviceType: <T = DeviceType>(args: { data: DeviceTypeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAction: <T = Action>(args: { data: ActionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createElement: <T = Element>(args: { data: ElementCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCustomer: <T = Customer | null>(args: { data: CustomerUpdateInput, where: CustomerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDevice: <T = Device | null>(args: { data: DeviceUpdateInput, where: DeviceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDeviceType: <T = DeviceType | null>(args: { data: DeviceTypeUpdateInput, where: DeviceTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAction: <T = Action | null>(args: { data: ActionUpdateInput, where: ActionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateElement: <T = Element | null>(args: { data: ElementUpdateInput, where: ElementWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCustomer: <T = Customer | null>(args: { where: CustomerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDevice: <T = Device | null>(args: { where: DeviceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDeviceType: <T = DeviceType | null>(args: { where: DeviceTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAction: <T = Action | null>(args: { where: ActionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteElement: <T = Element | null>(args: { where: ElementWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCustomer: <T = Customer>(args: { where: CustomerWhereUniqueInput, create: CustomerCreateInput, update: CustomerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDevice: <T = Device>(args: { where: DeviceWhereUniqueInput, create: DeviceCreateInput, update: DeviceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDeviceType: <T = DeviceType>(args: { where: DeviceTypeWhereUniqueInput, create: DeviceTypeCreateInput, update: DeviceTypeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAction: <T = Action>(args: { where: ActionWhereUniqueInput, create: ActionCreateInput, update: ActionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertElement: <T = Element>(args: { where: ElementWhereUniqueInput, create: ElementCreateInput, update: ElementUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCustomers: <T = BatchPayload>(args: { data: CustomerUpdateInput, where?: CustomerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAddresses: <T = BatchPayload>(args: { data: AddressUpdateInput, where?: AddressWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDevices: <T = BatchPayload>(args: { data: DeviceUpdateInput, where?: DeviceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDeviceTypes: <T = BatchPayload>(args: { data: DeviceTypeUpdateInput, where?: DeviceTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyActions: <T = BatchPayload>(args: { data: ActionUpdateInput, where?: ActionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyElements: <T = BatchPayload>(args: { data: ElementUpdateInput, where?: ElementWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCustomers: <T = BatchPayload>(args: { where?: CustomerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAddresses: <T = BatchPayload>(args: { where?: AddressWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDevices: <T = BatchPayload>(args: { where?: DeviceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDeviceTypes: <T = BatchPayload>(args: { where?: DeviceTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyActions: <T = BatchPayload>(args: { where?: ActionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyElements: <T = BatchPayload>(args: { where?: ElementWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    customer: <T = CustomerSubscriptionPayload | null>(args: { where?: CustomerSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    address: <T = AddressSubscriptionPayload | null>(args: { where?: AddressSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    device: <T = DeviceSubscriptionPayload | null>(args: { where?: DeviceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    deviceType: <T = DeviceTypeSubscriptionPayload | null>(args: { where?: DeviceTypeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    action: <T = ActionSubscriptionPayload | null>(args: { where?: ActionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    element: <T = ElementSubscriptionPayload | null>(args: { where?: ElementSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Customer: (where?: CustomerWhereInput) => Promise<boolean>
  Address: (where?: AddressWhereInput) => Promise<boolean>
  Device: (where?: DeviceWhereInput) => Promise<boolean>
  DeviceType: (where?: DeviceTypeWhereInput) => Promise<boolean>
  Action: (where?: ActionWhereInput) => Promise<boolean>
  Element: (where?: ElementWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type Action implements Node {
  id: ID!
  type: String!
  date: String!
  device(where: DeviceWhereInput): Device!
  customer(where: CustomerWhereInput): Customer!
  elements(where: ElementWhereInput, orderBy: ElementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Element!]
  employee: String
  start: String
  end: String
  inspector: String
  results: String
  notes: String
}

"""A connection to a list of items."""
type ActionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ActionEdge]!
  aggregate: AggregateAction!
}

input ActionCreateInput {
  type: String!
  date: String!
  employee: String
  start: String
  end: String
  inspector: String
  results: String
  notes: String
  device: DeviceCreateOneWithoutActionsInput!
  customer: CustomerCreateOneInput!
  elements: ElementCreateManyInput
}

input ActionCreateManyWithoutDeviceInput {
  create: [ActionCreateWithoutDeviceInput!]
  connect: [ActionWhereUniqueInput!]
}

input ActionCreateWithoutDeviceInput {
  type: String!
  date: String!
  employee: String
  start: String
  end: String
  inspector: String
  results: String
  notes: String
  customer: CustomerCreateOneInput!
  elements: ElementCreateManyInput
}

"""An edge in a connection."""
type ActionEdge {
  """The item at the end of the edge."""
  node: Action!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ActionOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  date_ASC
  date_DESC
  employee_ASC
  employee_DESC
  start_ASC
  start_DESC
  end_ASC
  end_DESC
  inspector_ASC
  inspector_DESC
  results_ASC
  results_DESC
  notes_ASC
  notes_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ActionPreviousValues {
  id: ID!
  type: String!
  date: String!
  employee: String
  start: String
  end: String
  inspector: String
  results: String
  notes: String
}

type ActionSubscriptionPayload {
  mutation: MutationType!
  node: Action
  updatedFields: [String!]
  previousValues: ActionPreviousValues
}

input ActionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ActionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ActionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ActionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ActionWhereInput
}

input ActionUpdateInput {
  type: String
  date: String
  employee: String
  start: String
  end: String
  inspector: String
  results: String
  notes: String
  device: DeviceUpdateOneWithoutActionsInput
  customer: CustomerUpdateOneInput
  elements: ElementUpdateManyInput
}

input ActionUpdateManyWithoutDeviceInput {
  create: [ActionCreateWithoutDeviceInput!]
  connect: [ActionWhereUniqueInput!]
  disconnect: [ActionWhereUniqueInput!]
  delete: [ActionWhereUniqueInput!]
  update: [ActionUpdateWithWhereUniqueWithoutDeviceInput!]
  upsert: [ActionUpsertWithWhereUniqueWithoutDeviceInput!]
}

input ActionUpdateWithoutDeviceDataInput {
  type: String
  date: String
  employee: String
  start: String
  end: String
  inspector: String
  results: String
  notes: String
  customer: CustomerUpdateOneInput
  elements: ElementUpdateManyInput
}

input ActionUpdateWithWhereUniqueWithoutDeviceInput {
  where: ActionWhereUniqueInput!
  data: ActionUpdateWithoutDeviceDataInput!
}

input ActionUpsertWithWhereUniqueWithoutDeviceInput {
  where: ActionWhereUniqueInput!
  update: ActionUpdateWithoutDeviceDataInput!
  create: ActionCreateWithoutDeviceInput!
}

input ActionWhereInput {
  """Logical AND on all given filters."""
  AND: [ActionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ActionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ActionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
  date: String

  """All values that are not equal to given value."""
  date_not: String

  """All values that are contained in given list."""
  date_in: [String!]

  """All values that are not contained in given list."""
  date_not_in: [String!]

  """All values less than the given value."""
  date_lt: String

  """All values less than or equal the given value."""
  date_lte: String

  """All values greater than the given value."""
  date_gt: String

  """All values greater than or equal the given value."""
  date_gte: String

  """All values containing the given string."""
  date_contains: String

  """All values not containing the given string."""
  date_not_contains: String

  """All values starting with the given string."""
  date_starts_with: String

  """All values not starting with the given string."""
  date_not_starts_with: String

  """All values ending with the given string."""
  date_ends_with: String

  """All values not ending with the given string."""
  date_not_ends_with: String
  employee: String

  """All values that are not equal to given value."""
  employee_not: String

  """All values that are contained in given list."""
  employee_in: [String!]

  """All values that are not contained in given list."""
  employee_not_in: [String!]

  """All values less than the given value."""
  employee_lt: String

  """All values less than or equal the given value."""
  employee_lte: String

  """All values greater than the given value."""
  employee_gt: String

  """All values greater than or equal the given value."""
  employee_gte: String

  """All values containing the given string."""
  employee_contains: String

  """All values not containing the given string."""
  employee_not_contains: String

  """All values starting with the given string."""
  employee_starts_with: String

  """All values not starting with the given string."""
  employee_not_starts_with: String

  """All values ending with the given string."""
  employee_ends_with: String

  """All values not ending with the given string."""
  employee_not_ends_with: String
  start: String

  """All values that are not equal to given value."""
  start_not: String

  """All values that are contained in given list."""
  start_in: [String!]

  """All values that are not contained in given list."""
  start_not_in: [String!]

  """All values less than the given value."""
  start_lt: String

  """All values less than or equal the given value."""
  start_lte: String

  """All values greater than the given value."""
  start_gt: String

  """All values greater than or equal the given value."""
  start_gte: String

  """All values containing the given string."""
  start_contains: String

  """All values not containing the given string."""
  start_not_contains: String

  """All values starting with the given string."""
  start_starts_with: String

  """All values not starting with the given string."""
  start_not_starts_with: String

  """All values ending with the given string."""
  start_ends_with: String

  """All values not ending with the given string."""
  start_not_ends_with: String
  end: String

  """All values that are not equal to given value."""
  end_not: String

  """All values that are contained in given list."""
  end_in: [String!]

  """All values that are not contained in given list."""
  end_not_in: [String!]

  """All values less than the given value."""
  end_lt: String

  """All values less than or equal the given value."""
  end_lte: String

  """All values greater than the given value."""
  end_gt: String

  """All values greater than or equal the given value."""
  end_gte: String

  """All values containing the given string."""
  end_contains: String

  """All values not containing the given string."""
  end_not_contains: String

  """All values starting with the given string."""
  end_starts_with: String

  """All values not starting with the given string."""
  end_not_starts_with: String

  """All values ending with the given string."""
  end_ends_with: String

  """All values not ending with the given string."""
  end_not_ends_with: String
  inspector: String

  """All values that are not equal to given value."""
  inspector_not: String

  """All values that are contained in given list."""
  inspector_in: [String!]

  """All values that are not contained in given list."""
  inspector_not_in: [String!]

  """All values less than the given value."""
  inspector_lt: String

  """All values less than or equal the given value."""
  inspector_lte: String

  """All values greater than the given value."""
  inspector_gt: String

  """All values greater than or equal the given value."""
  inspector_gte: String

  """All values containing the given string."""
  inspector_contains: String

  """All values not containing the given string."""
  inspector_not_contains: String

  """All values starting with the given string."""
  inspector_starts_with: String

  """All values not starting with the given string."""
  inspector_not_starts_with: String

  """All values ending with the given string."""
  inspector_ends_with: String

  """All values not ending with the given string."""
  inspector_not_ends_with: String
  results: String

  """All values that are not equal to given value."""
  results_not: String

  """All values that are contained in given list."""
  results_in: [String!]

  """All values that are not contained in given list."""
  results_not_in: [String!]

  """All values less than the given value."""
  results_lt: String

  """All values less than or equal the given value."""
  results_lte: String

  """All values greater than the given value."""
  results_gt: String

  """All values greater than or equal the given value."""
  results_gte: String

  """All values containing the given string."""
  results_contains: String

  """All values not containing the given string."""
  results_not_contains: String

  """All values starting with the given string."""
  results_starts_with: String

  """All values not starting with the given string."""
  results_not_starts_with: String

  """All values ending with the given string."""
  results_ends_with: String

  """All values not ending with the given string."""
  results_not_ends_with: String
  notes: String

  """All values that are not equal to given value."""
  notes_not: String

  """All values that are contained in given list."""
  notes_in: [String!]

  """All values that are not contained in given list."""
  notes_not_in: [String!]

  """All values less than the given value."""
  notes_lt: String

  """All values less than or equal the given value."""
  notes_lte: String

  """All values greater than the given value."""
  notes_gt: String

  """All values greater than or equal the given value."""
  notes_gte: String

  """All values containing the given string."""
  notes_contains: String

  """All values not containing the given string."""
  notes_not_contains: String

  """All values starting with the given string."""
  notes_starts_with: String

  """All values not starting with the given string."""
  notes_not_starts_with: String

  """All values ending with the given string."""
  notes_ends_with: String

  """All values not ending with the given string."""
  notes_not_ends_with: String
  device: DeviceWhereInput
  customer: CustomerWhereInput
  elements_every: ElementWhereInput
  elements_some: ElementWhereInput
  elements_none: ElementWhereInput
}

input ActionWhereUniqueInput {
  id: ID
}

type Address {
  country: String!
  city: String!
  street: String
  building: String!
  postCode: String!
  postDepartment: String
}

"""A connection to a list of items."""
type AddressConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  country: String!
  city: String!
  street: String
  building: String!
  postCode: String!
  postDepartment: String
}

input AddressCreateOneInput {
  create: AddressCreateInput
}

"""An edge in a connection."""
type AddressEdge {
  """The item at the end of the edge."""
  node: Address!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AddressOrderByInput {
  country_ASC
  country_DESC
  city_ASC
  city_DESC
  street_ASC
  street_DESC
  building_ASC
  building_DESC
  postCode_ASC
  postCode_DESC
  postDepartment_ASC
  postDepartment_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AddressPreviousValues {
  country: String!
  city: String!
  street: String
  building: String!
  postCode: String!
  postDepartment: String
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AddressSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AddressSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AddressSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
}

input AddressUpdateDataInput {
  country: String
  city: String
  street: String
  building: String
  postCode: String
  postDepartment: String
}

input AddressUpdateInput {
  country: String
  city: String
  street: String
  building: String
  postCode: String
  postDepartment: String
}

input AddressUpdateOneInput {
  create: AddressCreateInput
  delete: Boolean
  update: AddressUpdateDataInput
  upsert: AddressUpsertNestedInput
}

input AddressUpsertNestedInput {
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressWhereInput {
  """Logical AND on all given filters."""
  AND: [AddressWhereInput!]

  """Logical OR on all given filters."""
  OR: [AddressWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AddressWhereInput!]
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  street: String

  """All values that are not equal to given value."""
  street_not: String

  """All values that are contained in given list."""
  street_in: [String!]

  """All values that are not contained in given list."""
  street_not_in: [String!]

  """All values less than the given value."""
  street_lt: String

  """All values less than or equal the given value."""
  street_lte: String

  """All values greater than the given value."""
  street_gt: String

  """All values greater than or equal the given value."""
  street_gte: String

  """All values containing the given string."""
  street_contains: String

  """All values not containing the given string."""
  street_not_contains: String

  """All values starting with the given string."""
  street_starts_with: String

  """All values not starting with the given string."""
  street_not_starts_with: String

  """All values ending with the given string."""
  street_ends_with: String

  """All values not ending with the given string."""
  street_not_ends_with: String
  building: String

  """All values that are not equal to given value."""
  building_not: String

  """All values that are contained in given list."""
  building_in: [String!]

  """All values that are not contained in given list."""
  building_not_in: [String!]

  """All values less than the given value."""
  building_lt: String

  """All values less than or equal the given value."""
  building_lte: String

  """All values greater than the given value."""
  building_gt: String

  """All values greater than or equal the given value."""
  building_gte: String

  """All values containing the given string."""
  building_contains: String

  """All values not containing the given string."""
  building_not_contains: String

  """All values starting with the given string."""
  building_starts_with: String

  """All values not starting with the given string."""
  building_not_starts_with: String

  """All values ending with the given string."""
  building_ends_with: String

  """All values not ending with the given string."""
  building_not_ends_with: String
  postCode: String

  """All values that are not equal to given value."""
  postCode_not: String

  """All values that are contained in given list."""
  postCode_in: [String!]

  """All values that are not contained in given list."""
  postCode_not_in: [String!]

  """All values less than the given value."""
  postCode_lt: String

  """All values less than or equal the given value."""
  postCode_lte: String

  """All values greater than the given value."""
  postCode_gt: String

  """All values greater than or equal the given value."""
  postCode_gte: String

  """All values containing the given string."""
  postCode_contains: String

  """All values not containing the given string."""
  postCode_not_contains: String

  """All values starting with the given string."""
  postCode_starts_with: String

  """All values not starting with the given string."""
  postCode_not_starts_with: String

  """All values ending with the given string."""
  postCode_ends_with: String

  """All values not ending with the given string."""
  postCode_not_ends_with: String
  postDepartment: String

  """All values that are not equal to given value."""
  postDepartment_not: String

  """All values that are contained in given list."""
  postDepartment_in: [String!]

  """All values that are not contained in given list."""
  postDepartment_not_in: [String!]

  """All values less than the given value."""
  postDepartment_lt: String

  """All values less than or equal the given value."""
  postDepartment_lte: String

  """All values greater than the given value."""
  postDepartment_gt: String

  """All values greater than or equal the given value."""
  postDepartment_gte: String

  """All values containing the given string."""
  postDepartment_contains: String

  """All values not containing the given string."""
  postDepartment_not_contains: String

  """All values starting with the given string."""
  postDepartment_starts_with: String

  """All values not starting with the given string."""
  postDepartment_not_starts_with: String

  """All values ending with the given string."""
  postDepartment_ends_with: String

  """All values not ending with the given string."""
  postDepartment_not_ends_with: String
}

type AggregateAction {
  count: Int!
}

type AggregateAddress {
  count: Int!
}

type AggregateCustomer {
  count: Int!
}

type AggregateDevice {
  count: Int!
}

type AggregateDeviceType {
  count: Int!
}

type AggregateElement {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Customer implements Node {
  id: ID!
  name: String!
  nip: String!
  regon: String
  address(where: AddressWhereInput): Address!
  devices(where: DeviceWhereInput, orderBy: DeviceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Device!]
}

"""A connection to a list of items."""
type CustomerConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CustomerEdge]!
  aggregate: AggregateCustomer!
}

input CustomerCreateInput {
  name: String!
  nip: String!
  regon: String
  address: AddressCreateOneInput!
  devices: DeviceCreateManyWithoutOwnerInput
}

input CustomerCreateOneInput {
  create: CustomerCreateInput
  connect: CustomerWhereUniqueInput
}

input CustomerCreateOneWithoutDevicesInput {
  create: CustomerCreateWithoutDevicesInput
  connect: CustomerWhereUniqueInput
}

input CustomerCreateWithoutDevicesInput {
  name: String!
  nip: String!
  regon: String
  address: AddressCreateOneInput!
}

"""An edge in a connection."""
type CustomerEdge {
  """The item at the end of the edge."""
  node: Customer!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CustomerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  nip_ASC
  nip_DESC
  regon_ASC
  regon_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CustomerPreviousValues {
  id: ID!
  name: String!
  nip: String!
  regon: String
}

type CustomerSubscriptionPayload {
  mutation: MutationType!
  node: Customer
  updatedFields: [String!]
  previousValues: CustomerPreviousValues
}

input CustomerSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CustomerSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CustomerSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CustomerSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CustomerWhereInput
}

input CustomerUpdateDataInput {
  name: String
  nip: String
  regon: String
  address: AddressUpdateOneInput
  devices: DeviceUpdateManyWithoutOwnerInput
}

input CustomerUpdateInput {
  name: String
  nip: String
  regon: String
  address: AddressUpdateOneInput
  devices: DeviceUpdateManyWithoutOwnerInput
}

input CustomerUpdateOneInput {
  create: CustomerCreateInput
  connect: CustomerWhereUniqueInput
  delete: Boolean
  update: CustomerUpdateDataInput
  upsert: CustomerUpsertNestedInput
}

input CustomerUpdateOneWithoutDevicesInput {
  create: CustomerCreateWithoutDevicesInput
  connect: CustomerWhereUniqueInput
  delete: Boolean
  update: CustomerUpdateWithoutDevicesDataInput
  upsert: CustomerUpsertWithoutDevicesInput
}

input CustomerUpdateWithoutDevicesDataInput {
  name: String
  nip: String
  regon: String
  address: AddressUpdateOneInput
}

input CustomerUpsertNestedInput {
  update: CustomerUpdateDataInput!
  create: CustomerCreateInput!
}

input CustomerUpsertWithoutDevicesInput {
  update: CustomerUpdateWithoutDevicesDataInput!
  create: CustomerCreateWithoutDevicesInput!
}

input CustomerWhereInput {
  """Logical AND on all given filters."""
  AND: [CustomerWhereInput!]

  """Logical OR on all given filters."""
  OR: [CustomerWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CustomerWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  nip: String

  """All values that are not equal to given value."""
  nip_not: String

  """All values that are contained in given list."""
  nip_in: [String!]

  """All values that are not contained in given list."""
  nip_not_in: [String!]

  """All values less than the given value."""
  nip_lt: String

  """All values less than or equal the given value."""
  nip_lte: String

  """All values greater than the given value."""
  nip_gt: String

  """All values greater than or equal the given value."""
  nip_gte: String

  """All values containing the given string."""
  nip_contains: String

  """All values not containing the given string."""
  nip_not_contains: String

  """All values starting with the given string."""
  nip_starts_with: String

  """All values not starting with the given string."""
  nip_not_starts_with: String

  """All values ending with the given string."""
  nip_ends_with: String

  """All values not ending with the given string."""
  nip_not_ends_with: String
  regon: String

  """All values that are not equal to given value."""
  regon_not: String

  """All values that are contained in given list."""
  regon_in: [String!]

  """All values that are not contained in given list."""
  regon_not_in: [String!]

  """All values less than the given value."""
  regon_lt: String

  """All values less than or equal the given value."""
  regon_lte: String

  """All values greater than the given value."""
  regon_gt: String

  """All values greater than or equal the given value."""
  regon_gte: String

  """All values containing the given string."""
  regon_contains: String

  """All values not containing the given string."""
  regon_not_contains: String

  """All values starting with the given string."""
  regon_starts_with: String

  """All values not starting with the given string."""
  regon_not_starts_with: String

  """All values ending with the given string."""
  regon_ends_with: String

  """All values not ending with the given string."""
  regon_not_ends_with: String
  address: AddressWhereInput
  devices_every: DeviceWhereInput
  devices_some: DeviceWhereInput
  devices_none: DeviceWhereInput
}

input CustomerWhereUniqueInput {
  id: ID
}

type Device implements Node {
  id: ID!
  type(where: DeviceTypeWhereInput): DeviceType!
  serialNumber: String!
  UDTNumber: String!
  VINnumber: String
  recordNumber: String
  registrationNumber: String
  productionYear: String!
  producent: String!
  capacity: String
  owner(where: CustomerWhereInput): Customer!
  actions(where: ActionWhereInput, orderBy: ActionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Action!]
}

"""A connection to a list of items."""
type DeviceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DeviceEdge]!
  aggregate: AggregateDevice!
}

input DeviceCreateInput {
  serialNumber: String!
  UDTNumber: String!
  VINnumber: String
  recordNumber: String
  registrationNumber: String
  productionYear: String!
  producent: String!
  capacity: String
  type: DeviceTypeCreateOneInput!
  owner: CustomerCreateOneWithoutDevicesInput!
  actions: ActionCreateManyWithoutDeviceInput
}

input DeviceCreateManyWithoutOwnerInput {
  create: [DeviceCreateWithoutOwnerInput!]
  connect: [DeviceWhereUniqueInput!]
}

input DeviceCreateOneWithoutActionsInput {
  create: DeviceCreateWithoutActionsInput
  connect: DeviceWhereUniqueInput
}

input DeviceCreateWithoutActionsInput {
  serialNumber: String!
  UDTNumber: String!
  VINnumber: String
  recordNumber: String
  registrationNumber: String
  productionYear: String!
  producent: String!
  capacity: String
  type: DeviceTypeCreateOneInput!
  owner: CustomerCreateOneWithoutDevicesInput!
}

input DeviceCreateWithoutOwnerInput {
  serialNumber: String!
  UDTNumber: String!
  VINnumber: String
  recordNumber: String
  registrationNumber: String
  productionYear: String!
  producent: String!
  capacity: String
  type: DeviceTypeCreateOneInput!
  actions: ActionCreateManyWithoutDeviceInput
}

"""An edge in a connection."""
type DeviceEdge {
  """The item at the end of the edge."""
  node: Device!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DeviceOrderByInput {
  id_ASC
  id_DESC
  serialNumber_ASC
  serialNumber_DESC
  UDTNumber_ASC
  UDTNumber_DESC
  VINnumber_ASC
  VINnumber_DESC
  recordNumber_ASC
  recordNumber_DESC
  registrationNumber_ASC
  registrationNumber_DESC
  productionYear_ASC
  productionYear_DESC
  producent_ASC
  producent_DESC
  capacity_ASC
  capacity_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type DevicePreviousValues {
  id: ID!
  serialNumber: String!
  UDTNumber: String!
  VINnumber: String
  recordNumber: String
  registrationNumber: String
  productionYear: String!
  producent: String!
  capacity: String
}

type DeviceSubscriptionPayload {
  mutation: MutationType!
  node: Device
  updatedFields: [String!]
  previousValues: DevicePreviousValues
}

input DeviceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DeviceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DeviceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DeviceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DeviceWhereInput
}

type DeviceType implements Node {
  id: ID!
  name: String!
  preferedName: String
  conservationEveryNDays: Int
}

"""A connection to a list of items."""
type DeviceTypeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DeviceTypeEdge]!
  aggregate: AggregateDeviceType!
}

input DeviceTypeCreateInput {
  name: String!
  preferedName: String
  conservationEveryNDays: Int
}

input DeviceTypeCreateOneInput {
  create: DeviceTypeCreateInput
  connect: DeviceTypeWhereUniqueInput
}

"""An edge in a connection."""
type DeviceTypeEdge {
  """The item at the end of the edge."""
  node: DeviceType!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DeviceTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  preferedName_ASC
  preferedName_DESC
  conservationEveryNDays_ASC
  conservationEveryNDays_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type DeviceTypePreviousValues {
  id: ID!
  name: String!
  preferedName: String
  conservationEveryNDays: Int
}

type DeviceTypeSubscriptionPayload {
  mutation: MutationType!
  node: DeviceType
  updatedFields: [String!]
  previousValues: DeviceTypePreviousValues
}

input DeviceTypeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DeviceTypeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DeviceTypeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DeviceTypeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DeviceTypeWhereInput
}

input DeviceTypeUpdateDataInput {
  name: String
  preferedName: String
  conservationEveryNDays: Int
}

input DeviceTypeUpdateInput {
  name: String
  preferedName: String
  conservationEveryNDays: Int
}

input DeviceTypeUpdateOneInput {
  create: DeviceTypeCreateInput
  connect: DeviceTypeWhereUniqueInput
  delete: Boolean
  update: DeviceTypeUpdateDataInput
  upsert: DeviceTypeUpsertNestedInput
}

input DeviceTypeUpsertNestedInput {
  update: DeviceTypeUpdateDataInput!
  create: DeviceTypeCreateInput!
}

input DeviceTypeWhereInput {
  """Logical AND on all given filters."""
  AND: [DeviceTypeWhereInput!]

  """Logical OR on all given filters."""
  OR: [DeviceTypeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DeviceTypeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  preferedName: String

  """All values that are not equal to given value."""
  preferedName_not: String

  """All values that are contained in given list."""
  preferedName_in: [String!]

  """All values that are not contained in given list."""
  preferedName_not_in: [String!]

  """All values less than the given value."""
  preferedName_lt: String

  """All values less than or equal the given value."""
  preferedName_lte: String

  """All values greater than the given value."""
  preferedName_gt: String

  """All values greater than or equal the given value."""
  preferedName_gte: String

  """All values containing the given string."""
  preferedName_contains: String

  """All values not containing the given string."""
  preferedName_not_contains: String

  """All values starting with the given string."""
  preferedName_starts_with: String

  """All values not starting with the given string."""
  preferedName_not_starts_with: String

  """All values ending with the given string."""
  preferedName_ends_with: String

  """All values not ending with the given string."""
  preferedName_not_ends_with: String
  conservationEveryNDays: Int

  """All values that are not equal to given value."""
  conservationEveryNDays_not: Int

  """All values that are contained in given list."""
  conservationEveryNDays_in: [Int!]

  """All values that are not contained in given list."""
  conservationEveryNDays_not_in: [Int!]

  """All values less than the given value."""
  conservationEveryNDays_lt: Int

  """All values less than or equal the given value."""
  conservationEveryNDays_lte: Int

  """All values greater than the given value."""
  conservationEveryNDays_gt: Int

  """All values greater than or equal the given value."""
  conservationEveryNDays_gte: Int
}

input DeviceTypeWhereUniqueInput {
  id: ID
}

input DeviceUpdateInput {
  serialNumber: String
  UDTNumber: String
  VINnumber: String
  recordNumber: String
  registrationNumber: String
  productionYear: String
  producent: String
  capacity: String
  type: DeviceTypeUpdateOneInput
  owner: CustomerUpdateOneWithoutDevicesInput
  actions: ActionUpdateManyWithoutDeviceInput
}

input DeviceUpdateManyWithoutOwnerInput {
  create: [DeviceCreateWithoutOwnerInput!]
  connect: [DeviceWhereUniqueInput!]
  disconnect: [DeviceWhereUniqueInput!]
  delete: [DeviceWhereUniqueInput!]
  update: [DeviceUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [DeviceUpsertWithWhereUniqueWithoutOwnerInput!]
}

input DeviceUpdateOneWithoutActionsInput {
  create: DeviceCreateWithoutActionsInput
  connect: DeviceWhereUniqueInput
  delete: Boolean
  update: DeviceUpdateWithoutActionsDataInput
  upsert: DeviceUpsertWithoutActionsInput
}

input DeviceUpdateWithoutActionsDataInput {
  serialNumber: String
  UDTNumber: String
  VINnumber: String
  recordNumber: String
  registrationNumber: String
  productionYear: String
  producent: String
  capacity: String
  type: DeviceTypeUpdateOneInput
  owner: CustomerUpdateOneWithoutDevicesInput
}

input DeviceUpdateWithoutOwnerDataInput {
  serialNumber: String
  UDTNumber: String
  VINnumber: String
  recordNumber: String
  registrationNumber: String
  productionYear: String
  producent: String
  capacity: String
  type: DeviceTypeUpdateOneInput
  actions: ActionUpdateManyWithoutDeviceInput
}

input DeviceUpdateWithWhereUniqueWithoutOwnerInput {
  where: DeviceWhereUniqueInput!
  data: DeviceUpdateWithoutOwnerDataInput!
}

input DeviceUpsertWithoutActionsInput {
  update: DeviceUpdateWithoutActionsDataInput!
  create: DeviceCreateWithoutActionsInput!
}

input DeviceUpsertWithWhereUniqueWithoutOwnerInput {
  where: DeviceWhereUniqueInput!
  update: DeviceUpdateWithoutOwnerDataInput!
  create: DeviceCreateWithoutOwnerInput!
}

input DeviceWhereInput {
  """Logical AND on all given filters."""
  AND: [DeviceWhereInput!]

  """Logical OR on all given filters."""
  OR: [DeviceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DeviceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  serialNumber: String

  """All values that are not equal to given value."""
  serialNumber_not: String

  """All values that are contained in given list."""
  serialNumber_in: [String!]

  """All values that are not contained in given list."""
  serialNumber_not_in: [String!]

  """All values less than the given value."""
  serialNumber_lt: String

  """All values less than or equal the given value."""
  serialNumber_lte: String

  """All values greater than the given value."""
  serialNumber_gt: String

  """All values greater than or equal the given value."""
  serialNumber_gte: String

  """All values containing the given string."""
  serialNumber_contains: String

  """All values not containing the given string."""
  serialNumber_not_contains: String

  """All values starting with the given string."""
  serialNumber_starts_with: String

  """All values not starting with the given string."""
  serialNumber_not_starts_with: String

  """All values ending with the given string."""
  serialNumber_ends_with: String

  """All values not ending with the given string."""
  serialNumber_not_ends_with: String
  UDTNumber: String

  """All values that are not equal to given value."""
  UDTNumber_not: String

  """All values that are contained in given list."""
  UDTNumber_in: [String!]

  """All values that are not contained in given list."""
  UDTNumber_not_in: [String!]

  """All values less than the given value."""
  UDTNumber_lt: String

  """All values less than or equal the given value."""
  UDTNumber_lte: String

  """All values greater than the given value."""
  UDTNumber_gt: String

  """All values greater than or equal the given value."""
  UDTNumber_gte: String

  """All values containing the given string."""
  UDTNumber_contains: String

  """All values not containing the given string."""
  UDTNumber_not_contains: String

  """All values starting with the given string."""
  UDTNumber_starts_with: String

  """All values not starting with the given string."""
  UDTNumber_not_starts_with: String

  """All values ending with the given string."""
  UDTNumber_ends_with: String

  """All values not ending with the given string."""
  UDTNumber_not_ends_with: String
  VINnumber: String

  """All values that are not equal to given value."""
  VINnumber_not: String

  """All values that are contained in given list."""
  VINnumber_in: [String!]

  """All values that are not contained in given list."""
  VINnumber_not_in: [String!]

  """All values less than the given value."""
  VINnumber_lt: String

  """All values less than or equal the given value."""
  VINnumber_lte: String

  """All values greater than the given value."""
  VINnumber_gt: String

  """All values greater than or equal the given value."""
  VINnumber_gte: String

  """All values containing the given string."""
  VINnumber_contains: String

  """All values not containing the given string."""
  VINnumber_not_contains: String

  """All values starting with the given string."""
  VINnumber_starts_with: String

  """All values not starting with the given string."""
  VINnumber_not_starts_with: String

  """All values ending with the given string."""
  VINnumber_ends_with: String

  """All values not ending with the given string."""
  VINnumber_not_ends_with: String
  recordNumber: String

  """All values that are not equal to given value."""
  recordNumber_not: String

  """All values that are contained in given list."""
  recordNumber_in: [String!]

  """All values that are not contained in given list."""
  recordNumber_not_in: [String!]

  """All values less than the given value."""
  recordNumber_lt: String

  """All values less than or equal the given value."""
  recordNumber_lte: String

  """All values greater than the given value."""
  recordNumber_gt: String

  """All values greater than or equal the given value."""
  recordNumber_gte: String

  """All values containing the given string."""
  recordNumber_contains: String

  """All values not containing the given string."""
  recordNumber_not_contains: String

  """All values starting with the given string."""
  recordNumber_starts_with: String

  """All values not starting with the given string."""
  recordNumber_not_starts_with: String

  """All values ending with the given string."""
  recordNumber_ends_with: String

  """All values not ending with the given string."""
  recordNumber_not_ends_with: String
  registrationNumber: String

  """All values that are not equal to given value."""
  registrationNumber_not: String

  """All values that are contained in given list."""
  registrationNumber_in: [String!]

  """All values that are not contained in given list."""
  registrationNumber_not_in: [String!]

  """All values less than the given value."""
  registrationNumber_lt: String

  """All values less than or equal the given value."""
  registrationNumber_lte: String

  """All values greater than the given value."""
  registrationNumber_gt: String

  """All values greater than or equal the given value."""
  registrationNumber_gte: String

  """All values containing the given string."""
  registrationNumber_contains: String

  """All values not containing the given string."""
  registrationNumber_not_contains: String

  """All values starting with the given string."""
  registrationNumber_starts_with: String

  """All values not starting with the given string."""
  registrationNumber_not_starts_with: String

  """All values ending with the given string."""
  registrationNumber_ends_with: String

  """All values not ending with the given string."""
  registrationNumber_not_ends_with: String
  productionYear: String

  """All values that are not equal to given value."""
  productionYear_not: String

  """All values that are contained in given list."""
  productionYear_in: [String!]

  """All values that are not contained in given list."""
  productionYear_not_in: [String!]

  """All values less than the given value."""
  productionYear_lt: String

  """All values less than or equal the given value."""
  productionYear_lte: String

  """All values greater than the given value."""
  productionYear_gt: String

  """All values greater than or equal the given value."""
  productionYear_gte: String

  """All values containing the given string."""
  productionYear_contains: String

  """All values not containing the given string."""
  productionYear_not_contains: String

  """All values starting with the given string."""
  productionYear_starts_with: String

  """All values not starting with the given string."""
  productionYear_not_starts_with: String

  """All values ending with the given string."""
  productionYear_ends_with: String

  """All values not ending with the given string."""
  productionYear_not_ends_with: String
  producent: String

  """All values that are not equal to given value."""
  producent_not: String

  """All values that are contained in given list."""
  producent_in: [String!]

  """All values that are not contained in given list."""
  producent_not_in: [String!]

  """All values less than the given value."""
  producent_lt: String

  """All values less than or equal the given value."""
  producent_lte: String

  """All values greater than the given value."""
  producent_gt: String

  """All values greater than or equal the given value."""
  producent_gte: String

  """All values containing the given string."""
  producent_contains: String

  """All values not containing the given string."""
  producent_not_contains: String

  """All values starting with the given string."""
  producent_starts_with: String

  """All values not starting with the given string."""
  producent_not_starts_with: String

  """All values ending with the given string."""
  producent_ends_with: String

  """All values not ending with the given string."""
  producent_not_ends_with: String
  capacity: String

  """All values that are not equal to given value."""
  capacity_not: String

  """All values that are contained in given list."""
  capacity_in: [String!]

  """All values that are not contained in given list."""
  capacity_not_in: [String!]

  """All values less than the given value."""
  capacity_lt: String

  """All values less than or equal the given value."""
  capacity_lte: String

  """All values greater than the given value."""
  capacity_gt: String

  """All values greater than or equal the given value."""
  capacity_gte: String

  """All values containing the given string."""
  capacity_contains: String

  """All values not containing the given string."""
  capacity_not_contains: String

  """All values starting with the given string."""
  capacity_starts_with: String

  """All values not starting with the given string."""
  capacity_not_starts_with: String

  """All values ending with the given string."""
  capacity_ends_with: String

  """All values not ending with the given string."""
  capacity_not_ends_with: String
  type: DeviceTypeWhereInput
  owner: CustomerWhereInput
  actions_every: ActionWhereInput
  actions_some: ActionWhereInput
  actions_none: ActionWhereInput
}

input DeviceWhereUniqueInput {
  id: ID
}

type Element implements Node {
  id: ID!
  name: String
  amount: Float
  price: Float
}

"""A connection to a list of items."""
type ElementConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ElementEdge]!
  aggregate: AggregateElement!
}

input ElementCreateInput {
  name: String
  amount: Float
  price: Float
}

input ElementCreateManyInput {
  create: [ElementCreateInput!]
  connect: [ElementWhereUniqueInput!]
}

"""An edge in a connection."""
type ElementEdge {
  """The item at the end of the edge."""
  node: Element!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ElementOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  amount_ASC
  amount_DESC
  price_ASC
  price_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ElementPreviousValues {
  id: ID!
  name: String
  amount: Float
  price: Float
}

type ElementSubscriptionPayload {
  mutation: MutationType!
  node: Element
  updatedFields: [String!]
  previousValues: ElementPreviousValues
}

input ElementSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ElementSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ElementSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ElementSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ElementWhereInput
}

input ElementUpdateDataInput {
  name: String
  amount: Float
  price: Float
}

input ElementUpdateInput {
  name: String
  amount: Float
  price: Float
}

input ElementUpdateManyInput {
  create: [ElementCreateInput!]
  connect: [ElementWhereUniqueInput!]
  disconnect: [ElementWhereUniqueInput!]
  delete: [ElementWhereUniqueInput!]
  update: [ElementUpdateWithWhereUniqueNestedInput!]
  upsert: [ElementUpsertWithWhereUniqueNestedInput!]
}

input ElementUpdateWithWhereUniqueNestedInput {
  where: ElementWhereUniqueInput!
  data: ElementUpdateDataInput!
}

input ElementUpsertWithWhereUniqueNestedInput {
  where: ElementWhereUniqueInput!
  update: ElementUpdateDataInput!
  create: ElementCreateInput!
}

input ElementWhereInput {
  """Logical AND on all given filters."""
  AND: [ElementWhereInput!]

  """Logical OR on all given filters."""
  OR: [ElementWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ElementWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  amount: Float

  """All values that are not equal to given value."""
  amount_not: Float

  """All values that are contained in given list."""
  amount_in: [Float!]

  """All values that are not contained in given list."""
  amount_not_in: [Float!]

  """All values less than the given value."""
  amount_lt: Float

  """All values less than or equal the given value."""
  amount_lte: Float

  """All values greater than the given value."""
  amount_gt: Float

  """All values greater than or equal the given value."""
  amount_gte: Float
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
}

input ElementWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createCustomer(data: CustomerCreateInput!): Customer!
  createAddress(data: AddressCreateInput!): Address!
  createDevice(data: DeviceCreateInput!): Device!
  createDeviceType(data: DeviceTypeCreateInput!): DeviceType!
  createAction(data: ActionCreateInput!): Action!
  createElement(data: ElementCreateInput!): Element!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateCustomer(data: CustomerUpdateInput!, where: CustomerWhereUniqueInput!): Customer
  updateDevice(data: DeviceUpdateInput!, where: DeviceWhereUniqueInput!): Device
  updateDeviceType(data: DeviceTypeUpdateInput!, where: DeviceTypeWhereUniqueInput!): DeviceType
  updateAction(data: ActionUpdateInput!, where: ActionWhereUniqueInput!): Action
  updateElement(data: ElementUpdateInput!, where: ElementWhereUniqueInput!): Element
  deleteUser(where: UserWhereUniqueInput!): User
  deleteCustomer(where: CustomerWhereUniqueInput!): Customer
  deleteDevice(where: DeviceWhereUniqueInput!): Device
  deleteDeviceType(where: DeviceTypeWhereUniqueInput!): DeviceType
  deleteAction(where: ActionWhereUniqueInput!): Action
  deleteElement(where: ElementWhereUniqueInput!): Element
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertCustomer(where: CustomerWhereUniqueInput!, create: CustomerCreateInput!, update: CustomerUpdateInput!): Customer!
  upsertDevice(where: DeviceWhereUniqueInput!, create: DeviceCreateInput!, update: DeviceUpdateInput!): Device!
  upsertDeviceType(where: DeviceTypeWhereUniqueInput!, create: DeviceTypeCreateInput!, update: DeviceTypeUpdateInput!): DeviceType!
  upsertAction(where: ActionWhereUniqueInput!, create: ActionCreateInput!, update: ActionUpdateInput!): Action!
  upsertElement(where: ElementWhereUniqueInput!, create: ElementCreateInput!, update: ElementUpdateInput!): Element!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyCustomers(data: CustomerUpdateInput!, where: CustomerWhereInput): BatchPayload!
  updateManyAddresses(data: AddressUpdateInput!, where: AddressWhereInput): BatchPayload!
  updateManyDevices(data: DeviceUpdateInput!, where: DeviceWhereInput): BatchPayload!
  updateManyDeviceTypes(data: DeviceTypeUpdateInput!, where: DeviceTypeWhereInput): BatchPayload!
  updateManyActions(data: ActionUpdateInput!, where: ActionWhereInput): BatchPayload!
  updateManyElements(data: ElementUpdateInput!, where: ElementWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyCustomers(where: CustomerWhereInput): BatchPayload!
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  deleteManyDevices(where: DeviceWhereInput): BatchPayload!
  deleteManyDeviceTypes(where: DeviceTypeWhereInput): BatchPayload!
  deleteManyActions(where: ActionWhereInput): BatchPayload!
  deleteManyElements(where: ElementWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  customers(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Customer]!
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  devices(where: DeviceWhereInput, orderBy: DeviceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Device]!
  deviceTypes(where: DeviceTypeWhereInput, orderBy: DeviceTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DeviceType]!
  actions(where: ActionWhereInput, orderBy: ActionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Action]!
  elements(where: ElementWhereInput, orderBy: ElementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Element]!
  user(where: UserWhereUniqueInput!): User
  customer(where: CustomerWhereUniqueInput!): Customer
  device(where: DeviceWhereUniqueInput!): Device
  deviceType(where: DeviceTypeWhereUniqueInput!): DeviceType
  action(where: ActionWhereUniqueInput!): Action
  element(where: ElementWhereUniqueInput!): Element
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  customersConnection(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CustomerConnection!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  devicesConnection(where: DeviceWhereInput, orderBy: DeviceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DeviceConnection!
  deviceTypesConnection(where: DeviceTypeWhereInput, orderBy: DeviceTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DeviceTypeConnection!
  actionsConnection(where: ActionWhereInput, orderBy: ActionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActionConnection!
  elementsConnection(where: ElementWhereInput, orderBy: ElementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ElementConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  customer(where: CustomerSubscriptionWhereInput): CustomerSubscriptionPayload
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  device(where: DeviceSubscriptionWhereInput): DeviceSubscriptionPayload
  deviceType(where: DeviceTypeSubscriptionWhereInput): DeviceTypeSubscriptionPayload
  action(where: ActionSubscriptionWhereInput): ActionSubscriptionPayload
  element(where: ElementSubscriptionWhereInput): ElementSubscriptionPayload
}

type User implements Node {
  id: ID!
  username: String!
  password: String!
  displayName: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  password: String!
  displayName: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  displayName_ASC
  displayName_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  password: String!
  displayName: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  username: String
  password: String
  displayName: String
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  displayName: String

  """All values that are not equal to given value."""
  displayName_not: String

  """All values that are contained in given list."""
  displayName_in: [String!]

  """All values that are not contained in given list."""
  displayName_not_in: [String!]

  """All values less than the given value."""
  displayName_lt: String

  """All values less than or equal the given value."""
  displayName_lte: String

  """All values greater than the given value."""
  displayName_gt: String

  """All values greater than or equal the given value."""
  displayName_gte: String

  """All values containing the given string."""
  displayName_contains: String

  """All values not containing the given string."""
  displayName_not_contains: String

  """All values starting with the given string."""
  displayName_starts_with: String

  """All values not starting with the given string."""
  displayName_not_starts_with: String

  """All values ending with the given string."""
  displayName_ends_with: String

  """All values not ending with the given string."""
  displayName_not_ends_with: String
}

input UserWhereUniqueInput {
  id: ID
  username: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type CustomerOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'nip_ASC' |
  'nip_DESC' |
  'regon_ASC' |
  'regon_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type DeviceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'serialNumber_ASC' |
  'serialNumber_DESC' |
  'UDTNumber_ASC' |
  'UDTNumber_DESC' |
  'VINnumber_ASC' |
  'VINnumber_DESC' |
  'recordNumber_ASC' |
  'recordNumber_DESC' |
  'registrationNumber_ASC' |
  'registrationNumber_DESC' |
  'productionYear_ASC' |
  'productionYear_DESC' |
  'producent_ASC' |
  'producent_DESC' |
  'capacity_ASC' |
  'capacity_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ActionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'date_ASC' |
  'date_DESC' |
  'employee_ASC' |
  'employee_DESC' |
  'start_ASC' |
  'start_DESC' |
  'end_ASC' |
  'end_DESC' |
  'inspector_ASC' |
  'inspector_DESC' |
  'results_ASC' |
  'results_DESC' |
  'notes_ASC' |
  'notes_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ElementOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'price_ASC' |
  'price_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AddressOrderByInput =   'country_ASC' |
  'country_DESC' |
  'city_ASC' |
  'city_DESC' |
  'street_ASC' |
  'street_DESC' |
  'building_ASC' |
  'building_DESC' |
  'postCode_ASC' |
  'postCode_DESC' |
  'postDepartment_ASC' |
  'postDepartment_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type DeviceTypeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'preferedName_ASC' |
  'preferedName_DESC' |
  'conservationEveryNDays_ASC' |
  'conservationEveryNDays_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'username_ASC' |
  'username_DESC' |
  'password_ASC' |
  'password_DESC' |
  'displayName_ASC' |
  'displayName_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface ElementCreateManyInput {
  create?: ElementCreateInput[] | ElementCreateInput
  connect?: ElementWhereUniqueInput[] | ElementWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  displayName?: String
  displayName_not?: String
  displayName_in?: String[] | String
  displayName_not_in?: String[] | String
  displayName_lt?: String
  displayName_lte?: String
  displayName_gt?: String
  displayName_gte?: String
  displayName_contains?: String
  displayName_not_contains?: String
  displayName_starts_with?: String
  displayName_not_starts_with?: String
  displayName_ends_with?: String
  displayName_not_ends_with?: String
}

export interface ActionCreateInput {
  type: String
  date: String
  employee?: String
  start?: String
  end?: String
  inspector?: String
  results?: String
  notes?: String
  device: DeviceCreateOneWithoutActionsInput
  customer: CustomerCreateOneInput
  elements?: ElementCreateManyInput
}

export interface DeviceTypeWhereInput {
  AND?: DeviceTypeWhereInput[] | DeviceTypeWhereInput
  OR?: DeviceTypeWhereInput[] | DeviceTypeWhereInput
  NOT?: DeviceTypeWhereInput[] | DeviceTypeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  preferedName?: String
  preferedName_not?: String
  preferedName_in?: String[] | String
  preferedName_not_in?: String[] | String
  preferedName_lt?: String
  preferedName_lte?: String
  preferedName_gt?: String
  preferedName_gte?: String
  preferedName_contains?: String
  preferedName_not_contains?: String
  preferedName_starts_with?: String
  preferedName_not_starts_with?: String
  preferedName_ends_with?: String
  preferedName_not_ends_with?: String
  conservationEveryNDays?: Int
  conservationEveryNDays_not?: Int
  conservationEveryNDays_in?: Int[] | Int
  conservationEveryNDays_not_in?: Int[] | Int
  conservationEveryNDays_lt?: Int
  conservationEveryNDays_lte?: Int
  conservationEveryNDays_gt?: Int
  conservationEveryNDays_gte?: Int
}

export interface DeviceCreateOneWithoutActionsInput {
  create?: DeviceCreateWithoutActionsInput
  connect?: DeviceWhereUniqueInput
}

export interface ElementWhereInput {
  AND?: ElementWhereInput[] | ElementWhereInput
  OR?: ElementWhereInput[] | ElementWhereInput
  NOT?: ElementWhereInput[] | ElementWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  amount?: Float
  amount_not?: Float
  amount_in?: Float[] | Float
  amount_not_in?: Float[] | Float
  amount_lt?: Float
  amount_lte?: Float
  amount_gt?: Float
  amount_gte?: Float
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
}

export interface DeviceCreateWithoutActionsInput {
  serialNumber: String
  UDTNumber: String
  VINnumber?: String
  recordNumber?: String
  registrationNumber?: String
  productionYear: String
  producent: String
  capacity?: String
  type: DeviceTypeCreateOneInput
  owner: CustomerCreateOneWithoutDevicesInput
}

export interface DeviceWhereInput {
  AND?: DeviceWhereInput[] | DeviceWhereInput
  OR?: DeviceWhereInput[] | DeviceWhereInput
  NOT?: DeviceWhereInput[] | DeviceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  serialNumber?: String
  serialNumber_not?: String
  serialNumber_in?: String[] | String
  serialNumber_not_in?: String[] | String
  serialNumber_lt?: String
  serialNumber_lte?: String
  serialNumber_gt?: String
  serialNumber_gte?: String
  serialNumber_contains?: String
  serialNumber_not_contains?: String
  serialNumber_starts_with?: String
  serialNumber_not_starts_with?: String
  serialNumber_ends_with?: String
  serialNumber_not_ends_with?: String
  UDTNumber?: String
  UDTNumber_not?: String
  UDTNumber_in?: String[] | String
  UDTNumber_not_in?: String[] | String
  UDTNumber_lt?: String
  UDTNumber_lte?: String
  UDTNumber_gt?: String
  UDTNumber_gte?: String
  UDTNumber_contains?: String
  UDTNumber_not_contains?: String
  UDTNumber_starts_with?: String
  UDTNumber_not_starts_with?: String
  UDTNumber_ends_with?: String
  UDTNumber_not_ends_with?: String
  VINnumber?: String
  VINnumber_not?: String
  VINnumber_in?: String[] | String
  VINnumber_not_in?: String[] | String
  VINnumber_lt?: String
  VINnumber_lte?: String
  VINnumber_gt?: String
  VINnumber_gte?: String
  VINnumber_contains?: String
  VINnumber_not_contains?: String
  VINnumber_starts_with?: String
  VINnumber_not_starts_with?: String
  VINnumber_ends_with?: String
  VINnumber_not_ends_with?: String
  recordNumber?: String
  recordNumber_not?: String
  recordNumber_in?: String[] | String
  recordNumber_not_in?: String[] | String
  recordNumber_lt?: String
  recordNumber_lte?: String
  recordNumber_gt?: String
  recordNumber_gte?: String
  recordNumber_contains?: String
  recordNumber_not_contains?: String
  recordNumber_starts_with?: String
  recordNumber_not_starts_with?: String
  recordNumber_ends_with?: String
  recordNumber_not_ends_with?: String
  registrationNumber?: String
  registrationNumber_not?: String
  registrationNumber_in?: String[] | String
  registrationNumber_not_in?: String[] | String
  registrationNumber_lt?: String
  registrationNumber_lte?: String
  registrationNumber_gt?: String
  registrationNumber_gte?: String
  registrationNumber_contains?: String
  registrationNumber_not_contains?: String
  registrationNumber_starts_with?: String
  registrationNumber_not_starts_with?: String
  registrationNumber_ends_with?: String
  registrationNumber_not_ends_with?: String
  productionYear?: String
  productionYear_not?: String
  productionYear_in?: String[] | String
  productionYear_not_in?: String[] | String
  productionYear_lt?: String
  productionYear_lte?: String
  productionYear_gt?: String
  productionYear_gte?: String
  productionYear_contains?: String
  productionYear_not_contains?: String
  productionYear_starts_with?: String
  productionYear_not_starts_with?: String
  productionYear_ends_with?: String
  productionYear_not_ends_with?: String
  producent?: String
  producent_not?: String
  producent_in?: String[] | String
  producent_not_in?: String[] | String
  producent_lt?: String
  producent_lte?: String
  producent_gt?: String
  producent_gte?: String
  producent_contains?: String
  producent_not_contains?: String
  producent_starts_with?: String
  producent_not_starts_with?: String
  producent_ends_with?: String
  producent_not_ends_with?: String
  capacity?: String
  capacity_not?: String
  capacity_in?: String[] | String
  capacity_not_in?: String[] | String
  capacity_lt?: String
  capacity_lte?: String
  capacity_gt?: String
  capacity_gte?: String
  capacity_contains?: String
  capacity_not_contains?: String
  capacity_starts_with?: String
  capacity_not_starts_with?: String
  capacity_ends_with?: String
  capacity_not_ends_with?: String
  type?: DeviceTypeWhereInput
  owner?: CustomerWhereInput
  actions_every?: ActionWhereInput
  actions_some?: ActionWhereInput
  actions_none?: ActionWhereInput
}

export interface CustomerUpsertNestedInput {
  update: CustomerUpdateDataInput
  create: CustomerCreateInput
}

export interface DeviceTypeUpdateOneInput {
  create?: DeviceTypeCreateInput
  connect?: DeviceTypeWhereUniqueInput
  delete?: Boolean
  update?: DeviceTypeUpdateDataInput
  upsert?: DeviceTypeUpsertNestedInput
}

export interface CustomerUpdateDataInput {
  name?: String
  nip?: String
  regon?: String
  address?: AddressUpdateOneInput
  devices?: DeviceUpdateManyWithoutOwnerInput
}

export interface UserUpdateInput {
  username?: String
  password?: String
  displayName?: String
}

export interface CustomerUpdateOneInput {
  create?: CustomerCreateInput
  connect?: CustomerWhereUniqueInput
  delete?: Boolean
  update?: CustomerUpdateDataInput
  upsert?: CustomerUpsertNestedInput
}

export interface ActionSubscriptionWhereInput {
  AND?: ActionSubscriptionWhereInput[] | ActionSubscriptionWhereInput
  OR?: ActionSubscriptionWhereInput[] | ActionSubscriptionWhereInput
  NOT?: ActionSubscriptionWhereInput[] | ActionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ActionWhereInput
}

export interface ActionUpdateWithoutDeviceDataInput {
  type?: String
  date?: String
  employee?: String
  start?: String
  end?: String
  inspector?: String
  results?: String
  notes?: String
  customer?: CustomerUpdateOneInput
  elements?: ElementUpdateManyInput
}

export interface DeviceTypeSubscriptionWhereInput {
  AND?: DeviceTypeSubscriptionWhereInput[] | DeviceTypeSubscriptionWhereInput
  OR?: DeviceTypeSubscriptionWhereInput[] | DeviceTypeSubscriptionWhereInput
  NOT?: DeviceTypeSubscriptionWhereInput[] | DeviceTypeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DeviceTypeWhereInput
}

export interface ActionUpdateWithWhereUniqueWithoutDeviceInput {
  where: ActionWhereUniqueInput
  data: ActionUpdateWithoutDeviceDataInput
}

export interface DeviceSubscriptionWhereInput {
  AND?: DeviceSubscriptionWhereInput[] | DeviceSubscriptionWhereInput
  OR?: DeviceSubscriptionWhereInput[] | DeviceSubscriptionWhereInput
  NOT?: DeviceSubscriptionWhereInput[] | DeviceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DeviceWhereInput
}

export interface UserCreateInput {
  username: String
  password: String
  displayName: String
}

export interface CustomerSubscriptionWhereInput {
  AND?: CustomerSubscriptionWhereInput[] | CustomerSubscriptionWhereInput
  OR?: CustomerSubscriptionWhereInput[] | CustomerSubscriptionWhereInput
  NOT?: CustomerSubscriptionWhereInput[] | CustomerSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CustomerWhereInput
}

export interface CustomerCreateInput {
  name: String
  nip: String
  regon?: String
  address: AddressCreateOneInput
  devices?: DeviceCreateManyWithoutOwnerInput
}

export interface CustomerWhereUniqueInput {
  id?: ID_Input
}

export interface AddressCreateOneInput {
  create?: AddressCreateInput
}

export interface DeviceTypeWhereUniqueInput {
  id?: ID_Input
}

export interface AddressCreateInput {
  country: String
  city: String
  street?: String
  building: String
  postCode: String
  postDepartment?: String
}

export interface ElementWhereUniqueInput {
  id?: ID_Input
}

export interface DeviceCreateManyWithoutOwnerInput {
  create?: DeviceCreateWithoutOwnerInput[] | DeviceCreateWithoutOwnerInput
  connect?: DeviceWhereUniqueInput[] | DeviceWhereUniqueInput
}

export interface AddressUpdateInput {
  country?: String
  city?: String
  street?: String
  building?: String
  postCode?: String
  postDepartment?: String
}

export interface DeviceCreateWithoutOwnerInput {
  serialNumber: String
  UDTNumber: String
  VINnumber?: String
  recordNumber?: String
  registrationNumber?: String
  productionYear: String
  producent: String
  capacity?: String
  type: DeviceTypeCreateOneInput
  actions?: ActionCreateManyWithoutDeviceInput
}

export interface DeviceUpsertWithoutActionsInput {
  update: DeviceUpdateWithoutActionsDataInput
  create: DeviceCreateWithoutActionsInput
}

export interface DeviceTypeCreateOneInput {
  create?: DeviceTypeCreateInput
  connect?: DeviceTypeWhereUniqueInput
}

export interface DeviceUpdateOneWithoutActionsInput {
  create?: DeviceCreateWithoutActionsInput
  connect?: DeviceWhereUniqueInput
  delete?: Boolean
  update?: DeviceUpdateWithoutActionsDataInput
  upsert?: DeviceUpsertWithoutActionsInput
}

export interface DeviceTypeCreateInput {
  name: String
  preferedName?: String
  conservationEveryNDays?: Int
}

export interface DeviceTypeUpdateInput {
  name?: String
  preferedName?: String
  conservationEveryNDays?: Int
}

export interface ActionCreateManyWithoutDeviceInput {
  create?: ActionCreateWithoutDeviceInput[] | ActionCreateWithoutDeviceInput
  connect?: ActionWhereUniqueInput[] | ActionWhereUniqueInput
}

export interface CustomerUpdateWithoutDevicesDataInput {
  name?: String
  nip?: String
  regon?: String
  address?: AddressUpdateOneInput
}

export interface ActionCreateWithoutDeviceInput {
  type: String
  date: String
  employee?: String
  start?: String
  end?: String
  inspector?: String
  results?: String
  notes?: String
  customer: CustomerCreateOneInput
  elements?: ElementCreateManyInput
}

export interface DeviceUpdateInput {
  serialNumber?: String
  UDTNumber?: String
  VINnumber?: String
  recordNumber?: String
  registrationNumber?: String
  productionYear?: String
  producent?: String
  capacity?: String
  type?: DeviceTypeUpdateOneInput
  owner?: CustomerUpdateOneWithoutDevicesInput
  actions?: ActionUpdateManyWithoutDeviceInput
}

export interface CustomerCreateOneInput {
  create?: CustomerCreateInput
  connect?: CustomerWhereUniqueInput
}

export interface ActionUpsertWithWhereUniqueWithoutDeviceInput {
  where: ActionWhereUniqueInput
  update: ActionUpdateWithoutDeviceDataInput
  create: ActionCreateWithoutDeviceInput
}

export interface ActionUpdateManyWithoutDeviceInput {
  create?: ActionCreateWithoutDeviceInput[] | ActionCreateWithoutDeviceInput
  connect?: ActionWhereUniqueInput[] | ActionWhereUniqueInput
  disconnect?: ActionWhereUniqueInput[] | ActionWhereUniqueInput
  delete?: ActionWhereUniqueInput[] | ActionWhereUniqueInput
  update?: ActionUpdateWithWhereUniqueWithoutDeviceInput[] | ActionUpdateWithWhereUniqueWithoutDeviceInput
  upsert?: ActionUpsertWithWhereUniqueWithoutDeviceInput[] | ActionUpsertWithWhereUniqueWithoutDeviceInput
}

export interface ElementUpdateDataInput {
  name?: String
  amount?: Float
  price?: Float
}

export interface ElementCreateInput {
  name?: String
  amount?: Float
  price?: Float
}

export interface ElementUpdateManyInput {
  create?: ElementCreateInput[] | ElementCreateInput
  connect?: ElementWhereUniqueInput[] | ElementWhereUniqueInput
  disconnect?: ElementWhereUniqueInput[] | ElementWhereUniqueInput
  delete?: ElementWhereUniqueInput[] | ElementWhereUniqueInput
  update?: ElementUpdateWithWhereUniqueNestedInput[] | ElementUpdateWithWhereUniqueNestedInput
  upsert?: ElementUpsertWithWhereUniqueNestedInput[] | ElementUpsertWithWhereUniqueNestedInput
}

export interface DeviceCreateInput {
  serialNumber: String
  UDTNumber: String
  VINnumber?: String
  recordNumber?: String
  registrationNumber?: String
  productionYear: String
  producent: String
  capacity?: String
  type: DeviceTypeCreateOneInput
  owner: CustomerCreateOneWithoutDevicesInput
  actions?: ActionCreateManyWithoutDeviceInput
}

export interface CustomerWhereInput {
  AND?: CustomerWhereInput[] | CustomerWhereInput
  OR?: CustomerWhereInput[] | CustomerWhereInput
  NOT?: CustomerWhereInput[] | CustomerWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  nip?: String
  nip_not?: String
  nip_in?: String[] | String
  nip_not_in?: String[] | String
  nip_lt?: String
  nip_lte?: String
  nip_gt?: String
  nip_gte?: String
  nip_contains?: String
  nip_not_contains?: String
  nip_starts_with?: String
  nip_not_starts_with?: String
  nip_ends_with?: String
  nip_not_ends_with?: String
  regon?: String
  regon_not?: String
  regon_in?: String[] | String
  regon_not_in?: String[] | String
  regon_lt?: String
  regon_lte?: String
  regon_gt?: String
  regon_gte?: String
  regon_contains?: String
  regon_not_contains?: String
  regon_starts_with?: String
  regon_not_starts_with?: String
  regon_ends_with?: String
  regon_not_ends_with?: String
  address?: AddressWhereInput
  devices_every?: DeviceWhereInput
  devices_some?: DeviceWhereInput
  devices_none?: DeviceWhereInput
}

export interface CustomerCreateOneWithoutDevicesInput {
  create?: CustomerCreateWithoutDevicesInput
  connect?: CustomerWhereUniqueInput
}

export interface AddressSubscriptionWhereInput {
  AND?: AddressSubscriptionWhereInput[] | AddressSubscriptionWhereInput
  OR?: AddressSubscriptionWhereInput[] | AddressSubscriptionWhereInput
  NOT?: AddressSubscriptionWhereInput[] | AddressSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AddressWhereInput
}

export interface CustomerCreateWithoutDevicesInput {
  name: String
  nip: String
  regon?: String
  address: AddressCreateOneInput
}

export interface DeviceWhereUniqueInput {
  id?: ID_Input
}

export interface ActionWhereInput {
  AND?: ActionWhereInput[] | ActionWhereInput
  OR?: ActionWhereInput[] | ActionWhereInput
  NOT?: ActionWhereInput[] | ActionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
  date?: String
  date_not?: String
  date_in?: String[] | String
  date_not_in?: String[] | String
  date_lt?: String
  date_lte?: String
  date_gt?: String
  date_gte?: String
  date_contains?: String
  date_not_contains?: String
  date_starts_with?: String
  date_not_starts_with?: String
  date_ends_with?: String
  date_not_ends_with?: String
  employee?: String
  employee_not?: String
  employee_in?: String[] | String
  employee_not_in?: String[] | String
  employee_lt?: String
  employee_lte?: String
  employee_gt?: String
  employee_gte?: String
  employee_contains?: String
  employee_not_contains?: String
  employee_starts_with?: String
  employee_not_starts_with?: String
  employee_ends_with?: String
  employee_not_ends_with?: String
  start?: String
  start_not?: String
  start_in?: String[] | String
  start_not_in?: String[] | String
  start_lt?: String
  start_lte?: String
  start_gt?: String
  start_gte?: String
  start_contains?: String
  start_not_contains?: String
  start_starts_with?: String
  start_not_starts_with?: String
  start_ends_with?: String
  start_not_ends_with?: String
  end?: String
  end_not?: String
  end_in?: String[] | String
  end_not_in?: String[] | String
  end_lt?: String
  end_lte?: String
  end_gt?: String
  end_gte?: String
  end_contains?: String
  end_not_contains?: String
  end_starts_with?: String
  end_not_starts_with?: String
  end_ends_with?: String
  end_not_ends_with?: String
  inspector?: String
  inspector_not?: String
  inspector_in?: String[] | String
  inspector_not_in?: String[] | String
  inspector_lt?: String
  inspector_lte?: String
  inspector_gt?: String
  inspector_gte?: String
  inspector_contains?: String
  inspector_not_contains?: String
  inspector_starts_with?: String
  inspector_not_starts_with?: String
  inspector_ends_with?: String
  inspector_not_ends_with?: String
  results?: String
  results_not?: String
  results_in?: String[] | String
  results_not_in?: String[] | String
  results_lt?: String
  results_lte?: String
  results_gt?: String
  results_gte?: String
  results_contains?: String
  results_not_contains?: String
  results_starts_with?: String
  results_not_starts_with?: String
  results_ends_with?: String
  results_not_ends_with?: String
  notes?: String
  notes_not?: String
  notes_in?: String[] | String
  notes_not_in?: String[] | String
  notes_lt?: String
  notes_lte?: String
  notes_gt?: String
  notes_gte?: String
  notes_contains?: String
  notes_not_contains?: String
  notes_starts_with?: String
  notes_not_starts_with?: String
  notes_ends_with?: String
  notes_not_ends_with?: String
  device?: DeviceWhereInput
  customer?: CustomerWhereInput
  elements_every?: ElementWhereInput
  elements_some?: ElementWhereInput
  elements_none?: ElementWhereInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface DeviceTypeUpsertNestedInput {
  update: DeviceTypeUpdateDataInput
  create: DeviceTypeCreateInput
}

export interface DeviceUpdateWithoutActionsDataInput {
  serialNumber?: String
  UDTNumber?: String
  VINnumber?: String
  recordNumber?: String
  registrationNumber?: String
  productionYear?: String
  producent?: String
  capacity?: String
  type?: DeviceTypeUpdateOneInput
  owner?: CustomerUpdateOneWithoutDevicesInput
}

export interface DeviceTypeUpdateDataInput {
  name?: String
  preferedName?: String
  conservationEveryNDays?: Int
}

export interface CustomerUpsertWithoutDevicesInput {
  update: CustomerUpdateWithoutDevicesDataInput
  create: CustomerCreateWithoutDevicesInput
}

export interface AddressWhereInput {
  AND?: AddressWhereInput[] | AddressWhereInput
  OR?: AddressWhereInput[] | AddressWhereInput
  NOT?: AddressWhereInput[] | AddressWhereInput
  country?: String
  country_not?: String
  country_in?: String[] | String
  country_not_in?: String[] | String
  country_lt?: String
  country_lte?: String
  country_gt?: String
  country_gte?: String
  country_contains?: String
  country_not_contains?: String
  country_starts_with?: String
  country_not_starts_with?: String
  country_ends_with?: String
  country_not_ends_with?: String
  city?: String
  city_not?: String
  city_in?: String[] | String
  city_not_in?: String[] | String
  city_lt?: String
  city_lte?: String
  city_gt?: String
  city_gte?: String
  city_contains?: String
  city_not_contains?: String
  city_starts_with?: String
  city_not_starts_with?: String
  city_ends_with?: String
  city_not_ends_with?: String
  street?: String
  street_not?: String
  street_in?: String[] | String
  street_not_in?: String[] | String
  street_lt?: String
  street_lte?: String
  street_gt?: String
  street_gte?: String
  street_contains?: String
  street_not_contains?: String
  street_starts_with?: String
  street_not_starts_with?: String
  street_ends_with?: String
  street_not_ends_with?: String
  building?: String
  building_not?: String
  building_in?: String[] | String
  building_not_in?: String[] | String
  building_lt?: String
  building_lte?: String
  building_gt?: String
  building_gte?: String
  building_contains?: String
  building_not_contains?: String
  building_starts_with?: String
  building_not_starts_with?: String
  building_ends_with?: String
  building_not_ends_with?: String
  postCode?: String
  postCode_not?: String
  postCode_in?: String[] | String
  postCode_not_in?: String[] | String
  postCode_lt?: String
  postCode_lte?: String
  postCode_gt?: String
  postCode_gte?: String
  postCode_contains?: String
  postCode_not_contains?: String
  postCode_starts_with?: String
  postCode_not_starts_with?: String
  postCode_ends_with?: String
  postCode_not_ends_with?: String
  postDepartment?: String
  postDepartment_not?: String
  postDepartment_in?: String[] | String
  postDepartment_not_in?: String[] | String
  postDepartment_lt?: String
  postDepartment_lte?: String
  postDepartment_gt?: String
  postDepartment_gte?: String
  postDepartment_contains?: String
  postDepartment_not_contains?: String
  postDepartment_starts_with?: String
  postDepartment_not_starts_with?: String
  postDepartment_ends_with?: String
  postDepartment_not_ends_with?: String
}

export interface DeviceUpsertWithWhereUniqueWithoutOwnerInput {
  where: DeviceWhereUniqueInput
  update: DeviceUpdateWithoutOwnerDataInput
  create: DeviceCreateWithoutOwnerInput
}

export interface CustomerUpdateInput {
  name?: String
  nip?: String
  regon?: String
  address?: AddressUpdateOneInput
  devices?: DeviceUpdateManyWithoutOwnerInput
}

export interface ElementUpdateWithWhereUniqueNestedInput {
  where: ElementWhereUniqueInput
  data: ElementUpdateDataInput
}

export interface AddressUpdateOneInput {
  create?: AddressCreateInput
  delete?: Boolean
  update?: AddressUpdateDataInput
  upsert?: AddressUpsertNestedInput
}

export interface ActionWhereUniqueInput {
  id?: ID_Input
}

export interface AddressUpdateDataInput {
  country?: String
  city?: String
  street?: String
  building?: String
  postCode?: String
  postDepartment?: String
}

export interface ActionUpdateInput {
  type?: String
  date?: String
  employee?: String
  start?: String
  end?: String
  inspector?: String
  results?: String
  notes?: String
  device?: DeviceUpdateOneWithoutActionsInput
  customer?: CustomerUpdateOneInput
  elements?: ElementUpdateManyInput
}

export interface DeviceUpdateWithoutOwnerDataInput {
  serialNumber?: String
  UDTNumber?: String
  VINnumber?: String
  recordNumber?: String
  registrationNumber?: String
  productionYear?: String
  producent?: String
  capacity?: String
  type?: DeviceTypeUpdateOneInput
  actions?: ActionUpdateManyWithoutDeviceInput
}

export interface DeviceUpdateWithWhereUniqueWithoutOwnerInput {
  where: DeviceWhereUniqueInput
  data: DeviceUpdateWithoutOwnerDataInput
}

export interface DeviceUpdateManyWithoutOwnerInput {
  create?: DeviceCreateWithoutOwnerInput[] | DeviceCreateWithoutOwnerInput
  connect?: DeviceWhereUniqueInput[] | DeviceWhereUniqueInput
  disconnect?: DeviceWhereUniqueInput[] | DeviceWhereUniqueInput
  delete?: DeviceWhereUniqueInput[] | DeviceWhereUniqueInput
  update?: DeviceUpdateWithWhereUniqueWithoutOwnerInput[] | DeviceUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: DeviceUpsertWithWhereUniqueWithoutOwnerInput[] | DeviceUpsertWithWhereUniqueWithoutOwnerInput
}

export interface AddressUpsertNestedInput {
  update: AddressUpdateDataInput
  create: AddressCreateInput
}

export interface CustomerUpdateOneWithoutDevicesInput {
  create?: CustomerCreateWithoutDevicesInput
  connect?: CustomerWhereUniqueInput
  delete?: Boolean
  update?: CustomerUpdateWithoutDevicesDataInput
  upsert?: CustomerUpsertWithoutDevicesInput
}

export interface ElementUpdateInput {
  name?: String
  amount?: Float
  price?: Float
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  username?: String
}

export interface ElementSubscriptionWhereInput {
  AND?: ElementSubscriptionWhereInput[] | ElementSubscriptionWhereInput
  OR?: ElementSubscriptionWhereInput[] | ElementSubscriptionWhereInput
  NOT?: ElementSubscriptionWhereInput[] | ElementSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ElementWhereInput
}

export interface ElementUpsertWithWhereUniqueNestedInput {
  where: ElementWhereUniqueInput
  update: ElementUpdateDataInput
  create: ElementCreateInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ElementPreviousValues {
  id: ID_Output
  name?: String
  amount?: Float
  price?: Float
}

export interface BatchPayload {
  count: Long
}

export interface Address {
  country: String
  city: String
  street?: String
  building: String
  postCode: String
  postDepartment?: String
}

export interface ElementSubscriptionPayload {
  mutation: MutationType
  node?: Element
  updatedFields?: String[]
  previousValues?: ElementPreviousValues
}

export interface DeviceType extends Node {
  id: ID_Output
  name: String
  preferedName?: String
  conservationEveryNDays?: Int
}

export interface Device extends Node {
  id: ID_Output
  type: DeviceType
  serialNumber: String
  UDTNumber: String
  VINnumber?: String
  recordNumber?: String
  registrationNumber?: String
  productionYear: String
  producent: String
  capacity?: String
  owner: Customer
  actions?: Action[]
}

export interface Customer extends Node {
  id: ID_Output
  name: String
  nip: String
  regon?: String
  address: Address
  devices?: Device[]
}

export interface AggregateElement {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ElementConnection {
  pageInfo: PageInfo
  edges: ElementEdge[]
  aggregate: AggregateElement
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface ActionEdge {
  node: Action
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface AggregateDeviceType {
  count: Int
}

export interface ActionPreviousValues {
  id: ID_Output
  type: String
  date: String
  employee?: String
  start?: String
  end?: String
  inspector?: String
  results?: String
  notes?: String
}

/*
 * A connection to a list of items.

 */
export interface DeviceTypeConnection {
  pageInfo: PageInfo
  edges: DeviceTypeEdge[]
  aggregate: AggregateDeviceType
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface DeviceEdge {
  node: Device
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  username: String
  password: String
  displayName: String
}

export interface AggregateAddress {
  count: Int
}

export interface ActionSubscriptionPayload {
  mutation: MutationType
  node?: Action
  updatedFields?: String[]
  previousValues?: ActionPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AddressConnection {
  pageInfo: PageInfo
  edges: AddressEdge[]
  aggregate: AggregateAddress
}

export interface CustomerSubscriptionPayload {
  mutation: MutationType
  node?: Customer
  updatedFields?: String[]
  previousValues?: CustomerPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CustomerEdge {
  node: Customer
  cursor: String
}

export interface CustomerPreviousValues {
  id: ID_Output
  name: String
  nip: String
  regon?: String
}

export interface AggregateUser {
  count: Int
}

export interface User extends Node {
  id: ID_Output
  username: String
  password: String
  displayName: String
}

/*
 * An edge in a connection.

 */
export interface ElementEdge {
  node: Element
  cursor: String
}

export interface AddressSubscriptionPayload {
  mutation: MutationType
  node?: Address
  updatedFields?: String[]
  previousValues?: AddressPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ActionConnection {
  pageInfo: PageInfo
  edges: ActionEdge[]
  aggregate: AggregateAction
}

export interface AddressPreviousValues {
  country: String
  city: String
  street?: String
  building: String
  postCode: String
  postDepartment?: String
}

export interface AggregateDevice {
  count: Int
}

export interface Element extends Node {
  id: ID_Output
  name?: String
  amount?: Float
  price?: Float
}

/*
 * An edge in a connection.

 */
export interface AddressEdge {
  node: Address
  cursor: String
}

export interface DeviceSubscriptionPayload {
  mutation: MutationType
  node?: Device
  updatedFields?: String[]
  previousValues?: DevicePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CustomerConnection {
  pageInfo: PageInfo
  edges: CustomerEdge[]
  aggregate: AggregateCustomer
}

export interface AggregateAction {
  count: Int
}

export interface DeviceTypePreviousValues {
  id: ID_Output
  name: String
  preferedName?: String
  conservationEveryNDays?: Int
}

export interface DeviceTypeSubscriptionPayload {
  mutation: MutationType
  node?: DeviceType
  updatedFields?: String[]
  previousValues?: DeviceTypePreviousValues
}

export interface Action extends Node {
  id: ID_Output
  type: String
  date: String
  device: Device
  customer: Customer
  elements?: Element[]
  employee?: String
  start?: String
  end?: String
  inspector?: String
  results?: String
  notes?: String
}

export interface DevicePreviousValues {
  id: ID_Output
  serialNumber: String
  UDTNumber: String
  VINnumber?: String
  recordNumber?: String
  registrationNumber?: String
  productionYear: String
  producent: String
  capacity?: String
}

/*
 * An edge in a connection.

 */
export interface DeviceTypeEdge {
  node: DeviceType
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateCustomer {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface DeviceConnection {
  pageInfo: PageInfo
  edges: DeviceEdge[]
  aggregate: AggregateDevice
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number