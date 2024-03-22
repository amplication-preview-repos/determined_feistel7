import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Facebook Access Token" source="facebookAccessToken" />
        <BooleanField
          label="Facebook Access Token Expired"
          source="facebookAccessTokenExpired"
        />
        <TextField label="Firebase Auth ID" source="firebaseAuthId" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <BooleanField
          label="Onboarding Completed"
          source="onboardingCompleted"
        />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
