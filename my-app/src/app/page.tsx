import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-2xl">
        {/* Hero Section with Globe Image */}
        <div className="flex flex-col items-center mb-6">
          <Image src="/globe.svg" alt="Global network" width={80} height={80} className="mb-4" />
          <h1 className="text-3xl font-bold text-center mb-2">Connecting Homeowners with Contractors Made Easy</h1>
          <p className="text-center mb-4">Find trusted professionals or get hired for your trade. Top-Notch makes home projects simple, reliable, and stress-free</p>
          <a href="#signup" className="btn-primary">Join the Waitlist</a>
        </div>

        {/* Features Section with Images */}
        <section id="features" className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <div className="feature flex flex-col items-center">
            <Image src="/window.svg" alt="Trusted Contractors" width={48} height={48} className="mb-2" />
            <h3 className="font-semibold mb-1">Trusted Contractors</h3>
            <p className="text-center text-sm">Vetted professionals with proven track records.</p>
          </div>
          <div className="feature flex flex-col items-center">
            <Image src="/file.svg" alt="Seamless Matching" width={48} height={48} className="mb-2" />
            <h3 className="font-semibold mb-1">Seamless Matching</h3>
            <p className="text-center text-sm">Smart system pairs homeowners with the right contractor.</p>
          </div>
          <div className="feature flex flex-col items-center">
            <Image src="/vercel.svg" alt="Transparent Pricing" width={48} height={48} className="mb-2" />
            <h3 className="font-semibold mb-1">Transparent Pricing</h3>
            <p className="text-center text-sm">Clear estimates and agreements upfront.</p>
          </div>
        </section>
      </main>
      {/* Keep the original footer if needed, or add your own below */}
    </div>
  );
}
