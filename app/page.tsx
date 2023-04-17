import fs from "fs"
import Link from "next/link"
import matter from "gray-matter"
import { PostMetadata } from "@/components/postMetadata"
import getPostMetadata from "@/components/getPostMetadata"
import PostPreview from "@/components/PostPreview"

const HomePage = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((post) =>  (
    <PostPreview key={post.slug} {...post} />
  ))

  return <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{postPreviews}</div>
}

export default HomePage