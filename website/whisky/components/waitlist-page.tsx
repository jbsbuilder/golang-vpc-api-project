"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Coffee, Wine, Clock, Star, Menu } from "lucide-react"
import Link from "next/link"

export function WaitlistPageComponent() {
  const [parallaxImages, setParallaxImages] = useState({ barrel: 0, coffee: 0 })
  const [formData, setFormData] = useState({ email: "''", firstName: "''", lastName: "''" })
  const [message, setMessage] = useState("''")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(false)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight

      // Show nav when scrolled past hero section
      setIsNavVisible(scrollY > heroHeight * 0.8)

      if (!parallaxRef.current) return

      const parallaxHeight = parallaxRef.current.offsetHeight
      //const totalScrollHeight = heroHeight + parallaxHeight

      if (scrollY > heroHeight) {
        const relativeScroll = (scrollY - heroHeight) % parallaxHeight
        setParallaxImages({
          barrel: relativeScroll * 0.5,
          coffee: relativeScroll * 0.3
        })
      } else {
        setParallaxImages({ barrel: 0, coffee: 0 })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent, action: string) => {
    e.preventDefault()
    let url = ''
    let method = 'POST'
    let body: any = JSON.stringify(formData)

    switch (action) {
      case "'check'":
        url += '/check'
        method = 'GET'
        const headers = new Headers()
        headers.append('email', formData.email)
        body = undefined
        console.log(headers, body)
        break
      case "'update'":
        url += '/update'
        method = 'PUT'
        break
      case "'delete'":
        url += '/delete'
        method = 'DELETE'
        body = JSON.stringify({ email: formData.email })
        break
    }

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: method !== "'GET'" ? body : undefined
      })

      if (!response.ok) throw new Error('Network response was not ok')

      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      console.error('Error:', error)
      setMessage('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-amber-50 relative">
      <nav className={`fixed top-0 left-0 right-0 bg-amber-900 text-white transition-all duration-300 z-50 ${isNavVisible ? "'opacity-100'" : "'opacity-0 -translate-y-full'"}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold">Whisky Coffee Co.</Link>
            <div className="hidden md:flex space-x-4">
              <Link href="#story" className="hover:text-amber-200">Our Story</Link>
              <Link href="#process" className="hover:text-amber-200">Our Process</Link>
              <Link href="#signup" className="hover:text-amber-200">Sign Up</Link>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <Link href="#story" className="block py-2 px-4 hover:bg-amber-800">Our Story</Link>
            <Link href="#process" className="block py-2 px-4 hover:bg-amber-800">Our Process</Link>
            <Link href="#signup" className="block py-2 px-4 hover:bg-amber-800">Sign Up</Link>
          </div>
        )}
      </nav>

      <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}>
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 shadow-text">Whisky Barrel-Aged Coffee</h1>
          <p className="text-2xl mb-8 shadow-text">Join our exclusive waitlist</p>
          <Button 
            onClick={() => window.scrollTo({top: window.innerHeight, behavior: "smooth"})}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div id="story" className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-amber-900">Our Story</h2>
          <div className="max-w-3xl mx-auto text-amber-800 space-y-4">
            <p>
              In the misty highlands of Scotland, where whisky traditions run as deep as the lochs, our journey began. It was here, amidst the rolling hills and ancient distilleries, that we first dreamed of marrying the bold character of Scotch whisky with the rich complexity of coffee.
            </p>
            <p>
              Our search for the perfect bean led us to the sun-drenched slopes of Colombia Andes Mountains. Here, we discovered a rare, high-altitude Arabica, cultivated by a cooperative of small-scale farmers dedicated to sustainable practices. These beans, nurtured in volcanic soil and kissed by mountain mists, promised a flavor profile as nuanced as the finest single malt.
            </p>
            <p>
              But the true magic happened when these exceptional beans met the char-kissed interiors of retired Scotch whisky barrels. In the cool, damp cellars of an old Edinburgh storehouse, we carefully aged our coffee, allowing it to absorb the lingering essences of peated malt, oak, and time itself.
            </p>
            <p>
              The result? A coffee that tells a story with every sip - a tale of Scottish craft, Colombian passion, and a shared love for flavors that transcend borders. Its more than just coffee; its a journey from highland to highland, a testament to the artistry of patience, and a celebration of cultural fusion in every aromatic cup.
            </p>
          </div>
        </div>
      </div>

      <div id="process" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Coffee className="mx-auto mb-4 text-amber-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Select Premium Beans</h3>
              <p className="text-gray-600">We source the finest coffee beans from around the world.</p>
            </div>
            <div className="text-center">
              <Wine className="mx-auto mb-4 text-amber-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Whisky Barrel Selection</h3>
              <p className="text-gray-600">We carefully choose premium whisky barrels for aging our coffee.</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-4 text-amber-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Precise Timing</h3>
              <p className="text-gray-600">We carefully time the aging process for optimal flavor infusion.</p>
            </div>
            <div className="text-center">
              <Star className="mx-auto mb-4 text-amber-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Exquisite Result</h3>
              <p className="text-gray-600">Experience a perfect blend of coffee and whisky notes.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="signup" ref={parallaxRef} className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            transform: `translateY(${parallaxImages.barrel}px)`
          }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center z-10" 
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            transform: `translateY(${parallaxImages.coffee}px)`
          }}
        />
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <form onSubmit={(e) => handleSubmit(e, "'signup'")} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" required onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input type="text" id="firstName" name="firstName" required onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input type="text" id="lastName" name="lastName" required onChange={handleInputChange} />
              </div>
              <Button type="submit" className="w-full">Sign Up</Button>
            </form>
            <div className="mt-4 space-y-2">
              <Button onClick={(e) => handleSubmit(e, "'check'")} className="w-full">Check Status</Button>
              <Button onClick={(e) => handleSubmit(e, "'update'")} className="w-full">Update Info</Button>
              <Button onClick={(e) => handleSubmit(e, "'delete'")} variant="destructive" className="w-full">Delete Info</Button>
            </div>
            {message && (
              <p className={`mt-4 text-center ${message.includes("'error'") ? "'text-red-600'" : "'text-green-600'"}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}