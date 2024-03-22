import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
