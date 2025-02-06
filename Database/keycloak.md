# Mapping Keycloak Components to Acme Corporation

## Clients

**Definition in Acme:**  
Each application is registered in Keycloak as a client.

- **Acme Portal Client:**  
  Registered with redirect URIs, enabling employees to sign in via Keycloak.
- **Acme Sales API Client:**  
  Uses token-based authentication so that only requests with valid tokens (and proper scopes/roles) are allowed.
- **Acme Mobile App Client:**  
  Configured for mobile-specific authentication flows (using deep linking, etc.).
- **Acme HR System Client:**  
  Configured with additional security and client scopes to include sensitive HR data.

---

## Client Scopes

**Definition in Acme:**  
Acme can define client scopes to standardize the information that gets added to tokens across multiple clients.

- **Profile Scope:**  
  Includes standard claims such as full name, email, and department.
- **Sensitive Data Scope:**  
  Specifically for the HR system, a client scope might add additional claims (like employee ID and clearance level) that are only shared with the HR client.
- **Sales Scope:**  
  For the Sales API, a scope that includes specific permissions or information needed by the Sales department (e.g., region access).

These scopes ensure that when a user logs into the Acme Portal, for example, the token includes all necessary information, while a login to the HR system includes more sensitive details.

---

## Realm Roles

**Definition in Acme:**  
Realm roles are global roles within Acme Corporation’s Keycloak realm.

- **Admin:**  
  A realm role assigned to IT administrators who manage multiple applications.
- **Employee:**  
  A basic role given to all users.
- **Manager:**  
  A role that might be used across several systems for users who have managerial responsibilities.

Realm roles can be granted directly to users or via groups (explained next).

---

## Users

**Definition in Acme:**  
Each employee in Acme has a corresponding user account in Keycloak.

- **John Doe:**  
  An employee in Sales with a user account.
- **Jane Smith:**  
  An HR specialist with a user account.
- **Alice Brown:**  
  An IT administrator with a user account, assigned the Admin realm role.

When these employees log into any of the Acme applications, Keycloak issues them tokens that carry their user details and roles.

---

## Groups

**Definition in Acme:**  
Groups help manage users based on their departments.

- **Sales Group:**  
  All sales representatives (like John Doe) belong here.
- **HR Group:**  
  Contains HR staff such as Jane Smith.
- **IT Group:**  
  Contains IT staff, including Alice Brown.

Each group can have roles assigned. For instance:

- The **Sales Group** might be given a client-specific role like `sales:read` on the Acme Sales API.
- The **HR Group** might be assigned a role like `hr:manage` that is used by the HR system client.

This setup means that when a new sales representative is onboarded, simply adding them to the Sales group automatically provides the correct permissions across all Acme applications.

---

## Sessions

**Definition in Acme:**  
A session represents an active login for a user.

- When John Doe logs into the Acme Portal from his desktop, Keycloak creates a session for him.
- If he also logs into the Acme Mobile App, a separate session may be created, or these sessions might be linked if Single Sign-On (SSO) is enabled.

Sessions allow administrators to see which users are currently logged in, where they are logged in from, and to revoke access if suspicious activity is detected.

---

## Events

**Definition in Acme:**  
Events provide an audit trail of all significant actions.

- A **login event** records when Jane Smith logs into the Acme HR System.
- A **failed login event** is logged if someone tries to access the Acme Portal with the wrong credentials.
- **Role change events** capture when a user’s roles are updated (for example, when a new Manager role is assigned).

Events help Acme Corporation monitor security, troubleshoot issues, and comply with audit requirements.
