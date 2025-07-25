// This is a literal type. It's a way to represent a specific value in TypeScript.
type Route = `/${string}`;

export const goToRoute = (route: Route) => {};

// Should succeed:

goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");

//Should error:

//@ts-expect-error
goToRoute("users/1");

goToRoute("/");
