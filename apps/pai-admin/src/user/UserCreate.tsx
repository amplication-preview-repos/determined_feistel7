import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { TeamTitle } from "../team/TeamTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Facebook Access Token" source="facebookAccessToken" />
        <BooleanInput
          label="Facebook Access Token Expired"
          source="facebookAccessTokenExpired"
        />
        <TextInput label="Firebase Auth ID" source="firebaseAuthId" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <BooleanInput
          label="Onboarding Completed"
          source="onboardingCompleted"
        />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="teams"
          reference="Team"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
