## GitHub Copilot Prompt File

### Project Structure

- All pages are located in the main folder, such as the `app` folder, where components are integrated.
- Globally used code is stored in dedicated folders, such as:
  - `@/components/` for shared UI components.
  - `@/hooks/` for reusable hooks.
  - `@/lib/` for shared utilities and setup files, including Supabase configuration.
  - Other global utilities as needed.
- Feature-specific or component-specific code should be structured inside the `features` folder using the following format:
  - `{root}/features/{feature name}/components/` for feature-specific components.
  - `{root}/features/{feature name}/actions/` for feature-specific logic and actions.
  - `{root}/features/{feature name}/hooks/` for feature-specific hooks.
  - `{root}/features/{feature name}/utils/` for feature-specific utilities.

### Framework

- Use **Next.js** as the primary framework.
- Utilize **ShadCN UI** for UI components.
- Ensure proper import paths for ShadCN components (e.g., `@/components/ui/button`).
- Prefer **Lucide React** for icons and **ShadCN UI** for components.
- May use other third-party libraries if necessary or requested by the user.
- Import **ShadCN UI** components from `@/components/ui`.
- Use **React Hook Form** for forms, following the official ShadCN guide.
- Implement **TanStack React Query** for data fetching and state management.
- Use **Supabase** as the database, ensuring full TypeScript support and type safety.
- Support **React Native** code generation when applicable.

#### UI Components

- MUST USE the built-in Tailwind CSS variable-based colors, like `bg-primary` or `text-primary-foreground`.
- When generating UI elements, always check for existing **ShadCN components** before creating new ones.
- Import components using `@/components/ui/...` to maintain consistency.
- Default to server components unless there is a need for client-side interactivity, such as using hooks, event handlers, or managing component-specific state.
- Use the "use client" directive only when necessary for interactive features.
- When using server components, embed client components within them when possible to enable a **server → client → server** flow, ensuring flexibility for server-side logic execution.

#### Forms

- If its a React Native code, Ignore forms rules below.
- Use **React Hook Form** with `zod` validation and `@hookform/resolvers`.
- Use `useForm` from `react-hook-form` and `FormField` from `@/components/ui/form`.
- Use **React Hook Form** with `zod` validation and `@hookform/resolvers`.
- Follow the **ShadCN form guide** for structuring forms.
- Use `useForm` from `react-hook-form` and `FormField` from `@/components/ui/form`.
- When using **React Query** (e.g., `useMutation()`), handle all states including `loading`, `onError`, and `onSuccess`.
  - Ensure the action used in the mutation returns an object containing either `error` or `success`.
  - Check if `data?.error` exists and handle errors accordingly.
  - Use **Sonner toast** for displaying success and error messages.
  ```example code ( this is example for form )
      const { mutate, status } = useMutation({
    mutationFn: ServerAction,
    onError: (error) => {
      toast.error("Error Message");
    },
    onSuccess: (data) => {
      if (data?.error) toast.error(data.error);
      if (data?.success) toast.success(data.success);
    },
  });
  ```
- Perform any necessary changes in the code when requested, such as adapting to external APIs or handling different server action responses.
- Ensure the code dynamically adjusts to changes in returned data structures.
- For example, when using `useMutation()`, handle all possible states and ensure that actions return objects containing `error` or `success` fields for proper error handling.

#### API & Data Fetching

- Use **TanStack Query** (`react-query`) for fetching data instead of `useEffect`.
- Implement API handlers inside `lib/api.ts`.
- Always ensure API responses are strongly typed using TypeScript.
- Prefer `serverActions` and `useMutation` for CRUD operations.

#### Database & Authentication

- Use **Supabase** for database operations with full TypeScript support.
- Prefer `supabase.auth` for authentication management.
- Store and retrieve data using `supabase.from("table_name")`.
- Ensure all queries and mutations are typed correctly.

#### React Native Support

- When working on **React Native**, prioritize cross-platform compatibility.
- Use `react-native` components where necessary.
- Prefer `expo-router` for navigation if using Expo.
- Use `react-native-reusables` for UI components.
- Ignore the form rules mentioned above, as **ShadCN UI is not supported** in React Native.
- Since there are no server actions in React Native, use **Supabase queries directly** inside the mutation function for data handling in forms.
- When generating a React Native form:
  - Use `react-hook-form` for form state management.
  - Use `react-native-reusables` for UI components.
  - Use **NativeWind** for styling.
  - Implement controlled inputs using `Controller` from `react-hook-form`.
  - Ensure proper validation (e.g., required fields, email patterns).
  - Display error messages conditionally below inputs.
  - Use a `TouchableOpacity` button styled with **NativeWind**.
  - Maintain clean, readable, and well-structured code.
  - Apply consistent Tailwind classes (`tw` from NativeWind).

### Accessibility

- Implement accessibility best practices when rendering React components.
- Use semantic HTML elements when appropriate, like `main` and `header`.
- Make sure to use the correct ARIA roles and attributes.
- Remember to use the `sr-only` Tailwind class for screen reader-only text.
- Add alt text for all images, unless they are purely decorative or unless it would be repetitive for screen readers.

### Formatting

- When the JSX content contains characters like `< > { } ``, ALWAYS put them in a string to escape them properly:
  - DON'T write: `<div>1 + 1 < 3</div>`
  - DO write: `<div>{'1 + 1 < 3'}</div>`
- The user expects to deploy this code as is; do NOT omit code or leave comments for them to fill in.

### Additional Notes

- Follow **best practices** for component composition and state management.
- Ensure all code is fully **type-safe**.
- Prioritize **reusability** and **maintainability**.
- Adhere to the existing **project conventions** and **folder structure**.
