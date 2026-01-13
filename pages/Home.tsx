
import React from 'react';
import { Link } from 'react-router-dom';
import { products, events } from '../data';

const Home: React.FC = () => {
  const categories = [
    { name: "Women's Apparel", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUBMJLvvvlT0neQWJzzMrcHo9I2Uf3bTzDjFz6-x0xPHt9bSUBBBGgiV6MoXBKbgeAL8kStnGpGlwC4HgYade4nfNyvR38EtJf5MnWgjIQYuCna7d7zaeelZnRInh6rmBL-z_DGHoHrRZqL38MxUzcqAgmnXlnNi6PUtwbvVm58QrSdyrImVSkUV8AbIbJVsDwaQ9Us7XgILCWN_OnN7l7imyWR4jRkPKigF54srignYlrS7yAsYOOo0b9zlSFqVddDK2seT0lHsM3", link: "/category/Apparel" },
    { name: "Men's Apparel", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCihdDHUkvnSIikNrDmOGcuh7AYyHuTRpBKeSqBjGkjtUEPzf0J4WugBVW6Q2o38R0-N7xndXifqL0mNNEAo0pMb5mfSndmQ8GN5IPPhVel5jQ7l3X8g8Ty_CmjU-M_y9j6CVWrVj-D6Guv0efcbJpy_HD7NQ3x3erp3ehMOMfriUC-BPX8IOUid2BLVzfbnjF2HbRvdRCeCHzqpy7RpaeWXieihnJm0Oq8dNGA6c8JC3hF89nSkLGSJfELFXonE8sMineOwqWyVXZ9", link: "/category/Apparel" },
    { name: "Beauty & Skincare", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm5GIgS1C58rFDAXISsw5rQF9NHxiExrN1fQHhmbv4DgYoBJBB748Ztd_SkUIxivgj6Y8X8Zyw4XKWNN9ml-nfR9LNo73mEwvmnuBvbz45gOxho685OP-RKb8J6cNy_d1qtHq5J83ahEqRzovF-fKYp83VHvv4kKTcfZa4hY13QXosoBviUF0SYlzPzbCCBhzx-ciRfU7VLFNlUQezHzP2G9cvdjjfPy6U9CFFjpLsy4V3bncboGXEm3mQDcTqPByvcSkDi_qAyIr9", link: "/category/Beauty" },
    { name: "Accessories", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkjMJuNtOcULIHSmlyfjimY_3jjb8EaQu2lL8XsW1P3J1n3qhSekfQvMrtraxRE6BZDYLgp7iHpLPX77A81QH4yscMVQGL6Jine0gWLadwlk4cymG32xREonSQV6iOHutQ1A2uLbxfajXLkJBshrhBfv8WimiJic4gIY3nGyQ9Z5ws8sHoN_c57pk8lKkW9Bo6JAGwKMryCY1LVAOYRe93upOd9lGnv8D30kC7T9VWoj723PCwsmLo920DMUgF2SYqqqcSQf2LDGb", link: "/category/Accessories" }
  ];

  const featuredSPF = products.find(p => p.id === 'p7');

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-surface-light dark:bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-primary/10 to-transparent rounded-tr-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-24 md:pt-32 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-secondary/10 dark:bg-secondary/20 rounded-full">
                <span className="text-secondary font-bold text-sm tracking-wider uppercase">New Collection 2024</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-primary dark:text-white">
                Elevate Your <br/>
                <span className="bg-gradient-to-r from-primary to-secondary text-gradient text-transparent">Game & Glow</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                Where performance meets elegance. Discover our premium golf apparel, curated beauty essentials, and exclusive lifestyle events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/category/Apparel" className="inline-flex justify-center items-center px-8 py-4 bg-primary hover:bg-accent text-white font-semibold rounded-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1">
                  Shop Collection
                </Link>
                <a href="#about" className="inline-flex justify-center items-center px-8 py-4 bg-white dark:bg-slate-800 text-primary dark:text-secondary border-2 border-primary/20 dark:border-secondary/20 hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold rounded-lg transition-all">
                  Our Story
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-2xl transform rotate-3 opacity-20 blur-xl"></div>
              <img 
                alt="Woman golfer swinging club with elegance" 
                className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full transform -rotate-2 hover:rotate-0 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP8HWxZBzYVQAoMqGinDwampwGrhaZQ47WyGkVHIHNZWnVpSqWQU4fBdNJOZ2Uvuhsnc0dMQOvETPE1rGhLzXtIqQkHIqYnlyXvHbTCzjdG2-yFcuRDkbkgc1iP15DDa1jYsGWBhLArnFrouxDigxpXK4iL3r1UxBmuWiJEIXEaLF56PST12EpsB9lSEkkY1UJylq1T2etFYkvCVihq4wY2WSIZTaATtc_AJxQhNZF7f9zNKgjazknI3Sequ0DzApZl3MyHnJFPCqz"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl max-w-xs hidden md:block border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <span className="material-icons-outlined text-secondary">verified</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 dark:text-white">Premium Quality</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Designed for the course & beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Categories */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Curated Categories</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <Link to={cat.link} key={cat.name} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer block">
                <img alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={cat.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold text-white mb-2">{cat.name}</h3>
                  <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore Collection</p>
                  <span className="inline-flex items-center text-secondary font-semibold group-hover:text-white transition-colors">
                    Explore <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Pick */}
      <section className="py-24 bg-background-light dark:bg-surface-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">Editor's Pick</div>
                <h2 className="font-display text-4xl font-bold text-primary dark:text-white mb-6">The "Fairway Glow" SPF 50 Set</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg leading-relaxed">
                  Specifically formulated for golfers, this lightweight, non-greasy sunscreen keeps your skin protected and radiant through all 18 holes.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Sweat-resistant formula', 'Enriched with Vitamin C & E', 'Eco-friendly packaging'].map((item) => (
                    <li key={item} className="flex items-center text-slate-700 dark:text-slate-200">
                      <span className="material-icons-outlined text-secondary mr-3">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">$65.00</span>
                  <Link to="/product/p7" className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-colors flex items-center gap-2">
                    <span className="material-icons-outlined text-sm">shopping_cart</span> Shop Now
                  </Link>
                </div>
              </div>
              <div className="relative h-96 lg:h-auto order-1 lg:order-2">
                <img alt="SPF Product Set" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDayM14kdVYpQLMrn8yuRZ84Dk-UPQsKpt-7pknlL0An-P0xustVnexT9HWUiTD_WsdtEhyazY5aJVqv-B5ZSRXJqOAzWMB5MHjbFAdK7Q0eVlV-O1yGvEu2lKSlE9gG2xZ6y9yGNEsDZJ_RZ90QOV_BCgkbKmSif-Z0wnq8fnnGm_L4U2J7lsXBgLVo5SXLwqFZ-iB3Xa6PSj6jeI11dFsjA7Z5eNK9KE-gs8VVdmhoBrIDO9AtNZgQmyWb4gc3jyHCR-rkXH-b2zb" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Upcoming Events</h2>
              <p className="text-slate-600 dark:text-slate-400">Join the community on the course.</p>
            </div>
            <Link to="/events" className="text-primary dark:text-secondary font-semibold hover:underline mt-4 md:mt-0 flex items-center">
              View All Calendar <span className="material-icons-outlined ml-1 text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700 flex flex-col">
                <div className="relative h-48">
                  <img alt={event.title} className="w-full h-full object-cover" src={event.image} />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-md text-center border border-slate-200 dark:border-slate-700">
                    <span className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400">{event.month}</span>
                    <span className="block text-xl font-bold text-primary dark:text-white">{event.day}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{event.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <span className="material-icons-outlined text-base mr-1">location_on</span> {event.location}
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <button className="w-full py-2 border border-primary text-primary hover:bg-primary hover:text-white dark:border-secondary dark:text-secondary dark:hover:bg-secondary dark:hover:text-white rounded-lg transition-colors font-medium">
                    Get Tickets
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Stay on the Leaderboard</h2>
          <p className="text-blue-100 mb-8 text-lg">Subscribe for exclusive offers, golf tips, and beauty secrets delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input className="flex-grow px-6 py-4 rounded-lg bg-white/10 text-white placeholder-blue-200 border border-white/20 focus:ring-2 focus:ring-secondary focus:outline-none focus:bg-white/20 transition-all" placeholder="Enter your email address" type="email" />
            <button className="px-8 py-4 bg-secondary hover:bg-white hover:text-primary text-white font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1" type="button">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-blue-200 mt-4">By subscribing, you agree to our Terms & Privacy Policy.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
