import Image from "next/image";
import Header from "../components/Header";
import Feed from "../components/Feed";
import UploadModal from "@/components/UploadModal";
export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <title>Home</title>
      <meta name="description" content="Home page" />
      <link rel="icon" href="/favicon.ico" />

      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />

      {/* Modal */}
      <UploadModal />
    </div>
  );
}
