import Image from "next/image";
import getPosts from "@/server/actions/get-posts";
import createPosts from "@/server/actions/create-posts";
import PostButton from "./components/post-button";

export default async function Home(){
  const { error, success } = await getPosts()
  console.log(success);
  if(error){
    throw new Error(error);
  }
  if(success){
      return (
      <main>
        {success.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        ))}
        <form action={createPosts}>
            <input type="text" name="title" className="bg-black" placeholder="title"/>
            <PostButton />
        </form>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={10}/>
      </main>
    )
  }
}
