import Provider from "components/Provider";
import UsersAndAverage from "components/UsersAndAverage";

const getUsers = async () => {
  const res = await fetch("https://infallible-tereshkova-717266.netlify.app/.netlify/functions/server/users", { method: 'GET' });
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json() as Promise<User[]>;
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-start p-24">
      <div className="w-full flex items-center justify-center text-large pb-40">
        <h1 className='text-bold uppercase'>Average age calculator</h1>
      </div>
      <Provider>
        <UsersAndAverage users={users} />
      </Provider>
    </main>
  )
}
