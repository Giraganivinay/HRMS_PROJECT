export class User {
    "id": 0;
    "firstname": "";
    "lastname": "";
    "email": "";
    "password": "";
    "role": "";
    "enabled": false;
    "accountNonExpired": false;
    "credentialsNonExpired": false;
    "authorities": [
        {
            "authority": ""
        }
    ];
    "username": "";
    "logged": '';
    "accountNonLocked": false;

}

// export interface User {
//     id: number;
//     firstname: string;
//     lastname: string;
//     email: string;
//     password: string;
//     role: string;
//     enabled: boolean;
//     accountNonLocked: boolean;
//     authorities: { authority: string }[];
//     username: string;
//     logged: boolean;
//     accountNonExpired: boolean;
//     credentialsNonExpired: boolean;
//   }