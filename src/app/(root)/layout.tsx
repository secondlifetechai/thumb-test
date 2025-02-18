import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import StreamClientProvider from "@/components/providers/StreamClientProvider";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StreamClientProvider>
        <SignedIn>
          <main className="w-full relative">
            <Navbar />
              {children}
            <Footer />
          </main>
        </SignedIn>
      </StreamClientProvider>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}
export default Layout;
