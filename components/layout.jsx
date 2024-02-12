import Head from 'next/head'
import Link from 'next/link'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useContext, useEffect, useState } from 'react'
import { Store } from '../utils/Store'
import { useSession } from 'next-auth/react'

function Layout({ title, children }) {
    const { status, data: session } = useSession()
    const { state } = useContext(Store)
    const { cart } = state
    const [cartItemsCount, setCartItemsCount] = useState(0)

    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0))
    }, [cart.cartItems])
    return (
        <> 

            <Head>
                <title>{ title ? title + ' - App E-Commerce' : 'App E-Commerce' }</title>
                <meta name='description' content='Application Web E-Commerce' />
            </Head> 

            <ToastContainer position='bottom-center' limit={1} />

            <div className='flex min-h-screen flex-col justify-between'>
                <header>
                    <nav className='flex h-16 items-center px-4 justify-between shadow-md'>

                        <Link href="/" className='text-lg font-bold'>samazone</Link>

                        <form className='mx-auto justify-center md:flex'>
                            <input type="text" className='border border-gray-300 rounded-lg p-1 m-0 text-sm focus:ring-0' placeholder='Rechercher un produit'/>

                            <button className='rounded bg-amber-300 p-1 m-1 text-sm dark:text-black'>Recherche</button>
                        </form>
                        <div className='flex items-center z-10'>
                            <Link href="/cart" className='p-2'>
                                Cart
                                {cartItemsCount > 0 && (
                                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                                    {cartItemsCount}
                                    </span>
                                )}
                            </Link>
                            {status === 'loading' ? ('Loading') : session?.user ? (session.user.name) : 
                                (<Link href="/login" className="p-2">Login</Link>)
                            }
                        </div>
                    </nav>
                </header>

                <main className='container m-auto mt-4 px-4'>{ children }</main>

                <footer className='flex h-10 justify-center items-center shadow-inner'>
                    <p>Copyright &copy; 2024</p>
                </footer>
            </div>
        </>
    )
}

export default Layout