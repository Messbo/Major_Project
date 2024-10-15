/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QZadvFLilb1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export  function InitialScreen() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CompassIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Disaster Prep</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Current Alerts
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Volunteer Hub
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Resources
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Get Help
            </Link>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon">
              <SearchIcon className="h-5 w-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs">
                <div className="flex flex-col gap-4 p-4">
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
                    prefetch={false}
                  >
                    Current Alerts
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
                    prefetch={false}
                  >
                    Volunteer Hub
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
                    prefetch={false}
                  >
                    Resources
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
                    prefetch={false}
                  >
                    Get Help
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-b from-transparent to-background/80">
          <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Disaster Preparedness and Response
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground">
              Stay informed, get help, and support your community during emergencies.
            </p>
            <div className="mt-8 flex w-full max-w-md items-center gap-2">
              <Input
                type="search"
                placeholder="Search for alerts,resources,and more"
                className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button className="rounded-md px-4 py-2 text-sm">Search</Button>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Current Alerts</CardTitle>
                  <CardDescription>Stay up-to-date on the latest emergency alerts and warnings.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <CompassIcon className="h-8 w-8 text-primary" />
                      <span className="text-lg font-semibold">12 Active Alerts</span>
                      <span className="text-sm text-muted-foreground">In Your Area</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <BellIcon className="h-8 w-8 text-primary" />
                      <span className="text-lg font-semibold">24/7 Monitoring</span>
                      <span className="text-sm text-muted-foreground">Real-Time Updates</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Alerts
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Hub</CardTitle>
                  <CardDescription>Sign up to volunteer and view current needs in your community.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <UsersIcon className="h-8 w-8 text-primary" />
                      <span className="text-lg font-semibold">1,234 Volunteers</span>
                      <span className="text-sm text-muted-foreground">Signed Up</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <ClipboardListIcon className="h-8 w-8 text-primary" />
                      <span className="text-lg font-semibold">78 Open Needs</span>
                      <span className="text-sm text-muted-foreground">Waiting to be Filled</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Join Volunteer Hub
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                  <CardDescription>
                    Find helpful information and tools for disaster preparedness and response.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <BookOpenIcon className="h-8 w-8 text-primary" />
                      <span className="text-lg font-semibold">50+ Articles</span>
                      <span className="text-sm text-muted-foreground">Disaster Guides</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <BoxIcon className="h-8 w-8 text-primary" />
                      <span className="text-lg font-semibold">100+ Tools</span>
                      <span className="text-sm text-muted-foreground">Preparedness Kits</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Explore Resources
                  </Link>
                </CardFooter>
              </Card>
              <div className="lg:col-span-3 flex justify-center">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Get Help</CardTitle>
            <CardDescription>Request assistance or report an emergency situation.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2">
                <PhoneIcon className="h-8 w-8 text-primary" />
                <span className="text-lg font-semibold">Emergency Hotline</span>
                <span className="text-sm text-muted-foreground">Call 1-800-123-4567</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FileTextIcon className="h-8 w-8 text-primary" />
                <span className="text-lg font-semibold">Request Form</span>
                <span className="text-sm text-muted-foreground">Submit for Assistance</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href="#"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Get Help Now
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</section>
        <section className="bg-background py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-4">
                <CompassIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Stay Informed</h3>
                <p className="text-muted-foreground">
                  Get real-time updates on emergencies and disasters in your area.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <UsersIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Join the Community</h3>
                <p className="text-muted-foreground">
                  Connect with volunteers and organizations to support your community.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <ClipboardListIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Get the Resources</h3>
                <p className="text-muted-foreground">
                  Access disaster preparedness guides, tools, and emergency assistance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Join our Volunteer Community</h2>
                <p className="mt-4 text-muted-foreground">
                  Lend a helping hand and make a difference in your community. Sign up to volunteer and view current
                  needs.
                </p>
                <div className="mt-8">
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Join Volunteer Hub
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="/volunteers.jpg"
                  width="600"
                  height="400"
                  alt="Volunteers"
                  className="mx-auto rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <img
                  src="/kit.jpg"
                  width="600"
                  height="400"
                  alt="Resources"
                  className="mx-auto rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Comprehensive Disaster Resources</h2>
                <p className="mt-4 text-muted-foreground">
                  Explore our library of disaster preparedness guides, emergency kits, and other helpful tools to keep
                  you and your community safe.
                </p>
                <div className="mt-8">
                  <Link href="#" className="inline-flex items-center" prefetch={false} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CompassIcon className="h-6 w-6 text-muted-foreground"  />
            <span className="text-lg font-semibold">Disaster Prep</span>
          </Link>
          <nav className="space-x-4">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Terms
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function BoxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function ClipboardListIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  )
}


function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}