import Layout from "@/components/Layout"

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <Layout className="">
      <div>Page {params.slug}</div>
    </Layout>
  )
}
export default Page