import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Navbar } from "@/components/admin-panel/navbar"

export default function DashboardPage() {
  return (
    <div className="">
      <Navbar title="NPMS" />
      <div>
        <h1 className="w-full mt-5 font-bold text-center text-green-800 text:xl md:text-3xl">
          {" "}
          Nepse Portfolio Management System
        </h1>
        <h2 className="w-full mt-5 font-semibold text-center text-green-900 md:text-xl">
          All your investment summary into a single platform
        </h2>
      </div>

      <Link
        href="/dashboard"
        className="absolute left-[43%] top-[50%] rounded-md border border-slate-500 px-4 py-2 hover:bg-slate-100 dark:hover:bg-gray-900"
      >
        Go to Dashboard{" "}
        <ArrowRight className="inline pl-3 dark:text-slate-300" />
      </Link>
    </div>
  )
}
