import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";
import { UserNav } from "@/components/admin-panel/user-nav";
import { Navbar } from "@/components/admin-panel/navbar";

export default function DashboardPage() {
  return (
    <div className="">
      <Navbar title="NPMS" />
      <div>
        <h1 className="text:xl mt-5 w-full text-center font-bold text-green-800 md:text-3xl"> Nepse Portfolio Management System</h1>
         <h2 className="mt-5 w-full text-center font-semibold text-green-900 md:text-xl">All your investment summary into a single platform</h2>
      </div>
      
      <Link href="/dashboard" className="absolute left-[43%] top-[50%] rounded-md border border-slate-500 px-4 py-2 hover:bg-slate-100 dark:hover:bg-gray-900">

          Go to Dashboard  <ArrowRight  className="inline pl-3 dark:text-slate-300"/>
 
      </Link>
      
      </div>
  );
}
