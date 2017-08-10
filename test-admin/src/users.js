import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';


// Default "Users List" title is overwritten below
// Fields are simple react components
export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);