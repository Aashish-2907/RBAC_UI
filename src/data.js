export const users = [
    { id: 1, name: "Alice", roles: ["Admin"] },
    { id: 2, name: "Bob", roles: ["Editor"] },
  ];
  
  export const roles = [
    { id: 1, name: "Admin", permissions: ["read", "write", "delete"] },
    { id: 2, name: "Editor", permissions: ["read", "write"] },
  ];
  
  export const permissions = ["read", "write", "delete"];
  