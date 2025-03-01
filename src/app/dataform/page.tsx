import PersonalData from '../components/ui/PersonalData'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

export default function PersonalDataForm() {
    return (
        <main className="flex flex-col items-center min-h-screen bg-white my-7 p-2">
            <PersonalData />
            <div className="w-full flex justify-center my-5 p-2">
                <Link href="/" className="text-cyan-600 hover:text-cyan-800 flex items-center">
                    <FaHome className="mr-2" />
                    Home
                </Link>
            </div>
        </main>
    )
}