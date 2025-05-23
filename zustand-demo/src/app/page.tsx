import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import UserList from "@/components/UserList";
import Counter from "@/components/Counter";
import TestForm from "@/components/TestForm";
import TestFormBuilder from "@/components/Forms/TestFormBuilder";
import ExampleForm from "@/components/Forms/ExampleForm";
import BlogForm from "@/components/Forms/BlogForm";

// Move this outside so it's shared
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return (
    <>
      {/* <HydrationBoundary state={dehydrate(queryClient)}>
        <UserList />
      </HydrationBoundary> */}

      <div className="h-full">
        <Counter />
      </div>

      <div>
        {/* <TestForm /> */}
        {/* <ExampleForm /> */}

        <BlogForm />

        {/* <TestFormBuilder /> */}
      </div>
    </>
  );
}
