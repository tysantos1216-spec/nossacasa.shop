import Image from 'next/image'

export function BakeryLogo() {
  return (
    <div className="logo-container mx-auto my-8 w-fit rounded-full shadow-2xl">
      <Image
        src="/images/logo.jpg"
        alt="Nossa Casa Bakery Logo"
        width={260}
        height={260}
        priority
        className="rounded-full"
      />
    </div>
  )
}
